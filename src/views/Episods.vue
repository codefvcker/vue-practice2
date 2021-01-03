<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="isLoading"
    infinite-scroll-distance="20"
  >
    <ul>
      <episode-card
        v-for="episode of episodes"
        :key="episode.id"
        :content="episode"
        tag="li"
      />
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import EpisodeCard from '@/components/Card/EpisodeCard'

@Component({
  components: { EpisodeCard },
})
export default class Episods extends Vue {
  loadMore() {
    this.$store.dispatch('getNextContentPage')
  }

  mounted() {
    this.$store.dispatch('getContent', { type: 'episode' })
  }

  get episodes() {
    return this.$store.getters.content
  }
}
</script>

<style lang="scss"></style>
