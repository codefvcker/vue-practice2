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
    { title: 'Calendar', url: '/calendar' },
    { title: 'Targets', url: '/targets' },
  ]

  mounted() {
    this.sidebar = M.Sidenav.init(this.$refs.sidebar, {
      onOpenStart: () => this.$emit('openSidebarHandler', true),
      onCloseStart: () => this.$emit('openSidebarHandler', false),
    })
  }

  get icon() {
    return this.sidebar.isOpen ? 'close' : 'menu'
  }

  // openSidebarHandler() {
  //   this.$emit('openSidebarHandler')
  // }
}
</script>

<style>
.ac {
  /* width: 100px;
  height: 100px; */
  font-size: 50px;
}
/* .open {
  color: #fff;
} */
</style>
