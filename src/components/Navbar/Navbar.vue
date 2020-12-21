<template>
  <div class="header">
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">About</a></li>
      <li class="divider"></li>
      <li><a href="#!">Log out</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper container">
        <a href="#!" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
          <router-link is="li"><a>My page</a></router-link>
          <router-link is="li"><a>Friends</a></router-link>
          <router-link is="li"><a>Feed</a></router-link>
          <li>
            <a
              class="dropdown-trigger"
              href="#!"
              ref="dropdown"
              data-target="dropdown1"
              >Dropdown<i class="material-icons right">arrow_drop_down</i></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    dropdown: null,
  }),
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    })
  },
}
</script>

<style></style>
