<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="isLoading"
    infinite-scroll-distance="20"
  >
    <ul class="row">
      <location-card
        class="col s4 location-card"
        v-for="location of locations"
        :key="location.id"
        :content="location"
        tag="li"
      ></location-card>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Card from '@/components/Card/Card'
import LocationCard from '@/components/Card/LocationCard'

@Component({
  components: { Card, LocationCard },
})
export default class Locations extends Vue {
  mounted() {
    this.$store.dispatch('getContent', { type: 'location' })
  }

  async loadMore() {
    // this.busy = true
    await this.$store.dispatch('getNextContentPage')
    // .then(() => (this.busy = false))
    // console.log('RRREEESS - ', res)
    // if (res) {
    // this.busy = false
    // }
  }

  get locations() {
    // console.log('LOCS - ', this.$store.getters.content)
    return this.$store.getters.content
  }
}
</script>

<style lang="scss"></style>
