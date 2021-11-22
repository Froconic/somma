<template>
  <div class="blog">
    <section class="text-light bg-primary" data-speed="0.5" data-overlay>
      <!-- <img src="../assets/img/misc/BOG line.svg" alt="" class="jarallax-img opacity-50"> -->
      <div class="container pb-6">
        <div class="row justify-content-center text-center">
          <div class="col-xl-5 col-lg-6 col-md-8">
            <h1 class="display-3 text-light mb-5">Blog</h1>
            <p class="lead ">Thoughts on <br>Magick | Mystery | Mysticism</p>
          </div>
        </div>
      </div>
      <!-- <div class="divider">
      <img src="../assets/img/dividers/divider-2.svg" alt="graphical divider" data-inject-svg />
    </div> -->
    </section>
    <section class=" blog-posts">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col col-md-auto">
            <Search></Search>
          </div>
        </div>
        <ArticleList :article="paginatedArticles" :total="allArticles.length"></ArticleList>
        <!-- <div class="row mb-4">
    <div v-for="article of articles" :key="article.slug" class="col-md-6 col-lg-4">
      <NuxtLink class="card card-body justify-content-between" :to="{name: 'blog-slug', params: { slug: article.slug }}">
        <div class="text-small d-flex">
          <div class="mr-2">
            <NuxtLink to='/'>{{ article.category }}</NuxtLink>
            <span class="text-muted">{{ formatDate(article.createdAt) }}</span>
            <span class="badge badge-primary-alt text-primary"><img src="../assets/img/icons/interface/heart.svg" alt=""></span>
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
    <div v-if="total" class="container mx-auto my-5 max-w-5xl">
    </div>
    </div> -->
        <div class="row mb-4 justify-content-center">
          <!-- <infinite-loading spinner="spiral" @infinite="infiniteScroll"></infinite-loading> -->
          <Pagination v-if="total > 5" :total="total" />
        </div>

        <!-- <Category :category="category"></Category> -->
      </div>
    </section>
  </div>
</template>

<script>
  import getArticle from '~/utils/getArticle';

  export default {
    middleware({
      redirect
    }) {
      return redirect("301", "/blog/page/1");
    },

    data() {
      return {
        page: 1,
        list: [],
      };
    },
    components: {

    },

    created() {
      this.fetchData
    },

    // async asyncData({
    //   $content,
    //   params
    // }) {
    //   const articles = await $content('articles').only(['title', 'description', 'category', 'img', 'cover', 'slug', 'author', 'createdAt']).sortBy('createdAt', 'asc').fetch()

    //   return {
    //     articles
    //   }
    // },
    async asyncData({
      $content,
      app,
      params,
      error
    }) {
      const content = await getArticle($content, params, error);
      return {
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles,
      };
    },

    async fetchData() {
      const response = await axios.get(this.url)
      this.list = response.data
    },

    methods: {
      formatDate(date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString('en', options)
      },
      infiniteScroll($state) {
        setTimeout(() => {
          this.page++
          axios.get(this.url)
            .then((response) => {
              if (response.data.length > 1) {
                this.list.push(...response.data.hits)
                response.data.forEach((item) => this.list.push(item))
                $state.loaded()
              } else {
                $state.complete()
              }
            }).catch((err) => {
              console.log(err)
            })
        }, 500)
      }
    },

  }

</script>

<style>

</style>
