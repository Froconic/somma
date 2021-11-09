<template>
  <div>
    <div class="row justify-content-end mb-3">
    <input class="searchbar w-100 mt-1 h-100" v-model="searchQuery" type="search" autocomplete="off"
    placeholder="Search"/>
    <ul v-if="articles.length">
      <li class="list-unstyled" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{name :'blog-slug', params: {slug: article.slug}}">
          {{article.title}}
        </NuxtLink>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles= []
        return
      }
      this.articles = await this.$content('articles').limit(6).search(searchQuery).fetch()
    }
  }
}
</script>

<style>
.searchbar {

}
</style>