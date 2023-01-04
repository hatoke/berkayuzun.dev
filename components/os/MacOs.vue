<template>
  <div class="macos">
    <OsMacosControlBar />
    <template v-if="windowFile.length > 0">
      <OsMacosFileIcon
        v-for="(item, index) in windowFile"
        :key="index"
        :icon="item.icon"
        :text="item.text"
      />
    </template>
    <OsMacosDock />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MacOs',
  computed: {
    ...mapState(['windowFile', 'windowList']),
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
  background-image: url('~/static/img/macos/wallpaper/dark-purple.jpg');
  cursor: url('~/static/img/macos/cursor/pointer.svg'), 0, 0, auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>
