<template>
  <main>
    <header class="feature secondary menu">
      <nav class="skewright">
        <sub-nav></sub-nav>
      </nav>
    </header>
    <article class="menu skewleft list">
      <section class="content">
        <h1>Menu <span>({{ timeFix(menu.data['menu.menu_date'].value)}})</span></h1>
        <article class="group" v-if="item.type === 'Group'" v-for="item in menu.rawJSON.menu">
          <div v-for="list in item.value">
            <h3><span>{{list.item_title.value[0].text}}</span> / {{list.cost.value}}</h3>
            <p><span v-if="list.vegan">({{list.vegan.value}}) </span>{{list.description.value[0].text}}</p>
          </div>
        </article>
        <h4>All Prices & Items Subject To Change</h4>
      </section>
    </article>
    <sub-foot theme="blue"></sub-foot>
  </main>
</template>

<script>
import axios from '~/plugins/axios'
import format from 'date-fns/format'
import SubNav from '../components/SubNav.vue'
import SubFoot from '../components/SubFooter.vue'

export default {
  name: 'menu',

  components: {
    SubNav,
    SubFoot
  },

  asyncData ({ params, error }) {
    return axios.get('/api/menu/')
      .then((res) => {
        return { menu: res.data[0] }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'menu not found' })
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

<style lang="scss" scoped>
@import '~assets/scss/vars';

h1{
  padding-bottom: 0;
  span{
    font-family: $gotham;
    font-size: .5em;
    letter-spacing: normal;
    font-weight: 400
  }
}
h4{
  font-size: .7em;
  margin-top: 4em;
}
article.menu{
  @media #{$phone} {
    font-size: 1.6em;
  }
  border-bottom: 1em solid #794b45;
}
.group{
  position: relative;
  padding-top: 2.2em;
  margin-top: 2.2em;
  h3{
    font-size: .9em;
    span{
      text-transform: uppercase;
    }
  }
  p{
    font-size: .8em;
    margin-bottom: 1em;
    span{
      font-weight: 900;
    }
  }
  &:before{
    width: 3em;
    height: 5px;
    background: white;
    content: ' ';
    top: 0;
    left: 0;
    position:absolute;
  }
}
header.menu{
  @media #{$tab} {
    background-image: url('/img/header_menu_l.jpg?1234');
  }
  @media #{$phone} {
    background-image: url('/img/header_menu_s.jpg?1234');
  }
}

</style>
