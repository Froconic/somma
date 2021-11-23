<template>
<div class="article-list">
  <div class="row mb-4">
    <div v-for="article of articles" :key="article.slug" class="col-md-6 col-lg-4">
      <NuxtLink class="card card-body justify-content-between" :to="{name: 'blog-slug', params: { slug: article.slug }}">
        <div class="text-small d-flex">
          <div class="mr-2">
            <NuxtLink to='/'>{{ article.category }}</NuxtLink>
            <span class="text-muted">{{ formatDate(article.createdAt) }}</span>
            <span class="badge badge-primary-alt text-primary"><img :src= "article.icon" alt=""></span>
          </div>
        </div>
        <nuxt-img class="mb-2" :src="article.cover" alt="" />
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
  </div>
<div class="row mb-4 justify-content-center">
  <!-- <infinite-loading spinner="spiral" @infinite="infiniteScroll"></infinite-loading> -->
      <Pagination v-if="total > 6" :total="total" />
</div>
</div>
</template>

<script>
  import Pagination from '@/components/Pagination'
  // import axios from 'axios'
  export default {
    data() {
    return {
      page: 1,
      titles: [],
    };
  },
    name: 'ArticleList',
    components: {
      Pagination,
    },

    created() {
      this.fetchData
    },
    props: {
      articles: {
        type: Array,
        default: Array,
      },
      total: {
        type: Number,
        default: 0,
      },
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

      async fetchData(){
        const response = await axios.get(this.url)
        this.titles = response.data
      },

//     infiniteScroll($state) {
// setTimeout(() => {
// this.page++
// axios.get(this.url)
// .then((response) => {
//   if (response.data.length > 1) {
//     this.page++
//     // this.list.push(...response.data.hits)
//    response.data.forEach((item) => this.titles.push(item))
//    $state.loaded()
//   } else {
//    $state.complete()
//   }
//  }).catch((err) => {console.log(err)})
// }, 500)
//     }
    }
  }

</script>
