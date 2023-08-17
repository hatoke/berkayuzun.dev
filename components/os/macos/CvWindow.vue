<template>
  <div class="cv-window">
    <SharedWindowFrame>
      <div class="frame-menu">
        <ul class="window-manager">
          <li class="close" @click="closeModal()"></li>
          <li class="minimize"></li>
          <li class="fullscreen" @click="setFullScreen()"></li>
        </ul>

        <ul class="menu-list">
          <li class="file-name">
            <span>Berkay-UZUN-CV-{{ language }}.pdf</span>
            <small>Page 1</small>
          </li>
        </ul>
      </div>
      <object :data="`/pdf/Berkay-UZUN-CV-${language}.pdf`"></object>
    </SharedWindowFrame>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { clientLanguage } from '~/plugins/language'
export default {
  name: 'CvWindow',
  computed: {
    ...mapState(['windowFullscreenStatus']),
    language() {
      return clientLanguage()
    },
  },
  methods: {
    ...mapActions(['removeWindowList', 'updateFullscreenStatus']),

    setFullScreen() {
      this.updateFullscreenStatus(!this.windowFullscreenStatus)
    },
    closeModal() {
      this.removeWindowList('OsMacosCvWindow')
      this.updateFullscreenStatus(false)
    },
  },
}
</script>

<style lang="scss">
.frame-menu {
  display: flex;
  align-items: center;
  height: 50px;
  background: #fff;
  position: absolute;
  top: 10;
  left: -15px;
  right: -15px;
  z-index: 25;
  border-radius: 10px 10px 0 0;
  background-color: rgba(90, 88, 94, 1);
  padding: 0 20px;
  font-size: 12px;

  .window-manager {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;

    li {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 7px;
      position: relative;
    }

    .close {
      background-color: #ff605c;
    }

    .minimize {
      background-color: #ffbd44;
    }

    .fullscreen {
      background-color: #00ca4e;
    }
  }

  .menu-list {
    display: flex;
    align-items: center;
  }

  .file-name {
    display: flex;
    flex-direction: column;
    user-select: none;

    span {
      font-weight: bold;
    }
  }
}

object {
  position: relative;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 21;

  embed {
    overflow-x: hidden !important;
  }
}
</style>
