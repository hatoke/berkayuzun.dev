<template>
  <div id="control-bar" class="control-center">
    <ul class="window-menu">
      <li
        v-for="(item, index) in menuList"
        :key="index"
        :class="focusClass(index)"
        @click="dropdownToggle()"
        @mouseenter="checkDropdown(index)"
        @mouseleave="checkDropdown(index)"
      >
        <img v-if="item.icon" :src="item.icon" :alt="item.iconAlt" />
        <span v-if="item.text">{{ item.text }}</span>
        <template v-if="item.subMenu">
          <SharedSmallDropdown
            v-show="dropdownShowStatus(index)"
            :menu-list="item.subMenu"
          />
        </template>
      </li>
    </ul>
    <ul class="cloak">
      <li>{{ dateTime }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'
import { clientLanguage } from '~/plugins/language'
export default {
  name: 'ControlBar',
  data() {
    return {
      menuDropdownStataus: false,
      mouseOverIndex: -1,
      menuList: [
        {
          icon: '/img/macos/icons/apple-logo-white.png',
          iconAlt: 'apple logo',
          subMenu: [
            {
              text: 'About Me :P',
              hr: true,
            },
            {
              text: 'System Settings',
            },
          ],
        },
        {
          text: 'Finder',
          subMenu: [
            {
              text: 'About Finder',
            },
          ],
        },
        {
          text: 'File',
          subMenu: [
            {
              text: 'New File',
              click: this.createNewFile,
            },
          ],
        },
        {
          text: 'Edit',
          subMenu: [
            {
              text: 'Undo Rename',
            },
            {
              text: 'Redo',
              hr: true,
            },
            {
              text: 'Cut',
            },
          ],
        },
        {
          text: 'View',
        },
        {
          text: 'History',
        },
      ],
      dateTime: new Date(),
    }
  },
  mounted() {
    this.setTimeFormat()
    window.setInterval(() => {
      this.setTimeFormat()
    }, 1000)
  },
  methods: {
    ...mapActions(['addNewFile']),

    setTimeFormat() {
      this.dateTime = `${moment().format('DD MMMM ddd HH:mm')}`
    },

    createNewFile() {
      this.addNewFile({
        icon: '/img/macos/icons/file.png',
        iconAlt: 'macos file icon',
        text: `Berkay-UZUN-CV-${clientLanguage()}.pdf`,
      })
    },
    focusClass(index) {
      if (this.mouseOverIndex === index && this.menuDropdownStataus) {
        return 'focus'
      }
    },
    dropdownShowStatus(index) {
      return this.menuDropdownStataus && this.mouseOverIndex === index
    },
    dropdownToggle() {
      this.menuDropdownStataus = !this.menuDropdownStataus
    },
    checkDropdown(index) {
      if (this.mouseOverIndex !== index) {
        this.mouseOverIndex = index
      }
    },
  },
}
</script>

<style scoped lang="scss">
.control-center {
  padding: 1px 5px;
  backdrop-filter: blur(10px) saturate(55%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  font-size: 14px;
  color: #fff;

  .window-menu {
    display: flex;
    align-items: center;
    font-weight: 500;

    .focus {
      background-color: rgba(255, 255, 255, 0.1);
    }

    li:nth-child(2) {
      font-weight: bold;
    }

    li {
      padding: 3px 10px;
      user-select: none;
      border-radius: 3px;
      position: relative;

      &:active {
        background-color: rgba(255, 255, 255, 0.1);
      }

      img {
        width: 14px;
      }
    }
  }
}
</style>
