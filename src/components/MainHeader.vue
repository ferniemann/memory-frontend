<template>
  <header class="bg-violet-100 p-4 flex justify-between items-center">
    <h1 class="text-xl font-black text-violet-700">Memory Game</h1>
    <BtnNewGame :confirmation="true" />
  </header>
</template>

<script setup>
import BtnNewGame from "@/components/new-game/BtnNewGame.vue"
</script>
