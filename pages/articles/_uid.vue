<template>
  <main>
    <header class="feature secondary ">
      <nav class="skewright">
        <ul class="content">
          <li>
            <figure>
              <nuxt-link class="button" :to="'/'">
                <img src="/img/superiormotors.min.png" alt="superior motors logomark"/>
              </nuxt-link>
            </figure>
          </li>
          <li><nuxt-link class="button" :to="'/kevinsousa/'">chef</nuxt-link></li>
          <li><nuxt-link class="button" :to="'/articles/'">articles</nuxt-link></li>
        </ul>
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
    <footer class="red">
      <div class="info">
        <p>Superior Motors | Braddock, Pa</p>
        <p><a href="tel:9174559207">(917) 455-9207</a></p>
        <p><a href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602">1211 Braddock Ave, 15104</a></p>
        <p><a href='http://www.opentable.com/single.aspx?rid=289261&restref=289261'>Make A Reservation</a></p>
        <p><a href="https://www.facebook.com/superiormotors15104">facebook</a><span>|</span><a href="https://twitter.com/SM15104">twitter</a><span>|</span><a href="https://instagram.com/superiormotors15104/">instagram</a></p>
      </div>
    </footer>
  </main>
</template>

<script>
import axios from '~plugins/axios'
import format from 'date-fns/format'

export default {
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
