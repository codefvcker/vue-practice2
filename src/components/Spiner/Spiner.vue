<template>
  <div v-if="isLoading" class="spiner-wrap">
    <div class="spiner preloader-wrapper small active">
      <div class="spinner-layer spinner-green-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component()
export default class Spiner extends Vue {
  get isLoading() {
    return this.$store.getters.isLoading
  }
}
</script>

<style lang="scss">
.spiner-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
