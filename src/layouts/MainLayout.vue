<template>
  <div>
    <!-- <Loader v-if="loading" /> -->
    <div class="app - main - layout">
      <!-- <Navbar /> -->

      <main class="app-content" :class="{ full: !isOpen }">
        <Sidebar
          @openSidebarHandler="openSidebarHandler"
          class="sidebar-position"
        />
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: false,
    loading: true,
    sidebar: null,
  }),
  async mounted() {},
  computed: {},
  methods: {
    openSidebarHandler(val) {
      this.isOpen = val
    },
  },
  components: {
    Navbar,
    Sidebar,
  },
}
</script>

<style>
.sidebar-position {
  /* display: flex;
  justify-content: flex-end; */
  padding: 20px;
}
</style>
