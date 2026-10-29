<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { useStaticPageSeo } from '@/composables/useSeoHead';

useStaticPageSeo(
  'Reseñas',
  'Conoce la opinión de nuestros clientes y descubre por qué Second Hand es una opción confiable para comprar con valor.',
  'Reviews-item',
);

const reviews = ref([
  {
    id: 1,
    stars: 5,
    author: 'María L.',
    text: 'La experiencia fue excelente. Encontré un artículo en muy buen estado y la compra fue rápida y clara.',
  },
  {
    id: 2,
    stars: 5,
    author: 'Carlos R.',
    text: 'Muy buena atención y excelente presentación del producto. Me encantó el proceso de compra.',
  },
  {
    id: 3,
    stars: 4,
    author: 'Ana P.',
    text: 'Está muy bien pensado para comprar productos de segunda mano con confianza. Ideal para ahorrar.',
  },
]);

const form = ref({
  name: '',
  stars: 5,
  text: '',
});

const successMessage = ref('');
const errorMessage = ref('');

const submitReview = () => {
  if (!form.value.name.trim()) {
    errorMessage.value = 'Escribe tu nombre para publicar la reseña.';
    successMessage.value = '';
    return;
  }

  if (!form.value.text.trim()) {
    errorMessage.value = 'Escribe un comentario antes de enviar.';
    successMessage.value = '';
    return;
  }

  reviews.value.unshift({
    id: Date.now(),
    stars: form.value.stars,
    author: form.value.name.trim(),
    text: form.value.text.trim(),
  });

  form.value = { name: '', stars: 5, text: '' };
  successMessage.value = '¡Gracias! Tu reseña se ha publicado con éxito.';
  errorMessage.value = '';
};
</script>

<template>
  <div class="reviews-page">
    <header>
      <Navbar />
    </header>

    <main class="reviews-container">
      <section class="reviews-header">
        <div class="eyebrow">Testimonios</div>
        <h1>Reseñas de nuestros clientes</h1>
        <p>
          La confianza de nuestra comunidad es clave para seguir creciendo y mejorando.
        </p>
      </section>

      <section class="reviews-grid">
        <article v-for="item in reviews" :key="item.id" class="review-card">
          <div class="stars">{{ '★'.repeat(item.stars) }}</div>
          <p class="review-text">“{{ item.text }}”</p>
          <div class="review-author">
            <span class="avatar">{{ item.author.charAt(0).toUpperCase() }}</span>
            <span>{{ item.author }}</span>
          </div>
        </article>
      </section>

      <section class="review-form-wrap">
        <h2>Deja tu reseña</h2>

        <div class="review-form">
          <label>
            Nombre
            <input v-model="form.name" type="text" placeholder="Tu nombre" />
          </label>

          <label>
            Calificación
            <div class="star-selector">
              <button
                v-for="n in 5"
                :key="n"
                type="button"
                :class="{ active: n <= form.stars }"
                @click="form.stars = n"
              >
                ★
              </button>
            </div>
          </label>

          <label>
            Comentario
            <textarea v-model="form.text" rows="4" placeholder="Cuéntanos tu experiencia..." />
          </label>

          <p v-if="successMessage" class="success-msg">{{ successMessage }}</p>
          <p v-else-if="errorMessage" class="error-msg">{{ errorMessage }}</p>

          <button class="submit-btn" type="button" @click="submitReview">
            Enviar reseña
          </button>
        </div>
      </section>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.reviews-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f7f8fc 0%, #eef5ff 100%);
}

.reviews-container {
  width: min(1120px, 90%);
  margin: 0 auto;
  padding: 70px 0 60px;
}

.reviews-header {
  margin-bottom: 30px;
}

.eyebrow {
  display: inline-block;
  background: #e8f1ff;
  color: #2b62d9;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 7px 16px;
  font-size: 0.74rem;
  margin-bottom: 16px;
}

.reviews-header h1 {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  margin-bottom: 12px;
  color: #1b2430;
}

.reviews-header p {
  color: #5d6d82;
  max-width: 700px;
  line-height: 1.7;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  margin-bottom: 36px;
}

.review-card {
  background: white;
  border-radius: 22px;
  padding: 24px;
  box-shadow: 0 12px 28px rgba(28, 39, 56, 0.08);
  border: 1px solid rgba(43, 98, 217, 0.08);
}

.stars {
  color: #f4b400;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 14px;
}

.review-text {
  color: #2c3e50;
  line-height: 1.8;
  margin-bottom: 18px;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #465a73;
  font-weight: 700;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2b62d9, #4cc9f0);
  color: white;
  display: grid;
  place-items: center;
}

.review-form-wrap {
  background: white;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 12px 28px rgba(28, 39, 56, 0.08);
}

.review-form-wrap h2 {
  margin-bottom: 16px;
  color: #1b2430;
}

.review-form {
  display: grid;
  gap: 18px;
}

.review-form label {
  display: grid;
  gap: 8px;
  font-weight: 700;
  color: #334761;
}

.review-form input,
.review-form textarea {
  border: 1px solid #d7e1ef;
  border-radius: 12px;
  padding: 12px 14px;
  font: inherit;
  background: #f9fbff;
  transition: border-color 0.2s ease;
}

.review-form input:focus,
.review-form textarea:focus {
  outline: none;
  border-color: #2b62d9;
}

.star-selector {
  display: flex;
  gap: 8px;
}

.star-selector button {
  border: none;
  background: transparent;
  color: #d0d7e2;
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
}

.star-selector button.active {
  color: #f4b400;
}

.star-selector button:hover {
  transform: scale(1.08);
}

.submit-btn {
  width: fit-content;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, #2b62d9, #2dd4bf);
  color: white;
  font-weight: 800;
  padding: 12px 24px;
  cursor: pointer;
}

.success-msg {
  color: #1f9d61;
  background: #ecfff5;
  border: 1px solid #bfe8ce;
  border-radius: 10px;
  padding: 10px 12px;
  margin: 0;
}

.error-msg {
  color: #c13a3a;
  background: #fff1f1;
  border: 1px solid #f2c3c3;
  border-radius: 10px;
  padding: 10px 12px;
  margin: 0;
}

@media (max-width: 640px) {
  .review-form-wrap {
    padding: 22px 18px;
  }
}
</style>
