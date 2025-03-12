<template>
  <div class="absolute inset-0 bg-gray-900/75 z-10 flex justify-center items-center">
    <div class="bg-white p-8 rounded">
      <h2 class="font-black">Glückwunsch!</h2>
      <ol class="my-8">
        <li v-for="(player, index) of store.ranking" :key="player.id">
          <div class="font-bold">
            <div v-if="isWinner(index)" class="text-xl bg-violet-200 p-4 rounded-sm mb-4">
              <span>🎉 GEWINNER:</span>
              <br>
              <span class="text-violet-700">{{ player.name }} ({{ player.score }} Paare)</span>
            </div>
            <div v-else>
              <span>{{ index + 1 }}. Platz: {{ player.name }} ({{ player.score }})</span>
            </div>
          </div>
        </li>
      </ol>
      <BtnNewGame />
    </div>
  </div>
</template>

<script setup>
import BtnNewGame from "@/components/new-game/BtnNewGame.vue"

import { useGameStore } from "@/stores/game.js"
import { onMounted } from "vue"
import Confetti from "js-confetti"

const store = useGameStore()
const confetti = new Confetti()

function isWinner(i) {
  return i + 1 === 1
}

onMounted(() => {
  confetti.addConfetti()
})
</script>
