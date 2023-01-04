<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <span>Bumaladım</span>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>
