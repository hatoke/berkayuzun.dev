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
import { mapState } from 'vuex'
export default {
  name: 'Dock',
  data() {
    return {
      appList: [
        {
          name: 'Finder',
          img: '/img/macos/icons/finder.png',
          alt: 'macos finder icon',
        },
        {
          name: 'Google Chrome',
          img: '/img/macos/icons/google-chrome.png',
          alt: 'macos google chrome desktop app icon',
        },
        {
          name: 'VS Code',
          img: '/img/macos/icons/vs-code.png',
          alt: 'macos visual code desktop app icon',
        },
        {
          name: 'Figma',
          img: '/img/macos/icons/figma.png',
          alt: 'macos figma app desktop icon',
        },
        {
          name: 'Docker',
          img: '/img/macos/icons/docker.png',
          class: 'docker',
          alt: 'macos docker desktop app icon',
        },
        {
          name: 'Postman',
          img: '/img/macos/icons/postman.png',
          alt: 'macos postman desktop app icon',
        },
        {
          name: 'Mongo',
          img: '/img/macos/icons/mongo.png',
          alt: 'macos mongodb desktop app icon',
        },
        {
          name: 'Data Grip',
          img: '/img/macos/icons/data-grip.png',
          alt: 'macos datagrip desktop app icon',
        },
        {
          name: 'Github',
          img: '/img/macos/icons/github.png',
          alt: 'macos github desktop app icon',
          click: this.openGitHubPage,
        },
        {
          name: 'System Settings',
          img: '/img/macos/icons/settings.png',
          alt: 'macos settings icon',
        },
      ],
    }
  },
  computed: {
    ...mapState(['windowList']),
  },
  watch: {
    windowList(newList) {
      if (newList.length > 0) {
        const { icon, component } = newList.at(-1)
        this.appList.push({
          name: component,
          img: icon,
          alt: component,
        })
      } else {
        this.appList.splice(-1, 1)
      }
    },
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
  z-index: 30;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);

  //TODO icon size inc and scla blur problem maybe solved dec scale value
  .macos-dock {
    margin-bottom: 3px;
    padding: 3px 3px 4px 3px;
    backdrop-filter: blur(2px) saturate(90%);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    transition: 200ms all ease;

    &:hover {
      transform: scale(1.1);
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
      transition: 300ms all ease;
      margin: 0 2px;

      img {
        width: 55px;
      }

      &:hover {
        transform: translateY(-12px) scale(1.1);

        & + li {
          transform: translateY(-6px) scale(1.1);
        }
      }

      &:has(+ li:hover) {
        transform: translateY(-4px) scale(1.1);
      }
    }
  }
}
</style>
