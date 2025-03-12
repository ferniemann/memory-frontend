<template>
  <button @click="$router.push('/')"
    class="bg-violet-700 text-white rounded py-2 px-6 hover:bg-violet-900 cursor-pointer disabled:pointer-events-none disabled:opacity-50"
    :disabled="$route.name === 'home'">Neues Spiel</button>
</template>
