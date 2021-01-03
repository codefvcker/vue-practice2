<template>
  <div>
    <div>
      <div class="card">
        <div class="card-content">
          <span class="card-title">{{ content.name }}</span>
          <div>
            <strong>{{ content.episode }}</strong>
          </div>
          <div>
            <strong>{{ content.air_date }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: ['content'],
})
export default class EpisodeCard extends Vue {}
</script>

<style lang="scss"></style>
