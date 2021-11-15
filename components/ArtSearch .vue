<template>
  <div>
    <div class="row justify-content-end mb-3">
    <input class="searchbar w-100 mt-1 h-100" v-model="searchQuery" type="search" autocomplete="off"
    placeholder="Search"/>
    <ul v-if="artworks.length">
      <li class="list-unstyled" v-for="artwork of artworks" :key="artwork.slug">
        <NuxtLink :to="{name :'art-slug', params: {slug: artwork.slug}}">
          {{artwork.title}}
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
      artworks: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.artworks= []
        return
      }
      this.artworks = await this.$content('artworks').limit(6).search(searchQuery).fetch()
    }
  }
}
</script>

<style>
.searchbar {

}
</style>