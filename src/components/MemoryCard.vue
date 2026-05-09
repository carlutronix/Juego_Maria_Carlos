<template>
  <div class="card-container" :class="{ flipped: card.isFlipped || card.isMatched, matched: card.isMatched }">
    <div class="card-inner">
      <div class="card-front">
        <div class="heart-pattern">🤍</div>
      </div>
      <div class="card-back">
        <img :src="card.image" alt="card image" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: Object
});
</script>

<style scoped>
.card-container {
  aspect-ratio: 3/4;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform-style: preserve-3d;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card-container.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-container.matched .card-inner {
  animation: pulse-match 0.5s ease-in-out;
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
}

.card-front {
  background: linear-gradient(135deg, #fbcfe8 0%, #ec4899 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}

.heart-pattern {
  font-size: 2rem;
  opacity: 0.8;
}

.card-back {
  background-color: white;
  transform: rotateY(180deg);
  border: 2px solid #ec4899;
}

.card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes pulse-match {
  0% { transform: rotateY(180deg) scale(1); }
  50% { transform: rotateY(180deg) scale(1.1); box-shadow: 0 0 20px #ec4899; }
  100% { transform: rotateY(180deg) scale(1); }
}

@media (prefers-color-scheme: dark) {
  .card-front {
    background: linear-gradient(135deg, #9d174d 0%, #be185d 100%);
    border-color: #fbcfe8;
  }
}
</style>
