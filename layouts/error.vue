<template>
  <section class="container">
    <h1 class="title">Error</h1>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Home
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>
