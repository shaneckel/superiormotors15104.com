<template>
  <main>
    <header class="feature secondary">
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
    <footer class="red">
      <div class="info">
        <p>Superior Motors<span>|</span>Braddock, Pa</p>
        <p><a href="tel:4122711022">(412) 271-1022</a></p>
        <p><a href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602">1211 Braddock Ave, 15104</a></p>
        <p><a href="http://www.opentable.com/single.aspx?rid=289261&restref=289261">Make A Reservation</a></p>
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
