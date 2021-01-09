<template>
  <router-link tag="div" :to="link" class="card">
    <div class="card-content">
      <span class="card-title">{{ content.name }}</span>
      <div>
        <strong>{{ content.type }}</strong>
      </div>
      <div>
        <strong>{{ content.dimension }}</strong>
      </div>
    </div>
    <!-- <div class="card-action">
          <a href="#">This is a link</a>
        </div> -->
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  props: ['content'],
})
export default class LocationCard extends Vue {
  @Prop() content: any

  get link() {
    return `location/${this.content.id}`
  }
}
</script>

<style lang="scss">
.card {
  min-height: 180px;
}
</style>
