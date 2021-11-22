<template>
<!-- Target each class that needs to change with change method -->
  <div class="my-5">
    <h1>Preference = {{$colorMode.preference}}</h1>
    <select v-model="$colorMode.preference" @click='change'>
      <option v-for="color of colors" :key="color" :value="color">{{color}}</option>
    </select>
    <p>
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
      </ColorScheme>
    </p>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        colors: ['system', 'light', 'dark', 'blue']
      }
    },
    methods: {
      getClasses(color) {
        // Does not set classes on ssr preference is system (because we know them on client-side)
        if (this.$colorMode.unknown) {
          return {}
        }
        return {
          preferred: color === this.$colorMode.preference,
          selected: color === this.$colorMode.value
        }
      },
      change(event) {
        if (this.$colorMode.preference === 'light') {
          console.log('Dark mode detected')
          $('.btn').removeClass('btn-primary')
          $('.btn').removeClass('btn-primary-2')
          $('.btn').removeClass('btn-primary')
          $('.btn').removeClass('btn-light')
          $('.btn').addClass('btn-dark')
          $('button').removeClass('btn-primary')
          $('button').removeClass('btn-primary-2')
          $('button').removeClass('btn-primary')
          $('button').removeClass('btn-light')
          $('button').addClass('btn-dark')


          $('#contact').removeClass('btn-primary')
          $('#contact').removeClass('btn-primary-2')
          $('#contact').removeClass('btn-primary-3')
          $('#contact').removeClass('btn-light')
          $('#contact').removeClass('btn-dark')
          $('#contact').removeClass('btn-outline-primary')
          $('#contact').removeClass('btn-outline-primary-2')
          $('#contact').removeClass('btn-outline-primary-3')
          $('#contact').removeClass('btn-outline-light')
          $('#contact').addClass('btn-outline-dark')

          $('.badge').removeClass('.badge-primary')
          $('.badge').removeClass('.badge-primary-2')
          $('.badge').removeClass('.badge-primary-3')
          $('.badge').removeClass('.badge-light')
          $('.badge').addClass('.badge-dark')

        }
                if (this.$colorMode.preference === 'dark') {
          console.log('Dark mode detected')
          $('.btn').removeClass('btn-primary')
          $('.btn').removeClass('btn-primary-2')
          $('.btn').removeClass('btn-primary')
          $('.btn').removeClass('btn-dark')
          $('.btn').addClass('btn-light')
          $('button').removeClass('btn-primary')
          $('button').removeClass('btn-primary-2')
          $('button').removeClass('btn-primary')
          $('button').removeClass('btn-dark')
          $('button').addClass('btn-light')


          $('#contact').removeClass('btn-primary')
          $('#contact').removeClass('btn-primary-2')
          $('#contact').removeClass('btn-primary-3')
          $('#contact').removeClass('btn-dark')
          $('#contact').removeClass('btn-light')
          $('#contact').removeClass('btn-outline-primary')
          $('#contact').removeClass('btn-outline-primary-2')
          $('#contact').removeClass('btn-outline-primary-3')
          $('#contact').addClass('btn-outline-light')

          $('.badge').removeClass('.badge-primary')
          $('.badge').removeClass('.badge-primary-2')
          $('.badge').removeClass('.badge-primary-3')
          $('.badge').removeClass('.badge-light')
          $('.badge').addClass('.badge-dark')

        }


      }
    }
  }

</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    display: inline-block;
    padding: 5px;
  }

  p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
  }

  .feather {
    position: relative;
    top: 0px;
    cursor: pointer;
    padding: 7px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 0;
    border-radius: 5px;
    transition: all 0.1s ease;
  }

  .feather:hover {
    top: -3px;
  }

  .feather.preferred {
    border-color: var(--color-primary);
    top: -3px;
  }

  .feather.selected {
    color: var(--color-primary);
  }

</style>
