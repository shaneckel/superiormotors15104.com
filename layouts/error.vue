<template>
  <section class="container">

    <nuxt-link class="button" to="/" v-if="error.statusCode === 404"><h1 class="title">404</h1></nuxt-link>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped lang="scss">
@import 'assets/scss/vars';

.button{
  width: 25%;
  display: block;
  text-align: center;
  margin: 5em auto 2em;

}
h1{
  font-family: $tungsten;
  font-size: 4.2em;
  padding: .2em 1em;
}
</style>
