<template>
  <div class="screen-frame">
    <component :is="osSetup.componentName"></component>
  </div>
</template>

<script>
export default {
  name: 'ScreenFrame',
  data() {
    return {
      detectedOs: '',
      osList: {
        mac: {
          wallpaper: './img/mac-wallpaper.jpg',
          componentName: 'osMacOs',
        },
        windows: {
          wallpaper: 'Windows',
          componentName: 'osWindowsOs',
        },
        linux: {
          wallpaper: 'Linux',
        },
      },
    }
  },
  computed: {
    osSetup() {
      return this.detectedOs ? this.osList[this.detectedOs] : this.osList.mac
    },
  },
  mounted() {
    this.checkOS()
  },
  methods: {
    checkOS() {
      // TODO open to done when finished other os
      /* if (!this.$route.query.os) {
        const userAgent = window.navigator.userAgent
        if (userAgent.indexOf('Macintosh') > -1) this.detectedOs = 'mac'
        if (userAgent.indexOf('Windows') > -1) this.detectedOs = 'windows'
        if (userAgent.indexOf('Linux') > -1) this.detectedOs = 'mac'
      } else if (this.osList[this.$route.query.os]) {
        this.detectedOs = this.$route.query.os
      } else {
        this.detectedOs = 'mac'
      } */
      if (this.$route.query.os && this.osList[this.$route.query.os]) {
        this.detectedOs = this.$route.query.os
      }
      this.detectedOs = 'mac'
    },
  },
}
</script>

<style lang="scss">
.screen-frame {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden !important;
}
</style>
