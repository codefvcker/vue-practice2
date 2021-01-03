<template>
  <router-link :to="link" class="card">
    <div class="card-img--wrap">
      <img :src="content.image" alt="card-img" />
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ content.name }}</h3>
      <div v-if="content.status" class="card-status">
        <span class="card-status--color" :style="{ color: status }"
          >&#x29BF;</span
        >
        <strong class="card-status--descr">
          {{ content.status }}-{{ content.gender }}
        </strong>
      </div>
      <div v-if="content.location" class="card-location">
        <strong>Location:</strong>
        <span class="card-location--descr">
          {{ content.location.name }}
        </span>
      </div>
      <div if="episode" class="card-seen">
        <strong>First seen in:</strong>
        <span class="card-seen--descr"> {{ episode }} episode </span>
      </div>
    </div>
  </router-link>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

let colorMap = new Map([
  ['unknown', '#424242'],
  ['alive', '#00c853'],
  ['dead', '#b71c1c'],
])

@Component({
  props: ['content'],
})
export default class Card extends Vue {
  get episode() {
    if (this.content.episode) {
      let firstEpisode = this.content.episode[0].split('/')
      return firstEpisode[firstEpisode.length - 1]
    }
    return false
  }

  mounted() {
    console.log(this.content)
  }

  get link() {
    return `charecter/${this.content.id}`
  }

  get status() {
    let lowedStatus = this.content.status.toLowerCase()
    return colorMap.get(lowedStatus)
  }
}
</script>

<style lang="scss">
.card {
  display: flex;

  &-img--wrap {
    width: 50%;
    height: 100%;
    & img {
      height: 100%;
    }
  }
  &-status {
    display: flex;
    align-items: center;
    &--color {
      margin-right: 5px;
      //   font-size: 30px;
    }
  }
  &-title {
    font-weight: bold !important;
  }
}
</style>
