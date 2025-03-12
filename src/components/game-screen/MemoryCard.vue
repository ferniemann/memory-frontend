<template>
  <li class="relative flex items-center justify-center aspect-square cursor-pointer rounded overflow-hidden"
    @click="store.revealCard(card)">
    <div class="bg-violet-700 absolute inset-0 flex items-center justify-center transition-all delay-500 z-10"
      :class="{ flipped: store.revealedCards.includes(card) || card.correct }">
      <span class="text-2xl text-white">?</span>
    </div>
    <div class="bg-amber-200 transition-all card-wrapper h-full flex items-center justify-center p-2">
      <img :src="card.image" :alt="card.alt">
    </div>
  </li>
</template>

<script setup>
import { useGameStore } from "@/stores/game.js"

defineProps(["card"])

const store = useGameStore();
</script>
