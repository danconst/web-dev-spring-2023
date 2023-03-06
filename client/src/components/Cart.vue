<script setup lang="ts">
import { useCart } from "@/model/cart"
const cart = useCart();
</script>

<template>
    <h1>Cart</h1>
    <p>{{ cart.length }}</p>

</template>

<style scoped>
</style>