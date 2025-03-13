<template>
  <article>
    <ul class="grid grid-cols-4 gap-2 mb-20">
      <MemoryCard v-for="card in store.cards" :key="card.id" :card="card" />
    </ul>

    <EndGameOverlay v-if="store.endGame" />

    <PlayersBanner />
  </article>
</template>

<script setup>
import MemoryCard from "@/components/game-screen/MemoryCard.vue"
import EndGameOverlay from "@/components/game-screen/EndGameOverlay.vue"
import PlayersBanner from "@/components/game-screen/PlayersBanner.vue"

import { onMounted } from "vue"
import { useGameStore } from "@/stores/game.js"

const store = useGameStore()

onMounted(async () => {
  await store.loadGame()
})
</script>
