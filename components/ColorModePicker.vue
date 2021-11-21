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
        if (this.$colorMode.preference === 'dark') {
          console.log('Dark mode detected')
          $('#footer').removeClass('bg-black')
          $('#footer').addClass('bg-dark')
        }
        if (this.$colorMode.preference === 'light') {
          console.log('Dark mode detected')
          $('#footer').removeClass('bg-dark')
          $('#footer').addClass('bg-white')
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
