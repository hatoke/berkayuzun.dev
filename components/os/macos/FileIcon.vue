<template>
  <div class="file" @dblclick="clickEvent(index)">
    <img :src="icon" :alt="iconAlt" />
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
    index: {
      type: Number,
      required: true,
    },
    iconAlt: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    clickEvent: {
      type: Function,
      default: () => {},
      required: false,
    },
  },
  mounted() {
    const fileElement = document.querySelectorAll('.file')
    fileElement.forEach((element) => {
      dragElement(element)
    })
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
  min-width: 100px;
  min-height: 100px;

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
    user-select: none;
    padding: 0 2px;
  }
}
</style>
