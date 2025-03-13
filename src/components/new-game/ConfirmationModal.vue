<template>
  <div class="absolute inset-0 bg-gray-900/75 z-100 flex justify-center items-center">
    <div class="bg-white p-8 rounded">
      <h2 class="font-black">Möchtest du ein neues Spiel starten?</h2>
      <menu class="flex justify-between mt-8">
        <button @click="$emit('newGame')" :class="btnClasses">Neues Spiel</button>
        <button @click="$emit('abort')" :class="btnClasses">Abbrechen</button>
      </menu>
    </div>
  </div>
</template>


<script setup>

const btnClasses = "bg-violet-700 text-white rounded py-2 px-6 hover:bg-violet-900 cursor-pointer disabled:pointer-events-none disabled:opacity-50"
</script>
