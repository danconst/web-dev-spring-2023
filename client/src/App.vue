<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'


const obj:any = {
  msg: "New Paltz Rocks!"
}

</script>

<template>
  <NavBar />
  <RouterView />
</template>
