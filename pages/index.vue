<template>
  <main>
    <header class="feature">
      <aside class="top-menu">
        <p><a href="#reservation">reservation</a></p>
        <p><a href="#reservation">call</a></p>
        <p><nuxt-link :to="'/menu/'">menu</nuxt-link></p>
      </aside>
      <section class="content">
        <div class="svg-container"><img class="svg-content" src="img/superiormotors-update.svg?1234" alt="superior motors 15104"/></div>
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
        <p>Now available are <a class="inlineorange" href="https://www.toasttab.com/superior-motors/giftcards">Superior Motors gift cards</a>.</p>
        <p>Take a <a class="inlineorange" href="https://my.matterport.com/show/?m=wkt14cLxhfg&utm_source=3">tour</a> of Superior Motors.</p>
      </section>
    </article>
    <article class="hours skewright">
      <section class="content">
        <h1>Hours</h1>
        <p>Monday – Tuesday / <span>Closed</span></p>
        <p>Wednesday – Thursday / <span>5p – 10p</span></p>
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
          <p>{{ shorten(article.data['articles.body'].value[0].text, 200) }}</p>
          <p><nuxt-link :to="'/articles/' + article.uid">read more</nuxt-link></p>
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
        <h1>The Hearth Menu</h1>
        <div class="hearth">
          <div class="left-hearth">
            <img src="/img/hearth_menu.png">
          </div>
          <div class="right-hearth">
            <p>small hand held versions of the superior motors menu</p>
            <p><span>Wednesday & Thursday</span> happy hour drinks 5pm - 7pm. Half off roses, after dinner menu: 8pm - 10pm.</p>
            <p><span>Saturday</span> open at 4pm.</p>
            <p><span>Sunday</span> after dinner menu 8pm - (?). Drink specials after 8pm.</p>
            <h2>The current Hearth Menu <span>({{ timeFix(hearthMenu.data['hearth_menu.hearth_menu_date'].value)}})</span></h2>
            <article class="group" v-if="item.type === 'Group'" v-for="item in hearthMenu.rawJSON.hearth_menu">
              <div v-for="list in item.value">
                <p>- {{list.item.value[0].text}}</p>
              </div>
            </article>
          </div>
        </div>
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
import axios from '~/plugins/axios'
import format from 'date-fns/format'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/shortArticles')
    let hearth = await axios.get('/api/hearthmenu')
    return {
      shortArticles: data,
      hearthMenu: hearth.data[0]
    }
  },

  data () {
    return {
      banners: [
        'https://supmot.imgix.net/swipe/swp1_l.jpg?51231',
        'https://supmot.imgix.net/swipe/swp2_l.jpg?51231',
        'https://supmot.imgix.net/swipe/swp3_l.jpg?51231',
        'https://supmot.imgix.net/swipe/swp4_l.jpg?51231',
        'https://supmot.imgix.net/swipe/swp5_l.jpg?51231',
        'https://supmot.imgix.net/swipe/swp6_l.jpg?51231',
        'https://supmot.imgix.net/swipe/swp7_l.jpg?51231'
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

article.welcome .content p:nth-of-type(2),
article.welcome .content p:nth-of-type(3) {
  padding-top: 2em;
}


.hearth{
  display: flex;
  flex-direction: row-reverse;
  @media #{$phone} {
    display: block;
  }
  .left-hearth{
    width: 100%;
    @media #{$phone} {
      width: 100%;
    }
    img{
      max-width: 100%;
      @media #{$phone} {
        width: 60%;
        margin: auto;
      }
    }
  }
  .right-hearth{
    width: 100%;
    p{
      font-size: .9em;
      letter-spacing: 0;
      padding-bottom: .9em;
      span{
        font-weight: 900;
        color: white;
      }
      &:nth-child(1){
        font-size: 1.2em;
        text-transform: capitalize;
      }
    }
    h2{
      font-size: .9em;
      text-transform: capitalize;
      padding: 2em 0 1em 0;
      span{
        font-size: .8em;
        color: #a6a8a5;
      }
    }
    @media #{$phone} {
      width: 100%;
    }
  }
}

.top-menu{
  position: absolute;
  font-size: 1em;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  left: 0;
  right: 0;
  align-content: center;
  @media #{$phone} {
    font-size: 1.4em;
  }
  a{
    color: $xlightblue;
    background: $blue;
    padding: .6em;
    font-size: .6em;
    margin-left: 1em;
  }
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
