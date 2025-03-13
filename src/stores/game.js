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
      })
    }
  }

  const currentPlayer = ref(0)
  const revealedCards = ref(0)

  async function loadGame() {
    const savedGame = JSON.parse(localStorage.getItem('game'))

    if (savedGame) {
      cards.value = savedGame.cards
      players.value = savedGame.players
      correctPairs = savedGame.correctPairs
      currentPlayer.value = savedGame.currentPlayer
      revealedCards.value = savedGame.revealedCards
      endGame.value = savedGame.endGame
      ranking.value = savedGame.ranking
      return
    }

    initNewGame()
  }

  async function initNewGame() {
    endGame.value = false
    correctPairs = 0
    ranking.value = null
    currentPlayer.value = 0
    revealedCards.value = 0
    await getAllCards()
    createPlayers()
    saveGame()
  }

  async function getAllCards() {
    const response = await fetch(import.meta.env.VITE_API_URL + size.value)
    cards.value = await response.json()
  }

  function revealCard(card) {
    if (revealedCards.value > 1) return
    if (card.revealed) return
    if (card.correct) return

    card.revealed = true
    revealedCards.value++

    saveGame()

    if (revealedCards.value === 2) checkMatch()
  }

  function checkMatch() {
    const revealedCards = cards.value.filter((card) => card.revealed && !card.correct)
    const firstCard = revealedCards[0]
    const secondCard = revealedCards[1]

    if (firstCard.pair_id === secondCard.pair_id) {
      return handleMatch(firstCard, secondCard)
    }

    setTimeout(() => {
      firstCard.revealed = false
      secondCard.revealed = false
      nextMove()
    }, 1000)
  }

  function handleMatch(card1, card2) {
    card1.correct = true
    card2.correct = true

    correctPairs++
    revealedCards.value = 0
    players.value[currentPlayer.value].score++
    saveGame()

    if (correctPairs === cards.value.length / 2) {
      setTimeout(() => {
        handleEndGame()
      }, 500)
    }
  }

  function nextMove() {
    const lastPlayer = players.value.length - 1
    revealedCards.value = 0

    if (currentPlayer.value === lastPlayer) {
      currentPlayer.value = 0
      return
    }

    currentPlayer.value++

    saveGame()
  }

  function handleEndGame() {
    endGame.value = true
    calculateRanking()
    saveGame()
  }

  function calculateRanking() {
    ranking.value = players.value.sort((a, b) => b.score - a.score)
  }

  function removeSavedGame() {
    localStorage.setItem('game', null)
  }

  function saveGame() {
    localStorage.setItem(
      'game',
      JSON.stringify({
        cards: cards.value,
        playersCount: playersCount.value,
        players: players.value,
        currentPlayer: currentPlayer.value,
        revealedCards: revealedCards.value,
        endGame: endGame.value,
        ranking: ranking.value,
      }),
    )
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
    loadGame,
    initNewGame,
    removeSavedGame,
  }
})
