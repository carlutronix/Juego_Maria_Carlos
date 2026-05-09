<template>
  <div class="memory-board">
    <MemoryCard 
      v-for="card in cards" 
      :key="card.id" 
      :card="card" 
      @click="$emit('card-click', card.id)" 
    />
  </div>
</template>

<script setup>
import MemoryCard from './MemoryCard.vue';

defineProps({
  cards: Array
});
defineEmits(['card-click']);
</script>

<style scoped>
.memory-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 500px;
}

@media (max-width: 400px) {
  .memory-board {
    gap: 5px;
  }
}
</style>
