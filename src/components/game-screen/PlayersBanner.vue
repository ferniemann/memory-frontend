<template>
  <footer class="bg-violet-900 z-10 p-4 fixed inset-x-0 bottom-0 flex justify-between">
    <div v-for="(player, index) of store.players" :key="player.id"
      class="flex flex-col items-center text-xs p-2 border-1 rounded"
      :class="getPlayerColor(index, store.currentPlayer)">
      <p class="">{{ player.name }}</p>
      <p>{{ player.score }}</p>
    </div>
  </footer>
</template>

<script setup>
import { getPlayerColor } from "@/composables/game.js"
import { useGameStore } from "@/stores/game.js"

const store = useGameStore()
</script>
