<template>
  <div class="macos">
    <OsMacosControlBar v-show="windowFullscreenStatus" />
    <template v-if="windowFile.length > 0">
      <OsMacosFileIcon
        v-for="(item, index) in windowFile"
        :key="index + '-file'"
        :index="index"
        :icon="item.icon"
        :icon-alt="item.iconAlt"
        :text="item.text"
        :click-event="item.clickEvent"
        :style="`top: ${topPosition(index)}px`"
      />
    </template>
    <template v-if="windowList.length > 0">
      <template v-for="(window, index) in windowList">
        <component :key="index + '-window'" :is="window.component"></component>
      </template>
    </template>
    <OsMacosDock v-show="windowFullscreenStatus" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FinderWindow from './macos/FinderWindow.vue'
import { clientLanguage } from '~/plugins/language'
export default {
  name: 'MacOs',
  components: {
    FinderWindow,
  },
  computed: {
    ...mapState(['windowFile', 'windowList', 'windowFullscreenStatus']),
  },
  mounted() {
    this.setInitialIcon()
  },
  methods: {
    ...mapActions(['addNewFile', 'addWindowList']),

    topPosition(index) {
      const height = 110
      const offset = 50
      if (index === 0) {
        return offset
      }

      return offset + height * index
    },
    setInitialIcon() {
      this.addNewFile({
        icon: '/img/macos/icons/file.png',
        iconAlt: 'macos file icon',
        text: `Berkay-UZUN-CV-${clientLanguage()}.pdf`,
        clickEvent: () => {
          this.addWindowList({
            icon: '/img/macos/icons/file.png',
            component: 'OsMacosCvWindow',
          })
        },
      })

      this.addNewFile({
        icon: '/img/macos/icons/folder.svg',
        iconAlt: 'macos folder icon',
        text: `Projects`,
      })

      this.addNewFile({
        icon: '/img/macos/icons/folder.svg',
        iconAlt: 'macos folder icon',
        text: `Blogs`,
      })
    },
  },
}
</script>

<style lang="scss">
.macos {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('~/static/img/macos/wallpaper/ventura.jpg');
  cursor: url('~/static/img/macos/cursor/pointer.svg'), 0, 0, auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>
