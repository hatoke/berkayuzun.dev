<template>
  <div class="windows">
    <osWindowsTaskBar />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.windows {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('~/static/img/windows/wallpaper/light.jpg');
  background-size: cover;
  background-position-y: -20px;
}
</style>
