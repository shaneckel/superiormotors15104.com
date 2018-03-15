<template>
  <main>
    <header class="secondary third">
      <nav class="skewleft">
        <sub-nav></sub-nav>
      </nav>
    </header>
    <article class="skewleft support articles list">
      <section class="content">
        <h1>Thank you {{supporter}}</h1>
        <p>Without you, Superior Motors would not have happened.</p>
      </section>
    </article>
    <sub-foot theme="red"></sub-foot>
  </main>
</template>

<script>
import axios from '~/plugins/axios'
import SubNav from '../../components/SubNav.vue'
import SubFoot from '../../components/SubFooter.vue'

export default {
  components: {
    SubNav,
    SubFoot
  },

  asyncData ({ params, error }) {
    return axios.get('/api/supporters/' + params.id)
      .then((res) => {
        return { supporter: res.data[0][Object.getOwnPropertyNames(res.data[0])[0]] }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'supporter not found' })
      })
  }
}
</script>

<style lang="scss" scoped>

.support{
  h1{
    padding-top: 3.2em;
  }
}

.third{
  margin-bottom: 1%;
  z-index: 999;
  background: none;
  &:after, &:before{
    display: none;
  }
}

.third .skewleft{
  margin-top: 6em;
}
</style>
