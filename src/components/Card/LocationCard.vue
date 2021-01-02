<template>
  <div>
    <div class="">
      <div class="card">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: ['content'],
})
export default class LocationCard extends Vue {}
</script>

<style lang="scss">
.card {
  min-height: 180px;
}
</style>
