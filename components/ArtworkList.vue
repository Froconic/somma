<template>
  <div class="artwork-list">
    <div class="row mb-4">
      <div v-for="artwork of artworks" :key="artwork.slug" class="col-sm-6 col-lg-4 mb-4">
        <NuxtLink :to="{name:'art-slug',params: { slug: artwork.slug }} ">
          <img :src="artwork.img" :alt="artwork.alt" class="rounded mb-3">
          <h4 class="mb-1 text-white text-center"> {{artwork.title}} </h4>
        </NuxtLink>
      </div>
    </div>
    <div class="row mb-4 justify-content-center">
      <ArtPagination v-if="total > 6" :total="total" />
    </div>
  </div>
</template>

<script>
  import ArtPagination from '@/components/ArtPagination'

  // import axios from 'axios'
  export default {
    data() {
      return {
        page: 1,
        titles: [],
      };
    },
    name: 'ArtworkList',
    components: { ArtPagination },


    created() {
      this.fetchData
    },
    props: {
      artworks: {
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

      async fetchData() {
        const response = await axios.get(this.url)
        this.titles = response.data
      },
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

</script>
