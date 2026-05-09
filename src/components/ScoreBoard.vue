<template>
  <div class="scoreboard">
    <div class="progress">
      Parejas encontradas: {{ matchedPairs }} / {{ totalPairs }}
    </div>
    <div class="players">
      <div 
        class="player" 
        :class="{ active: currentPlayerIndex === 0 }"
      >
        <div class="name">{{ players[0].name }}</div>
        <div class="score">{{ players[0].score }}</div>
      </div>
      
      <div class="vs">VS</div>
      
      <div 
        class="player" 
        :class="{ active: currentPlayerIndex === 1 }"
      >
        <div class="name">{{ players[1].name }}</div>
        <div class="score">{{ players[1].score }}</div>
      </div>
    </div>
    <div class="turn-indicator">
      Turno de {{ players[currentPlayerIndex].name }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  players: Array,
  currentPlayerIndex: Number,
  matchedPairs: Number,
  totalPairs: Number
});
</script>

<style scoped>
.scoreboard {
  width: 100%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  backdrop-filter: blur(4px);
}

.progress {
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
  font-weight: 500;
}

.players {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
}

.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 12px;
  opacity: 0.5;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.player.active {
  opacity: 1;
  transform: scale(1.1);
  background: white;
  border-color: #ec4899;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.2);
}

.name {
  font-weight: bold;
  font-size: 1.1rem;
}

.score {
  font-size: 1.5rem;
  color: #db2777;
  font-weight: 900;
}

.vs {
  font-weight: bold;
  color: #9ca3af;
  font-size: 0.9rem;
}

.turn-indicator {
  font-weight: 600;
  color: #db2777;
  font-size: 1.1rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

@media (prefers-color-scheme: dark) {
  .scoreboard {
    background: rgba(0, 0, 0, 0.3);
  }
  .player.active {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>
