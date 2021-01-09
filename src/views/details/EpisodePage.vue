<template>
  <div>
    <h1>{{ episode.name }} - {{ episode.episode }}</h1>
    <div>Air date: {{ episode.air_date }}</div>
    <div>
      <button class="btn" @click="getCharacters">
        Show characters
      </button>
    </div>
    <div>
      <ul>
        <chunk-card
          tag="li"
          v-for="char of characters"
          :key="char.id"
          :link="`/charecter/${char.id}`"
        >
          {{ char.name }}
        </chunk-card>
      </ul>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import ChunkCard from '@/components/Card/ChunkCard'

@Component({
  components: { ChunkCard },
})
export default class EpisodePage extends Vue {
  episode = false
  characters = false

  async mounted() {
    this.episode = await this.$store.dispatch('getItemsById', {
      type: 'episode',
      id: this.episodeId,
    })
  }

  async getCharacters() {
    this.characters = await this.$store.dispatch('getItemsById', {
      type: 'character',
      id: this.charactersIds,
    })
  }

  get charactersIds() {
    return this.episode.characters.map(character => {
      const splitedCharacter = character.split('/')
      return splitedCharacter[splitedCharacter.length - 1]
    })
  }

  get episodeId() {
    return this.$route.params.id
  }
}
</script>

<style lang="scss"></style>
