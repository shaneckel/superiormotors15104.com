<template>
  <div class="content">
    <nuxt-link class="button" :to="'/'">
      <figure>
        <img src="/img/superiormotors.min.png" alt="superior motors logomark"/>
      </figure>
    </nuxt-link>
    <nuxt-link class="button" :to="'/kevinsousa/'">chef</nuxt-link>
    <nuxt-link class="button" :to="'/articles/'">articles</nuxt-link>
    <nuxt-link class="button" :to="'/supporters/'">supporters</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'sub-nav'
}
</script>
