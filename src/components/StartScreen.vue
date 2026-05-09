<template>
  <div class="start-screen">
    <div class="heart-icon">❤️</div>
    <h1>¡Feliz Aniversario!</h1>
    <p>¿Quién tiene mejor memoria?</p>
    <div class="players-preview">
      <span>Maria</span> vs <span>Carlos</span>
    </div>
    <button class="start-btn" @click="$emit('start')">Empezar a Jugar</button>
  </div>
</template>

<style scoped>
.start-screen {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.heart-icon {
  font-size: 4rem;
  animation: pulse 1.5s infinite;
}

.players-preview {
  font-size: 1.2rem;
  margin: 1.5rem 0;
  font-weight: bold;
  color: #db2777;
}

.start-btn {
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (prefers-color-scheme: dark) {
  .start-screen {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
