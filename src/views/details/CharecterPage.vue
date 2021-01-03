<template>
  <Spiner v-if="!character" />
  <div v-else>
    <div>
      <img :src="character.image" alt="" />
    </div>
    <div class="character-name">Name: {{ character.name }}</div>
    <div class="character-info">
      {{ character.status }}-{{ character.species }}
    </div>
    <div>
      <button @click="getEpisodes" class="btn">Show episodes</button>
      <ul v-if="episodes">
        <chunk-card tag="li" v-for="episode in episodes" :key="episode.id">
          {{ episode.name }}
        </chunk-card>
      </ul>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Spiner from '@/components/Spiner/Spiner'
import ChunkCard from '@/components/Card/ChunkCard'

@Component({
  components: {
    Spiner,
    ChunkCard,
  },
})
export default class CharecterPage extends Vue {
  character = false
  episodes = false

  async mounted() {
    this.character = await this.$store.dispatch('getItemsById', {
      type: 'character',
      id: this.id,
    })

    console.log('char', this.character)
  }

  async getEpisodes() {
    let itemsIds = this.character.episode.map(i => {
      const splitedItem = i.split('/')
      return splitedItem[splitedItem.length - 1]
    })

    const res = await this.$store.dispatch('getItemsById', {
      type: 'episode',
      id: itemsIds,
    })

    this.episodes = res
  }

  get id() {
    return this.$route.params.id
  }
}
</script>

<style lang="scss"></style>
