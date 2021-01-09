<template>
  <router-link tag="div" :to="link" class="card">
    <div class="card-content">
      <span class="card-title">{{ content.name }}</span>
      <div>
        <strong>{{ content.episode }}</strong>
      </div>
      <div>
        <strong>{{ content.air_date }}</strong>
      </div>
    </div>
  </router-link>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: ['content'],
})
export default class EpisodeCard extends Vue {
  get link() {
    return `episode/${this.content.id}`
  }
}
</script>

<style lang="scss"></style>
