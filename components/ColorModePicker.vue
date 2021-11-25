<template>
  <div>
    <ColorScheme placeholder="..." tag="span">
    Color mode: <b>{{ $colorMode.preference }}</b>
    <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
  </ColorScheme>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference" @click="change">
      <option v-for="color of colors" :key="color" value="color.value">{{color.value}}</option>
    </select>
  </div>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      colors: ['system','light','dark','blue']
    }
  },
  methods: {
    //change color mode on click
    change(event) {
      this.$store.commit('changeColorMode', event.target.value)
    }

  }
}

</script>