<template>
  <div>
    <Loading />
    <screen-frame />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Loading from '~/components/Loading.vue'
import ScreenFrame from '~/components/ScreenFrame.vue'

export default Vue.extend({
  components: { ScreenFrame, Loading },
  head: {
    title: 'Berkay UZUN - Delusional Developer',
  },
  name: 'IndexPage',
})
</script>
