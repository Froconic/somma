<template>
<div class="art">
    <section class="bg-primary-2 text-dark">
      <div class="container pb-6">
        <div class="row justify-content-center text-center">
          <div class="col-xl-8 col-lg-9 col-md-10">
            <h2 class="mb-5 text-dark">Art </h2>
            <p class="lead">Action <br> Reaction <br> Translation</p>
          </div>
        </div>
      </div>
    </section>
  <section class=" text-white pt-5">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col col-md-auto">
            <Search></Search>

          </div>
        </div>
        <div class="row">
            <ArtworkList :artwork="paginatedArtworks" :total="allArtworks" />
        </div>
      </div>
    </section>
</div>
</template>

<script>
  export default {
        middleware({
      redirect
    }) {
      return redirect("301", "/art/page/1");
    },

    async asyncData({
      $content,
      app,
      params,
      error
    }) {
      const content = await getArtwork($content, params, error);
      return {
        allArtworks: content.allArtworks,
        paginatedArtworks: content.paginatedArtworks,
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
      }
    },
}

</script>

<style>

</style>