<template>
  <main>
    <header class="feature secondary art">
      <nav class="skewright">
        <sub-nav></sub-nav>
      </nav>
    </header>
    <article class="articles skewleft inside list">
      <section class="content">
        <h3>{{ timeFix(article.data.fragments['articles.date'].value) }}</h3>
        <h2>{{ article.data.data['articles.title'].value}}</h2>
        <div v-html="article.body"></div>
        <img v-if="article.data.data['articles.image']" :src="article.data.data['articles.image'].value.main.url" />
      </section>
    </article>
    <sub-foot theme="red"></sub-foot>
  </main>
</template>

<script>
import axios from '~plugins/axios'
import format from 'date-fns/format'
import SubNav from '~components/SubNav.vue'
import SubFoot from '~components/SubFooter.vue'

export default {
  components: {
    SubNav,
    SubFoot
  },
  name: 'articles',
  asyncData ({ params, error }) {
    return axios.get('/api/articles/' + params.uid)
      .then((res) => {
        return { article: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'article not found' })
      })
  },
  methods: {
    timeFix (arg) {
      return format(arg, 'MMMM DD, YYYY')
    }
  }
}
</script>

<style lang="scss" scoped>
.articles img{
  padding-bottom: 2em;
}
</style>
