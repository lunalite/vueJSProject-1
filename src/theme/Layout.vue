<template>
  <div id="app">
    <AppHeader/>
    <section class="main-section section"></section>
    <div class="container content">
      <Category/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from './AppFooter.vue'
import AppHeader from './AppHeader.vue'
import Category from './Category.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    Category
  }
}
</script>

<style lang="scss">
$primary: #287ab1;
@import "~bulma";

.columns {
  flex-wrap: wrap;
}
</style>
