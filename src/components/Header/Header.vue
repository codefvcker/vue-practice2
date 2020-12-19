<template>
  <div class="header">
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper container">
        <a href="#!" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down">
          <router-link is="li"><a>My page</a></router-link>
          <router-link is="li"><a>Friends</a></router-link>
          <router-link is="li"><a>Feed</a></router-link>
          <li>
            <a class="dropdown-trigger" href="#!" data-target="dropdown1"
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
    mounted: {
        $(".dropdown-trigger").dropdown();
    }
};
</script>

<style></style>
