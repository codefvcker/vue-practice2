<template>
  <div class="sidebar">
    <ul id="slide-out" class="sidenav" ref="sidebar">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="images/office.jpg" />
          </div>
          <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"
            ><span class="white-text email">jdandturk@gmail.com</span></a
          >
        </div>
      </li>
      <router-link
        tag="li"
        v-for="item of items"
        :key="item.title"
        :exact="item.exact"
        active-class="active"
        :to="item.url"
      >
        <a href="#!" class="waves-effect"
          ><i class="material-icons">cloud</i>{{ item.title }}</a
        >
      </router-link>
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger"
      ><i class="material-icons ac">{{ icon }}</i></a
    >

    <nav class="sidebar--nav  teal darken-1">
      <div class="nav-wrapper">
        <form>
          <div class="input-field">
            <input id="search" type="search" required />
            <label class="label-icon" for="search"
              ><i class="material-icons">search</i></label
            >
            <i class="material-icons">close</i>
          </div>
        </form>
        <ul class="right hide-on-med-and-down">
          <!-- Dropdown Trigger -->
          <li>
            <a class="dropdown-trigger" ref="dropdown" data-target="dropdown1"
              >Dropdown<i class="material-icons right">arrow_drop_down</i></a
            >
          </li>
        </ul>
      </div>
    </nav>
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">Account</a></li>
      <li class="divider"></li>
      <li><a href="#!">Log out</a></li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { SidebarLink } from './sidebar.interface'

@Component
export default class Sidebar extends Vue {
  name = 'sidebar'
  sidebar = false
  items = [
    { title: 'Dashboard', url: '/', exact: true },
    { title: 'Characters', url: '/characters' },
    { title: 'Locations', url: '/locations' },
  ]
  dropdown = false

  mounted() {
    this.sidebar = M.Sidenav.init(this.$refs.sidebar, {
      onOpenStart: () => this.$emit('openSidebarHandler', true),
      onCloseStart: () => this.$emit('openSidebarHandler', false),
    })

    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    })
  }

  get icon() {
    return this.sidebar.isOpen ? 'close' : 'menu'
  }
}
</script>

<style lang="scss">
.ac {
  font-size: 50px;
  color: #00695c;
}
.sidebar {
  display: flex;
  background: #ccc;
  &--nav {
    border-radius: 30px;
  }
}
.sidenav-trigger {
  padding: 7px;
}
</style>
