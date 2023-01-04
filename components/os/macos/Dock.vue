<template>
  <div class="macos-dock-wrapper">
    <ul class="macos-dock">
      <li
        v-for="(app, index) in appList"
        :key="index"
        :class="app.class && app.class"
        @click="app.click && app.click()"
      >
        <img :src="app.img" :alt="app.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dock',
  data() {
    return {
      appList: [
        {
          name: 'Finder',
          img: '/img/macos/icons/finder.png',
        },
        {
          name: 'Google Chrome',
          img: '/img/macos/icons/google-chrome.png',
        },
        {
          name: 'VS Code',
          img: '/img/macos/icons/vs-code.png',
        },
        {
          name: 'Figma',
          img: '/img/macos/icons/figma.png',
          class: 'figma',
        },
        {
          name: 'Docker',
          img: '/img/macos/icons/docker.png',
          class: 'docker',
        },
        {
          name: 'Postman',
          img: '/img/macos/icons/postman.png',
        },
        {
          name: 'Mongo',
          img: '/img/macos/icons/mongo.png',
        },
        {
          name: 'Github',
          img: '/img/macos/icons/github.png',
          click: this.openGitHubPage,
        },
        {
          name: 'System Settings',
          img: '/img/macos/icons/settings.png',
        },
      ],
    }
  },
  methods: {
    checkFunction(item) {
      if (item.click && typeof item.click === 'function') {
        item.click()
      }
    },
    openGitHubPage() {
      window.open('https://github.com/hatoke', '_blank')
    },
  },
}
</script>

<style lang="scss">
.macos-dock-wrapper {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);

  .macos-dock {
    margin-bottom: 5px;
    padding: 0 3px 4px 3px;
    backdrop-filter: blur(2px) saturate(90%);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    transition: 200ms all ease;

    &:hover {
      transform: scale(1.09);
    }

    .docker {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
      img {
        width: 45px !important;
      }
    }

    li {
      transition: 200ms all ease;
      margin: 0 2px;

      img {
        width: 55px;
      }

      &:hover {
        transform: translateY(-8px) scale(1.1);

        & + li {
          transform: translateY(-4px) scale(1.1);
        }
      }

      &:has(+ li:hover) {
        transform: translateY(-4px) scale(1.1);
      }
    }
  }
}
</style>
