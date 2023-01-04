<template>
  <ul class="small-dropdown">
    <li
      v-for="(item, index) in menuList"
      :key="index"
      @click="clickEvent(item)"
    >
      <div class="item">
        <span>{{ item.text }}</span>
      </div>
      <hr v-if="item.hr" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SmallDropDown',
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clickEvent(item) {
      if (item.click && typeof item.click === 'function') {
        item.clik()
      }
    },
  },
}
</script>

<style scoped lang="scss">
.small-dropdown {
  z-index: 10;
  min-width: 220px;
  width: auto;
  z-index: 2;
  position: absolute;
  top: 26px;
  left: 0;
  background-color: rgba(98, 93, 93, 0.2);
  backdrop-filter: blur(1000px);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    

    .item {
      padding: 2px 10px;
      font-size: 12px;
      white-space: nowrap;
      width: 100%;
      border-radius: 5px;

      &:hover {
        background-color: rgba(10, 132, 255, 0.6);
      }
    }

    hr {
      width: 90%;
      margin: 4px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
