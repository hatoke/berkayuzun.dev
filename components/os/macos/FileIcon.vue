<template>
  <div class="file">
    <img :src="icon" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import dragElement from '~/assets/js/drag'
export default {
  name: 'FileIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const fileElement = document.querySelector('.file')
    dragElement(fileElement)
  },
}
</script>

<style scoped lang="scss">
.file {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:active {
    span {
      background-color: rgba(10, 132, 255, 0.6);
    }
  }

  img {
    width: 65px;
  }

  span {
    text-align: center;
    font-size: 12px;
    color: #fff;
    max-width: 100px;
    border-radius: 5px;
  }
}
</style>
