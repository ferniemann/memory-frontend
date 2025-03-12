<template>
  <article>
    <h2 class="font-bold mb-4">Wie viele spielen mit?</h2>
    <form @change="store.createPlayers()" class="flex gap-4">
      <input type="radio" name="players" id="players-2" :value="2" v-model="store.playersCount" :class="radioStyles"
        class="peer/2">
      <label for="players-2" class=" peer-checked/2:bg-blue-400" :class="tabStyles">2</label>
      <input type="radio" name="players" id="players-3" :value="3" v-model="store.playersCount" :class="radioStyles"
        class="peer/3">
      <label for="players-3" class="peer-checked/3:bg-blue-400" :class="tabStyles">3</label>
      <input type="radio" name="players" id="players-4" :value="4" v-model="store.playersCount" :class="radioStyles"
        class="peer/4">
      <label for="players-4" class="peer-checked/4:bg-blue-400" :class="tabStyles">4</label>
      <input type="radio" name="players" id="players-5" :value="5" v-model="store.playersCount" :class="radioStyles"
        class="peer/5">
      <label for="players-5" class=" peer-checked/5:bg-blue-400" :class="tabStyles">5</label>
    </form>
    <h2 class="font-bold mt-12 mb-4">Wie viele Karten möchtet ihr?</h2>
    <form @change="store.getAllCards(store.size)" class="flex gap-4">
      <input type="radio" name="game-size" id="cards-16" :value="16" v-model="store.size" :class="radioStyles"
        class="peer/16">
      <label for="cards-16" class=" peer-checked/16:bg-blue-400" :class="tabStyles">16</label>
      <input type="radio" name="game-size" id="cards-20" :value="20" v-model="store.size" :class="radioStyles"
        class="peer/20">
      <label for="cards-20" class="peer-checked/20:bg-blue-400" :class="tabStyles">20</label>
      <input type="radio" name="game-size" id="cards-24" :value="24" v-model="store.size" :class="radioStyles"
        class="peer/24">
      <label for="cards-24" class="peer-checked/24:bg-blue-400" :class="tabStyles">24</label>
    </form>
  </article>
</template>

<script setup>
import { useGameStore } from "@/stores/game.js"

const radioStyles = "sr-only"
const tabStyles = "py-2 px-6 bg-blue-200 font-bold rounded"
const store = useGameStore()
</script>
