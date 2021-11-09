<template>
  <div class="art-single">
    <section class="py-0">
      <div class="container-fluid px-lg-0">
        <div class="row no-gutters justify-content-center">
          <div class="col-xl-4  mb-5 pt-5">
      <nuxt-content :document="artwork" />
        <h1 class="text-center"> {{ artwork.title }} </h1>
        <div class="text-center text-small mb-4"> {{ formatDate(artwork.createdAt)}}</div>
      <div class="row">
        <div class="col">
          <div class="container mb-5">
            <img :src="artwork.img" :alt="artwork.alt">
          </div>
          <div class="container mb-5">
            <strong>{{artwork.description}}</strong>
          </div>
        </div>
      </div>
      <ArtPrevNext :prev="prev" :next="next" ></ArtPrevNext>
          </div>
        </div>
      <Social :social="artwork.social"></Social>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    async asyncData({
      $content,
      params
    }) {
      const artwork = await $content("artworks", params.slug).fetch()
      
      const [prev, next] = await $content('artworks').only(['title', 'slug']).sortBy(['createdAt', 'asc']).surround(params.slug).fetch()

      return {
        artwork,
        prev,
        next
      }
    },
    methods: {
      formatDate(date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString('en', options)
      }
    },

  }

</script>

<style>

</style>
