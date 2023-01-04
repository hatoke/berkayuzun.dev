<template>
  <nav class="px-5 py-1 flex items-center justify-between">
    <div>
      <h1>Berkay UZUN</h1>
      <small>Front-End Developer</small>
    </div>
    <ul class="flex">
      <li
        v-for="(item, index) in navList"
        :key="index"
        class="mr-3 cursor-pointer"
      >
        <template v-if="item.link">
          <a :href="item.link">
            {{ item.name }}
            <i :class="item.icon"></i>
          </a>
        </template>
        <template v-if="item.click">
          <div @click="item.click">
            <span>{{ item.name }}</span>
          </div>
        </template>
        <template v-else>
          <span>{{ item.name }}</span>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigtaionBar',
  data() {
    return {
      navList: [
        {
          name: 'Projects',
        },
        {
          name: 'Roadmap',
        },
        {
          icon: 'git',
          name: 'GitHub',
          link: '',
        },
        {
          icon: 'linkdin',
          name: 'Linkdin',
          link: '',
        },
        {
          icon: 'Theme',
          name: 'Theme',
          click: this.changeTheme,
        },
      ],
    }
  },
  methods: {
    changeTheme() {
      console.log('change theme function')
    },
  },
}
</script>

<style lang="scss"></style>
