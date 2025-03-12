<template>
  <h1>Game</h1>
</template>

<script setup>

import { onMounted } from "vue"
import { useGameStore } from "@/stores/game.js"

const store = useGameStore()

onMounted(async () => {
  await store.getAllCards()

  console.log(store.cards);
})
</script>
