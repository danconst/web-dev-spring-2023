<script setup lang="ts">
</script>

<template>
    <div class = "flyout">
        Flyout
    </div>
</template>

<style scoped>
    .flyout {
        position: fixed;
        top: 0;
        right: -18rem;
        width: 20rem;
        height: 100vh;
        background-color: white;
        box-shadow: 0 0  5px rgb(0, 0, 0);
        transition: right 0,5s ease-in-out;
    }
    .flyout.hover {
        right: 0;
    }
</style>