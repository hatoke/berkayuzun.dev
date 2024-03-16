<template>
  <div class="window-frame" :class="fullScreen && 'full-screen'">
    <div class="window-header" @dblclick="setFullScreen()">
      <slot name="header"></slot>
    </div>
    <div class="window-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import dragElement from '~/assets/js/drag'
export default {
  name: 'WindowFrame',
  data() {
    return {
      fullScreen: false,
    }
  },
  computed: {
    ...mapState(['windowFullscreenStatus']),
  },
  watch: {
    windowFullscreenStatus(newStatus) {
      this.fullScreen = !newStatus
    },
  },
  mounted() {
    const windowFrame = document.querySelector('.window-frame')
    const windowHeader = document.querySelector('.window-header')
    dragElement(windowHeader, windowFrame)
  },
  methods: {
    ...mapActions(['updateFullscreenStatus']),

    setFullScreen() {
      this.fullScreen = !this.fullScreen
      this.updateFullscreenStatus(!this.fullScreen)
    },
  },
}
</script>

<style lang="scss">
.window-frame {
  width: 600px;
  height: 500px;
  border-radius: 10px;
  position: absolute;
  z-index: 15;
  top: calc(50% - 250px);
  left: calc(50% - 300px);
  background-color: #333;
  color: #fff;
  overflow: hidden;

  .window-header {
    height: 50px;
    user-select: none !important;
  }

  .window-content {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 100;
    padding: 10px;
    overflow: auto;
  }
}

.full-screen {
  width: 100%;
  height: 100%;
  top: 0px !important;
  left: 0 !important;
  right: 0 !important;
  transition: 200ms all ease;
  border-radius: 0 !important;
}
</style>
