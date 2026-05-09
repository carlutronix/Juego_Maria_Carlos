<template>
  <div class="app-container">
    <StartScreen v-if="screen === 'start'" @start="startGame" />
    
    <div v-else-if="screen === 'playing'" class="game-container">
      <ScoreBoard 
        :players="players" 
        :currentPlayerIndex="currentPlayerIndex" 
        :matchedPairs="matchedPairs"
        :totalPairs="totalPairs"
      />
      <MemoryBoard 
        :cards="cards" 
        @card-click="handleCardClick" 
      />
    </div>

    <ResultScreen 
      v-else-if="screen === 'result'" 
      :players="players" 
      @restart="startGame" 
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import StartScreen from './components/StartScreen.vue';
import ScoreBoard from './components/ScoreBoard.vue';
import MemoryBoard from './components/MemoryBoard.vue';
import ResultScreen from './components/ResultScreen.vue';
import { getInitialCards } from './data/cards';

const screen = ref('start'); // start, playing, result
const players = ref([
  { name: 'Maria', score: 0 },
  { name: 'Carlos', score: 0 }
]);
const currentPlayerIndex = ref(0);
const cards = ref([]);
const flippedCards = ref([]);
const isLocked = ref(false);

const totalPairs = computed(() => cards.value.length / 2);
const matchedPairs = computed(() => players.value.reduce((sum, p) => sum + p.score, 0));

const startGame = () => {
  players.value[0].score = 0;
  players.value[1].score = 0;
  currentPlayerIndex.value = 0;
  cards.value = getInitialCards();
  flippedCards.value = [];
  isLocked.value = false;
  screen.value = 'playing';
};

const handleCardClick = (cardId) => {
  if (isLocked.value) return;
  
  const cardIndex = cards.value.findIndex(c => c.id === cardId);
  const card = cards.value[cardIndex];

  // Prevent clicking already flipped or matched cards
  if (card.isFlipped || card.isMatched) return;

  // Flip the card
  card.isFlipped = true;
  flippedCards.value.push(card);

  if (flippedCards.value.length === 2) {
    checkMatch();
  }
};

const checkMatch = () => {
  isLocked.value = true;
  const [card1, card2] = flippedCards.value;

  if (card1.image === card2.image) {
    // Match!
    setTimeout(() => {
      card1.isMatched = true;
      card2.isMatched = true;
      players.value[currentPlayerIndex.value].score += 1;
      flippedCards.value = [];
      isLocked.value = false;

      checkWinCondition();
    }, 500); // Small delay to let user see the second card
  } else {
    // No match
    setTimeout(() => {
      card1.isFlipped = false;
      card2.isFlipped = false;
      flippedCards.value = [];
      // Change turn
      currentPlayerIndex.value = currentPlayerIndex.value === 0 ? 1 : 0;
      isLocked.value = false;
    }, 1200); // Allow time to memorize
  }
};

const checkWinCondition = () => {
  if (matchedPairs.value === totalPairs.value) {
    setTimeout(() => {
      screen.value = 'result';
      fireConfetti();
    }, 500);
  }
};

const fireConfetti = () => {
  import('canvas-confetti').then((module) => {
    const confetti = module.default;
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#db2777', '#fbcfe8', '#831843']
    });
  }).catch(() => {
    // Silently fail if canvas-confetti is not installed
  });
};
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
