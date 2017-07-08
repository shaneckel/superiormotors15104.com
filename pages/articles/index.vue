<template>
  <main>
    <header class="feature secondary art">
      <nav class="skewright">
        <sub-nav></sub-nav>
      </nav>
    </header>
    <article class="articles skewleft list">
      <section class="content">
        <h1>articles</h1>
        <article v-for="article in articles">
          <h2>{{ article.data['articles.title'].value}}</h2>
          <h3>{{ timeFix(article.fragments['articles.date'].value) }}</h3>
          <p>{{ shorten(article.data['articles.body'].value[0].text, 200) }} <nuxt-link :to="'/articles/' + article.uid">read more</nuxt-link></p>
        </article>
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
  name: 'articles',

  components: {
    SubNav,
    SubFoot
  },

  asyncData ({ params, error }) {
    return axios.get('/api/articles/')
      .then((res) => {
        return { articles: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'article not found' })
      })
  },

  methods: {
    shorten (arg, n) {
      return (arg.match(RegExp('.{' + n + '}\\S*')) || [arg])[0]
    },
    timeFix (arg) {
      return format(arg, 'MMMM DD, YYYY')
    }
  }
}
</script>
