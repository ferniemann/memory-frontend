<template>
  <button @click="handleNewGame(false)"
    class="bg-violet-700 text-white rounded py-2 px-6 hover:bg-violet-900 cursor-pointer disabled:pointer-events-none disabled:opacity-50"
    :disabled="$route.name === 'home'">Neues Spiel</button>

  <ConfirmationModal v-if="showConfirmationScreen" @abort="handleAbort" @newGame="handleNewGame(true)" />
</template>

<script setup>
import ConfirmationModal from "@/components/new-game/ConfirmationModal.vue"

import { ref } from "vue"
import Router from "@/router"

const props = defineProps({
  confirmation: {
    default: false,
    type: Boolean
  }
})
const showConfirmationScreen = ref(false)

function handleNewGame(confirmed = false) {
  if (props.confirmation === false || confirmed) {
    Router.push({ name: "home" })
    showConfirmationScreen.value = false
    return;
  }


  showConfirmationScreen.value = true
}

function handleAbort() {
  showConfirmationScreen.value = false
}
</script>
