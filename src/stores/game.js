import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameStore = defineStore('game', () => {
  const cards = ref(null)

  async function getAllCards() {
    const response = await fetch(import.meta.env.VITE_API_URL)
    cards.value = await response.json()
  }

  return { cards, getAllCards }
})
