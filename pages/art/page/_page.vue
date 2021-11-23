<template>
  <div>
    <section class="bg-primary-2 text-dark">
      <div class="container pb-6">
        <div class="row justify-content-center text-center">
          <div class="col-xl-8 col-lg-9 col-md-10">
            <h2 class="display-3 mb-5">Art </h2>
            <p class="lead">Action <br> Reaction <br> Translation</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black text-white pt-5">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col col-md-auto">
            <ArtSearch></ArtSearch>
          </div>
        </div>
            <ArtworkList :artworks="paginatedArtworks" :total="allArtworks.length" />
      </div>
    </section>
  </div>
</template>

<script>
  import getArtwork from '~/utils/getArtwork';
  import ArtworkList from '@/components/ArtworkList'
  export default {
    scrollToTop: false,

    name: 'ArtworkListPage',
    components: { ArtworkList,
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

    head() {
      return {
        title: `Artworks Page ${this.$route.params.page}`,
        link: [{
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/art/${this.$route.params.page}`,
        }, ],
      };
    },
  };

</script>
