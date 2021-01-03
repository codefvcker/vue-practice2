<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component()
export default class ChunkCard extends Vue {}
</script>

<style lang="scss"></style>
