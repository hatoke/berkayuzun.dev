<template>
  <div class="window-frame">
    <object
      class="cv"
      data="/pdf/Berkay-UZUN-CV-TR.pdf"
      type="application/pdf"
    />
  </div>
</template>

<script>
import dragElement from '~/assets/js/drag'
export default {
  name: 'WindowFrame',
  data() {
    return {}
  },
  mounted() {
    const windowFrame = document.querySelector('.window-frame')
    dragElement(windowFrame)
  },
  methods: {},
}
</script>

<style lang="scss">
.window-frame {
  width: 600px;
  height: 500px;
  padding: 30px 10px 10px;
  border-radius: 10px;
  position: relative;
  background-color: #333;
  color: #fff;

  object {
    width: 100%;
    height: 100%;
  }
}
</style>
