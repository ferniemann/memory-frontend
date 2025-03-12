export function getPlayerColor(index, currentPlayer) {
  return {
    'text-white': index === currentPlayer,
    'text-violet-400 border-violet-900': index !== currentPlayer,
  }
}
