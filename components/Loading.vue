<template>
  <div v-if="loadingStatus" class="loading">
    <div class="loading-frame">
      <img
        width="120px"
        src="/img/macos/apple-white-logo.png"
        alt="Apple Logo"
      />
      <div class="loading-bar">
        <div class="loading-status" :style="`width: ${progresWidth}%`"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  data() {
    return {
      loadingStatus: true,
      progresWidth: 0,
      progressMoveDuration: 700,
    }
  },
  watch: {
    progresWidth(newWidht) {
      if (newWidht >= 100) {
        this.loadingStatus = false
        setTimeout(() => {}, 200)
      }
    },
  },
  mounted() {
    this.progressBarMove()
  },
  methods: {
    progressBarMove() {
      const progressInterval = setInterval(() => {
        const nextMove = Math.floor(Math.random() * 25)
        this.progressMoveDuration = Math.floor(Math.random() * 2200)
        if (nextMove + this.progresWidth >= 100) {
          this.progresWidth = 100
          clearInterval(progressInterval)
        } else {
          this.progresWidth += nextMove
        }
      }, this.progressMoveDuration)
    },
  },
}
</script>

<style lang="scss">
.loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: 1000;
}

.loading-frame {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 50%;
  }
}

.loading-bar {
  width: 300px;
  border-radius: 15px;
  height: 6px;
  background-color: #474747;

  .loading-status {
    border-radius: 15px;
    height: 100%;
    background: #fff;
    transition: 250ms all ease;
  }
}
</style>
