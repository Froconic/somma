<template>
  <div>
    <section class="has-divider text-light bg-primary" data-speed="0.5" data-overlay>
      <!-- <img src="../assets/img/misc/BOG line.svg" alt="" class="jarallax-img opacity-50"> -->
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-xl-5 col-lg-6 col-md-8">
            <h1 class="display-4 text-light">Blog</h1>
            <p class="lead mb-0">Thoughts on <br>Magic | Mystery | Mysticism</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black">
      <div class="container">
        <Search></Search>
        <Category></Category>
      </div>
    <div class="row">
    <div v-for="article of articles" :key="article.category" class="col-md-6 col-lg-4">
      <NuxtLink class="card card-body justify-content-between" :to="{name: 'blog-slug', params: { slug: article.slug }}">
        <div class="text-small d-flex">
          <div class="mr-2">
            <NuxtLink to='/'>{{ article.category }}</NuxtLink>
            <span class="text-muted">{{ formatDate(article.createdAt) }}</span>
            <!-- <span class="badge badge-primary-alt text-primary"><img src="./assets/img/icons/interface/heart.svg" alt=""></span> -->
          </div>
        </div>
        <img :src="article.cover" alt="">
        <div>
          <h4>{{ article.title }}</h4>
          <p class="flex-grow"> {{ article.description }}</p>
          <div class="d-flex align-items-center mt-3">
            <span class="text-small text-muted">by </span> <span class="text-small ml-1"> {{ article.author }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
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
      const articles = await $content('articles', params.slug)
        .where('article.category')
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  }

</script>

<style>

</style>
