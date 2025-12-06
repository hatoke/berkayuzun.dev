<template>
  <div id="cv-window">
    <SharedWindowFrame>
      <template #header>
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
      </template>
      <template #content>
        <div class="cv-content">
          <div class="times-change">
            <div
              class="tenor-gif-embed"
              data-postid="13230689"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="100%"
            >
              <a
                href="https://tenor.com/view/worldofwar-timeschange-change-garrosh-gif-13230689"
                >Worldofwar Timeschange GIF</a
              >from
              <a href="https://tenor.com/search/worldofwar-gifs"
                >Worldofwar GIFs</a
              >
            </div>
            <script
              type="text/javascript"
              async
              src="https://tenor.com/embed.js"
            ></script>
          </div>
        </div>
      </template>
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
      this.updateFullscreenStatus(true)
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

.cv-content{
  position: relative;
  width: 100%;
  height: 100%;  
  overflow: hidden;

  .times-change {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 500px;
}
}
</style>
