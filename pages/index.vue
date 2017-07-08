<template>
  <main>
    <header class="feature">
      <aside class="reserve-callout">
        <p><a href="#reservation">reservations available</a></p>
      </aside>
      <section class="content">
        <div class="svg-container"><img class="svg-content" src="/img/superiormotors-update.svg" alt="superior motors 15104"/></div>
      </section>
    </header>
    <article class="welcome skewleft">
      <section v-swiper:mySwiper="swiperOption" class="mainswipe">
        <aside class="next">
          <button class="arrow next-button" href="#">next</button>
        </aside>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners">
            <img :src="banner">
          </div>
        </div>
        <aside class="prev">
          <button class="arrow prev-button" href="#">prev</button>
        </aside>
      </section>
      <section class="content">
        <h1>Superior Motors</h1>
        <p>Thoughtfully prepared food drawing inspiration from Braddock, its people, its history and its perseverance. The cuisine will best represent the eclectic style which has become a trademark of <nuxt-link :to="'/kevinsousa/'" class="inlineorange">Chef Kevin Sousa</nuxt-link>.</p>
        <p>Superior Motors was built and backed by our <nuxt-link :to="'/supporters'" class="inlineorange">supporters</nuxt-link>.</p>
      </section>
    </article>
    <article class="hours skewright">
      <section class="content">
        <h1>Hours</h1>
        <p>Monday – Thursday / <span>5p – 10p</span></p>
        <p>Friday & Saturday / <span>5p – 11p</span></p>
        <p>Sunday / <span>5p – 9p</span></p>
      </section>
    </article>
    <article class="reservation skewleft" id="reservation">
      <section class="content">
        <h1>Reservations</h1>
        <div class="reserve-widget">
          <div class="text">
            <p>We take reservations through <a href='http://www.opentable.com/single.aspx?rid=289261&restref=289261'>Opentable</a>.</p>
            <p>Either visit <a href='http://www.opentable.com/single.aspx?rid=289261&restref=289261'>Opentable</a> directly or use the widget.</p>
            <p>Or call <a href="tel:4122711022">(412) 271-1022</a></p>
          </div>
          <div class="widget" ref="widget">
          </div>
        </div>
      </section>
      <a class="badge blue" href='http://www.opentable.com/single.aspx?rid=289261&restref=289261'>Reserve</a>
    </article>
    <article class="events skewright">
      <section class="content">
        <h1>Articles</h1>
        <article v-for="(article, index) in shortArticles">
          <h2>{{article.data['articles.title'].value}}</h2>
          <h3>{{ timeFix(article.fragments['articles.date'].value) }}</h3>
          <p>{{ shorten(article.data['articles.body'].value[0].text, 200) }} <nuxt-link :to="'/articles/' + article.uid">read more</nuxt-link></p>
        </article>
      </section>
      <nuxt-link class="badge" :to="'/articles'">view all articles</nuxt-link>
    </article>
    <article class="farm skewright">
      <section class="content">
        <h1>braddock farms</h1>
      </section>
    </article>
    <article class="sourcing skewright">
      <section class="content">
        <h1>sourcing and resources</h1>
        <p>Superior Motors will locally source the majority of produce and animals that we use. Taking full advantage of our partnership with <a class="inlineorange" href="http://www.growpittsburgh.org/">Grow Pittsburgh</a> and Braddock Farms, as well as a commercial, rooftop greenhouse with attached 4000 square foot raised bed garden. In addition we have an on site award winning apiary, community bread oven and housing – if needed for culinary, farming and educational interns and externs – as well as the growing list of guest instructors from around the country who would like to participate in this one of a kind project.</p>
      </section>
    </article>
    <article class="training skewleft">
      <section class="content">
        <h1>job training program</h1>
        <p>We will provide a job training program, unlike any in the region – free of charge. One which will introduce participants to the  urban agriculture and world class culinary/restaurant  experience and skills necessary to excel in these fields.</p>
      </section>
    </article>
    <article class="location skewright">
      <figure class="map"></figure>
      <section class="content">
        <h1>location</h1>
        <aside>
          <h2 class="main"><a class="linkbutton" href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602">1211 Braddock Ave</a></h2>
          <p>Braddock, Pennsylvania</p>
        </aside>
        <p>Parking is available at our building.</p>
        <p>Located at the former site of one of the first indoor Chevrolet dealerships in the country.</p>
      </section>
    </article>
    <article class="social skewleft">
      <section class="content">
        <h1>social</h1>
        <div>
          <a class="linkbutton" href="https://www.facebook.com/superiormotors15104">facebook</a>
          <a class="linkbutton" href="https://twitter.com/SM15104">twitter</a>
          <a class="linkbutton" href="https://instagram.com/superiormotors15104/">instagram</a>
        </div>
      </section>
    </article>
    <footer>
      <p>superior motors 2015 | <a href="https://www.kickstarter.com/projects/379429428/superior-motors-community-restaurant-and-farm-ecos"> kickstarter campaign</a></p>
    </footer>
  </main>
</template>

<script>
import Vue from 'vue'
import axios from '~plugins/axios'
import format from 'date-fns/format'

if (process.BROWSER_BUILD) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}

export default {
  async asyncData () {
    let { data } = await axios.get('/api/shortArticles')
    return {
      shortArticles: data
    }
  },

  data () {
    return {
      banners: [
        'http://supmot.imgix.net/img/swipe/swipe1_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe2_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe3_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe4_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe5_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe6_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe7_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe8_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe9_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe10_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe11_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe12_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe13_l.jpg',
        'http://supmot.imgix.net/img/swipe/swipe14_l.jpg'
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        nextButton: '.next-button',
        prevButton: '.prev-button',
        loop: true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0
          }
        }
      }
    }
  },

  mounted () {
    Vue.nextTick(() => {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//www.opentable.com/widget/reservation/loader?rid=289261&domain=com&type=standard&theme=tall&lang=en&overlay=false&iframe=true')
      this.$refs.widget.appendChild(script)
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

<style lang="scss">
@import '~assets/scss/vars';

.hours{
  p > span{
    font-weight: 900;
  }
}

article.welcome .content p:nth-of-type(2){
  padding-top: 2em;
}

.reserve-callout{
  text-transform: uppercase;
  font-size: .7em;
  position: absolute;
  left: 20%;
  @media #{$phone} {
    font-size: .9em;
    left: 10%;
  }
  &:hover{
    p{
      transform: translateY(1em);
      &:after{
        transform: scale(1.2) skewy(-3.5deg);
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        background: $orange;
      }
    }
    a{
      &:hover{
         color: $blue;
      }
    }
  }
  a{
    color: $gray;
    padding: .6em 1em;
  }
  p{
    position: relative;
    margin: 0 auto;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    transform: translateY(0em);
    &:after{
      transform: scale(1) skewy(0);
      pointer-events: none;
      transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      content: " ";
      height: 120%;
      width: 100%;
      z-index: -10;
      background: $darkblue;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
