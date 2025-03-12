import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameStore = defineStore('game', () => {
  const playersCount = ref(2)
  const cards = ref(null)
  const players = ref([])
  const ranking = ref(null)
  const endGame = ref(false)
  const size = ref(16)
  let correctPairs = 0

  function createPlayers() {
    players.value.length = 0

    for (let i = 0; i < playersCount.value; i++) {
      players.value.push({
        id: i,
        name: `Spieler ${i + 1}`,
        score: 0,
        currentPlayer: false,
      })
    }
  }

  const currentPlayer = ref(0)
  const revealedCards = ref([])

  async function initNewGame() {
    endGame.value = false
    correctPairs = 0
    ranking.value = null
    await getAllCards()
  }

  async function getAllCards() {
    const response = await fetch(import.meta.env.VITE_API_URL + size.value)
    cards.value = await response.json()
  }

  function revealCard(card) {
    if (revealedCards.value.length > 1) return
    if (revealedCards.value.includes(card)) return
    if (card.correct) return

    revealedCards.value.push(card)

    if (revealedCards.value.length === 2) checkMatch()
  }

  function checkMatch() {
    const firstCard = revealedCards.value[0]
    const secondCard = revealedCards.value[1]

    if (firstCard.pair_id === secondCard.pair_id) {
      return handleMatch(firstCard, secondCard)
    }

    setTimeout(() => {
      revealedCards.value.length = 0
      nextMove()
    }, 1000)
  }

  function handleMatch(card1, card2) {
    card1.correct = true
    card2.correct = true

    correctPairs++
    players.value[currentPlayer.value].score++
    revealedCards.value.length = 0

    if (correctPairs === cards.value.length / 2) {
      setTimeout(() => {
        handleEndGame()
      }, 500)
    }
  }

  function nextMove() {
    const lastPlayer = players.value.length - 1

    if (currentPlayer.value === lastPlayer) {
      currentPlayer.value = 0
      return
    }

    currentPlayer.value++
  }

  function handleEndGame() {
    endGame.value = true
    calculateRanking()
  }

  function calculateRanking() {
    ranking.value = players.value.sort((a, b) => b.score - a.score)
  }

  return {
    playersCount,
    cards,
    players,
    ranking,
    endGame,
    size,
    currentPlayer,
    revealedCards,
    createPlayers,
    getAllCards,
    revealCard,
    checkMatch,
    initNewGame,
  }
})
