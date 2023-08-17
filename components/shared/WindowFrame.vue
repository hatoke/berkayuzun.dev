<template>
  <div
    class="window-frame"
    :class="fullScreen && 'full-screen'"
    @dblclick="setFullScreen()"
  >
    <div class="window-content">
      <slot></slot>
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
    dragElement(windowFrame)
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
  padding: 0 15px;
  border-radius: 10px;
  position: absolute;
  z-index: 15;
  top: calc(50% - 250px);
  left: calc(50% - 300px);
  background-color: #333;
  color: #fff;
}

.window-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.full-screen {
  width: 100%;
  height: 100%;
  top: 0px !important;
  left: 0 !important;
  right: 0 !important;
  transition: 200ms all ease;
}
</style>
