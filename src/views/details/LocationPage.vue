<template>
  <div>
    <h1>
      {{ location.name }}
    </h1>
    <div>{{ location.type }} - {{ location.dimension }}</div>
    <div>
      <button class="btn" @click="getResidents">
        Show residents
      </button>
    </div>
    <div>
      <ul>
        <chunk-card
          v-for="resident of residents"
          :key="resident.id"
          :link="`/charecter/${resident.id}`"
          tag="li"
        >
          {{ resident.name }}
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
export default class LocationPage extends Vue {
  location = false
  residents = []
  async mounted() {
    this.location = await this.$store.dispatch('getItemsById', {
      type: 'location',
      id: this.locationId,
    })
  }

  async getResidents() {
    const result = await this.$store.dispatch('getItemsById', {
      type: 'character',
      id: this.residentsIds,
    })

    if (result && !Array.isArray(result)) {
      this.residents.push(result)
    } else {
      this.residents = result
    }
  }

  get residentsIds() {
    return this.location.residents.map(character => {
      const splitedCharacter = character.split('/')
      console.log('CHARAC - ', splitedCharacter[splitedCharacter.length - 1])
      return splitedCharacter[splitedCharacter.length - 1]
    })
  }

  get locationId() {
    return this.$route.params.id
  }
}
</script>

<style lang="scss"></style>
