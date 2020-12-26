<template>
  <div>
    <ul>
      <li v-for="charecter of dd" :key="charecter.id">
        {{ charecter.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component()
export default class Characters extends Vue {
  chars = {}

  get dd() {
    return this.$store.getters.characters
  }

  // updated() {
  //   this.$store.dispatch('getCharacters')
  // }

  mounted() {
    this.$store.dispatch('getCharacters')
    // this.chars = this.$store.getters.characters
  }
}
</script>

<style></style>
