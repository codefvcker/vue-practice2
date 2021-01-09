<template>
  <router-link tag="div" :to="link" class="card">
    <slot />
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ChunkCard extends Vue {
  @Prop() readonly link!: string
}
</script>

<style lang="scss"></style>
