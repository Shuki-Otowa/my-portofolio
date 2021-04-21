<template>
  <div class="bottom-nav-container">
    <v-bottom-navigation grow background-color="#f5f5f5" height="80px">
      <v-btn v-for="menu in menus" :key="menu.title" :to="menu.path">
        <span>{{ menu.title }}</span>
        <v-icon>{{ menu.icon }}</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menus: [
      {
        title: 'Home',
        icon: 'mdi-home-variant',
        path: '/'
      },
      {
        title: 'Profile',
        icon: 'mdi-account-circle',
        path: '/profile'
      },
      {
        title: 'Skill',
        icon: 'mdi-hammer-wrench',
        path: '/skill'
      },
      {
        title: 'Work',
        icon: 'mdi-iframe',
        path: '/work'
      },
      {
        title: 'Contact',
        icon: 'mdi-email-receive',
        path: '/contact'
      },
    ]
  })
}

</script>

<style>
.bottom-nav-container {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.v-bottom-navigation {
  justify-content: flex-end !important;
}

.v-btn {
  height: 80px !important;
}

.v-btn--active {
  background-color: rgba(0, 0, 0, .8) !important;
  color: #f5f5f5 !important;
}

</style> 


