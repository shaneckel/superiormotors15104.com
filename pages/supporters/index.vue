<template>
  <main>
    <header class="feature secondary support">
      <nav class="skewright">
        <sub-nav></sub-nav>
      </nav>
    </header>
    <article class="skewleft support articles list">
      <section class="content">
        <h1>Superior Motors supporters</h1>
        <p>Superior Motor's would not have been possible if it wasn't for our supporters. We cannot thank them enough for their support in helping to start and build our restaurant. Thank you. Truly.</p>
        <input class="filter" v-model="filter" placeholder="Search" v-on:submit.prevent name="query" autocomplete="off">
        <div class="support-list">
          <nuxt-link v-for="supporter in supportersList" :to="'/supporters/' + Object.getOwnPropertyNames(supporter)[0]" :key="Object.getOwnPropertyNames(supporter)[0]">
            <p>{{supporter[Object.getOwnPropertyNames(supporter)[0]]}}</p>
          </nuxt-link>
        </div>
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
    return axios.get('/api/supporters/')
      .then((res) => {
        return { supporters: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'supporter not found' })
      })
  },

  data () {
    return {
      filter: ''
    }
  },

  computed: {
    supportersList: function () {
      return this.findBy(this.supporters, this.filter)
      // this.filterSearch()
    }
  },

  methods: {
    findBy: function (list, value) {
      return list.filter(function (item) {
        if (item[Object.getOwnPropertyNames(item)[0]].toLowerCase().includes(value.toLowerCase())) {
          return item
        }
        // return item[column].includes(value);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.filter{
  width: 100%;
  font-size: 1.5em;
  padding: .5em 0 .5em 1em;
  background: $gray;
  border: 0;
  color: $blue;
  font-family: $gotham;
  margin-top: 1.8em;
  &::placeholder{
    color: #666565;
    font-family: $gotham;
    font-style: italic;
  }
}

.support-list{
  column-count: 4;
  @media #{$phone} {
    column-count: 2;
    font-size: 1.5em;
  }
  @media #{$tab} {
    column-count: 3;
    font-size: 1em;
  }
  @media #{$desk} {
    column-count: 4;
  }

  margin-top: 3em;
  font-size: 0.8em;
  text-transform: capitalize;
  p{
    font-size: .8em;
    &:hover {
      color: $brightorange;
      text-decoration: underline;
    }
  }
}
</style>
