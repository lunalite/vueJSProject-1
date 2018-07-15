<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/category/front-end"><img src="http://bit.ly/vue-img" alt="Vue SPA" /></router-link>
      <router-link class="nav-item is-tab" :to="{ name: 'category', params: { id: 'front-end' }}">Front-end</router-link>
      <router-link class="nav-item is-tab" :to="{ name: 'category', params: { id: 'mobile' }}">Mobile</router-link>
      <router-link class="nav-item is-tab" to="/login">
        <span v-if="isAuthenticated">Logout</span>
        <span v-else>Login</span>
      </router-link>
    </div>
  </nav>
</template>


<script>
import eventBus from '../event-bus'

export default {
  data () {
    return {
      isAuthenticated: false
    }
  },
  created () {
    eventBus.$on('authStatusUpdate', isAuthenticated => {
      console.log(isAuthenticated)
      this.isAuthenticated = isAuthenticated
    })
  }
}
</script>
