<script setup>
import { computed, ref } from 'vue';
import Navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { useStaticPageSeo } from '@/composables/useSeoHead';

useStaticPageSeo(
  'Promociones',
  'Aprovecha descuentos por tiempo limitado y ofertas exclusivas en Second Hand para comprar con más valor.',
  'Promotions-item',
);

const promotions = ref([
  {
    id: 1,
    title: 'Promo de lanzamiento',
    description: 'Descuento del 20% en productos seleccionados para renovar tu hogar con estilo y ahorro.',
    price: 149,
    originalPrice: 189,
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    deadline: '2026-12-31',
  },
  {
    id: 2,
    title: 'Kit de cocina',
    description: 'Compra dos productos del hogar y recibe un 15% adicional por tiempo limitado.',
    price: 259,
    originalPrice: 305,
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
    deadline: '2026-11-15',
  },
  {
    id: 3,
    title: 'Entrega express',
    description: 'Haz tu compra hoy y disfruta envío prioritario en pedidos superiores a S/ 200.',
    price: 210,
    originalPrice: 250,
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    deadline: '2026-10-30',
  },
]);

const isExpired = (deadline) => {
  if (!deadline) return false;
  return new Date(deadline) < new Date();
};

const formatDeadline = (deadline) => {
  if (!deadline) return 'Sin fecha límite';
  return new Date(deadline).toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const sendWhatsApp = (promo) => {
  const message = `Hola Second Hand, me interesa la promoción *${promo.title}* por S/ ${promo.price}. Quiero más información.`;
  window.open(`https://wa.me/51999999999?text=${encodeURIComponent(message)}`, '_blank');
};

const promoSummary = computed(() => promotions.value.length);
</script>

<template>
  <div class="page-wrapper">
    <header>
      <Navbar />
    </header>

    <section class="promos-section">
      <div class="promos-container">
        <div class="promo-badge">Ofertas activas</div>
        <h1 class="main-title">Promociones</h1>
        <p class="main-subtitle">
          Descubre descuentos por tiempo limitado diseñados para ayudarte a ahorrar
          sin sacrificar calidad.
        </p>

        <div v-if="promoSummary === 0" class="status-state">
          <p class="status-icon">🎉</p>
          <p class="status-msg">Pronto habrá nuevas promociones para ti.</p>
        </div>

        <div v-else class="promos-grid">
          <article
            v-for="promo in promotions"
            :key="promo.id"
            class="promo-card"
            :class="{ 'promo-card--expired': isExpired(promo.deadline) }"
          >
            <div class="promo-image-wrapper">
              <img :src="promo.image" :alt="promo.title" class="promo-image" />
              <span v-if="isExpired(promo.deadline)" class="promo-badge promo-badge--expired">
                Vencida
              </span>
              <span v-else class="promo-badge promo-badge--active">Oferta</span>
            </div>

            <div class="promo-body">
              <h2 class="promo-title">{{ promo.title }}</h2>
              <p class="promo-description">{{ promo.description }}</p>

              <div class="promo-price-block">
                <span class="promo-original-price">S/ {{ promo.originalPrice }}</span>
                <span class="promo-price">S/ {{ promo.price }}</span>
              </div>

              <p class="promo-deadline">
                📅 Válido hasta: <strong>{{ formatDeadline(promo.deadline) }}</strong>
              </p>

              <button
                class="promo-btn"
                :disabled="isExpired(promo.deadline)"
                :class="{ 'promo-btn--disabled': isExpired(promo.deadline) }"
                @click="sendWhatsApp(promo)"
              >
                {{ isExpired(promo.deadline) ? 'Promoción vencida' : 'Quiero esta promo' }}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(180deg, #f7f8fc 0%, #f2f6ff 100%);
}

.promos-section {
  flex: 1;
  padding: 90px 0 80px;
}

.promos-container {
  width: min(1120px, 90%);
  margin: 0 auto;
  text-align: center;
}

.promo-badge {
  display: inline-block;
  background: linear-gradient(135deg, #2d6cdf, #4e8df7);
  color: white;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 7px 18px;
  border-radius: 999px;
  margin-bottom: 14px;
}

.main-title {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 900;
  margin-bottom: 12px;
  color: #1e2d3d;
}

.main-subtitle {
  max-width: 700px;
  margin: 0 auto 42px;
  color: #5f6f87;
  font-size: 1.04rem;
  line-height: 1.7;
}

.promos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
  text-align: left;
}

.promo-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(22, 34, 55, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.promo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(22, 34, 55, 0.12);
}

.promo-card--expired {
  opacity: 0.7;
  filter: grayscale(0.2);
}

.promo-image-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: #edf3ff;
}

.promo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo-badge--active {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #27ae60;
  color: white;
}

.promo-badge--expired {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #687787;
  color: white;
}

.promo-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px;
}

.promo-title {
  margin: 0;
  font-size: 1.3rem;
  color: #1a2d3f;
}

.promo-description {
  margin: 0;
  color: #53657a;
  line-height: 1.6;
}

.promo-price-block {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}

.promo-original-price {
  font-size: 0.92rem;
  color: #8a96a7;
  text-decoration: line-through;
}

.promo-price {
  font-size: 1.7rem;
  font-weight: 900;
  color: #2b62d9;
}

.promo-deadline {
  margin: 0;
  color: #53657a;
  font-size: 0.9rem;
}

.promo-btn {
  margin-top: auto;
  border: none;
  border-radius: 999px;
  padding: 13px 20px;
  background: linear-gradient(135deg, #2dd4bf, #2b62d9);
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.promo-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(43, 98, 217, 0.22);
}

.promo-btn--disabled,
.promo-btn:disabled {
  background: #dfe6ef;
  color: #65768c;
  cursor: not-allowed;
  box-shadow: none;
}

.status-state {
  text-align: center;
  padding: 70px 20px;
}

.status-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.status-msg {
  color: #334761;
  font-size: 1.06rem;
  font-weight: 600;
}

@media (max-width: 640px) {
  .promos-grid {
    grid-template-columns: 1fr;
  }
}
</style>
