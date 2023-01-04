<template>
  <div class="macos">
    <OsMacosControlBar />
    <OsMacosFileIcon icon="/img/macos/icons/file.png" text="Berkay-UZUN-CV-TR.pdf" />
    <OsMacosDock />
  </div>
</template>

<script>
export default {}
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
