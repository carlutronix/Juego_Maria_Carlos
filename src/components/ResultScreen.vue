<template>
  <div class="result-screen">
    <div class="winner-announcement">
      <div class="winner-avatar" v-if="winner">
        <img :src="winner.photo" :alt="winner.name" />
      </div>
      <h2 v-if="isTie">¡Es un empate!</h2>
      <h2 v-else>¡{{ winner.name }} gana!</h2>
    </div>
    
    <div class="scores">
      <div class="score-line">
        <span>Maria:</span> <strong>{{ players[0].score }}</strong>
      </div>
      <div class="score-line">
        <span>Carlos:</span> <strong>{{ players[1].score }}</strong>
      </div>
    </div>

    <div class="romantic-message">
      <p>No importa quién gane, el mayor premio es estar juntos 🤍</p>
      <p>¡Feliz aniversario, amorchete! Por muchos más juntos.</p>
      <p class="big-love">TE AMOOOOO</p>
    </div>

    <button class="restart-btn" @click="$emit('restart')">Jugar de nuevo</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  players: Array
});

defineEmits(['restart']);

const winner = computed(() => {
  if (props.players[0].score > props.players[1].score) return props.players[0];
  if (props.players[1].score > props.players[0].score) return props.players[1];
  return null;
});

const isTie = computed(() => props.players[0].score === props.players[1].score);
</script>

<style scoped>
.result-screen {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.2);
  max-width: 450px;
  margin: 0 auto;
  border: 2px solid #fbcfe8;
}

.winner-announcement h2 {
  font-size: 2.5rem;
  color: #db2777;
  margin-bottom: 1.5rem;
}

.winner-avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ec4899;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
}

.winner-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scores {
  background: #fdf2f8;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.score-line {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px dashed #fbcfe8;
}
.score-line:last-child {
  border-bottom: none;
}

.romantic-message {
  font-style: italic;
  color: #831843;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.big-love {
  font-size: 1.5rem;
  font-weight: 900;
  margin-top: 1rem;
  display: block;
}

.restart-btn {
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}
.restart-btn:hover {
  background: linear-gradient(135deg, #db2777 0%, #9d174d 100%);
  transform: scale(1.05);
}

@media (prefers-color-scheme: dark) {
  .result-screen {
    background: rgba(30, 0, 10, 0.8);
    border-color: #831843;
  }
  .scores {
    background: rgba(255, 255, 255, 0.05);
  }
  .romantic-message {
    color: #fbcfe8;
  }
}
</style>
