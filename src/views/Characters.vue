<template>
  <div>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="isLoading"
      infinite-scroll-distance="20"
    >
      <ul class="row">
        <li
          class="col s6 card-item"
          is="card"
          v-for="charecter of charecters"
          :key="charecter.id"
          :content="charecter"
        >
          {{ charecter.name }}
        </li>
      </ul>
    </div>
    <Spiner />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import Card from '@/components/Card/Card'
import Spiner from '@/components/Spiner/Spiner'

var count = 0

@Component({
  components: { Card, Spiner },
})
export default class Characters extends Vue {
  chars = {}
  busy = false

  // datax = []
  // busy = false

  async loadMore() {
    // this.busy = true
    await this.$store.dispatch('getNextContentPage')
    // .then(() => (this.busy = false))
    // console.log('RRREEESS - ', res)
    // if (res) {
    // this.busy = false
    // }
  }

  get isLoading() {
    return this.$store.getters.isLoading
  }

  get charecters() {
    return this.$store.getters.content
  }

  // updated() {
  //   this.$store.dispatch('getCharacters')
  // }

  mounted() {
    this.$store.dispatch('getContent', 'character')
    // this.chars = this.$store.getters.characters
  }
}
</script>

<style lang="scss">
.card-item {
  width: 48% !important;
  margin: 10px !important;
}
</style>
