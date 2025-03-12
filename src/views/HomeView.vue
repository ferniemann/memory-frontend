<template>
  <NewGameOptions />
  <RouterLink :to="{ name: 'game' }"
    class="bg-violet-700 text-white rounded py-2 px-6 hover:bg-violet-900 cursor-pointer my-8 inline-block">
    Spiel starten
  </RouterLink>
</template>

<script setup>
import NewGameOptions from "@/components/new-game/NewGameOptions.vue"
</script>
