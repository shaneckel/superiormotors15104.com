<template lang="pug">
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
        <p>{{article}}</p>
      </section>
    </article>
    <footer class="red">
      <div class="info">
        <p>Superior Motors | Braddock, Pa</p>
        <p><a href="tel:9174559207">(917) 455-9207</a></p>
        <p><a href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602">1211 Braddock Ave, 15104</a></p>
        <p><a href='https://www.opentable.com/r/superior-motors-reservations-pittsburgh?restref=289261&lang=en'>Make A Reservation</a></p>
        <p><a href="https://www.facebook.com/superiormotors15104">facebook</a><span>|</span><a href="https://twitter.com/SM15104">twitter</a><span>|</span><a href="https://instagram.com/superiormotors15104/">instagram</a></p>
      </div>
    </footer>
  </main>
</template>

<script>
import axios from '~plugins/axios'

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
  }
}
</script>
