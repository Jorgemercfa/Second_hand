<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import Navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { getCompanyproducts } from '@/auth/companyproductsRepo';
import { useHomeSeo } from '@/composables/useSeoHead';

useHomeSeo();

const images = [
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1500&q=80',
];

const currentImageIndex = ref(0);
const intervalId = ref(null);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

const startCarousel = () => {
  stopCarousel();
  intervalId.value = setInterval(nextImage, 5000);
};

const stopCarousel = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
};

onMounted(() => {
  startCarousel();
});

onBeforeUnmount(() => {
  stopCarousel();
});

const products = computed(() => getCompanyproducts());
const featuredCards = computed(() => products.value.slice(0, 6));
</script>

<template>
  <header>
    <Navbar />
  </header>

  <div class="home-area">
    <div class="carousel-container">
      <img class="img-home" :src="images[currentImageIndex]" alt="Second Hand" />
      <div class="carousel-dots">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === currentImageIndex }"
          @click="currentImageIndex = index"
        ></span>
      </div>
    </div>

    <div class="text-home">
      Second Hand donde le damos una segunda oportunidad a los productos para que sigan siendo útiles,
      bonitos y accesibles para más personas.
    </div>

    <div class="feature-banner">
      <div class="feature-card">
        <strong>+500</strong>
        <span>productos reutilizados</span>
      </div>
      <div class="feature-card">
        <strong>20%</strong>
        <span>de ahorro promedio</span>
      </div>
      <div class="feature-card">
        <strong>4.8/5</strong>
        <span>valoración de clientes</span>
      </div>
    </div>

    <h1 class="title-home">Productos destacados</h1>

    <div class="our-products-wrapper">
      <div class="our-products">
        <router-link
          v-for="product in featuredCards"
          :key="product.id"
          :to="{ name: 'productsDetails', params: { id: product.id } }"
          class="logs-item"
        >
          <img class="card-icons" :src="product.image" :alt="product.name" />
          <div class="product-mini-info">
            <h4 class="product-mini-title">{{ product.name }}</h4>
            <div class="product-mini-price">S/ {{ product.discount_price || product.price || '0.00' }}</div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="cta-strip">
      <h2>Más valor, menos desperdicio</h2>
      <router-link to="/Promotions-item" class="cta-button">Ver promociones</router-link>
    </div>
  </div>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.home-area {
  width: 100%;
}

.carousel-container {
  position: relative;
  width: 100%;
}

.carousel-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.18);
}

.img-home {
  width: 100%;
  height: 78vh;
  min-height: 480px;
  object-fit: cover;
  display: block;
}

.carousel-dots {
  position: absolute;
  bottom: 22px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 1;
}

.carousel-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}

.carousel-dots .active {
  background: #2b62d9;
  transform: scale(1.18);
}

.text-home {
  max-width: 900px;
  margin: 52px auto 0;
  text-align: center;
  font-size: 1.12rem;
  color: #334761;
  line-height: 1.8;
}

.feature-banner {
  max-width: 1000px;
  margin: 38px auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 18px;
}

.feature-card {
  background: linear-gradient(135deg, #ffffff, #edf4ff);
  border-radius: 18px;
  padding: 24px 18px;
  text-align: center;
  box-shadow: 0 10px 26px rgba(43, 98, 217, 0.08);
  border: 1px solid rgba(43, 98, 217, 0.08);
}

.feature-card strong {
  display: block;
  font-size: 1.7rem;
  color: #1f3d8f;
  margin-bottom: 4px;
}

.feature-card span {
  color: #53657a;
}

.title-home {
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 70px 0 28px;
  color: #172437;
}

.our-products-wrapper {
  width: min(1200px, 92%);
  margin: 0 auto;
  padding-bottom: 30px;
}

.our-products {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 16px 4px 10px;
}

.logs-item {
  flex: 0 0 260px;
  border-radius: 18px;
  overflow: hidden;
  background: white;
  box-shadow: 0 12px 24px rgba(18, 32, 54, 0.08);
  text-decoration: none;
  color: inherit;
}

.card-icons {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.product-mini-info {
  padding: 16px;
}

.product-mini-title {
  margin: 0 0 8px;
  font-size: 1.08rem;
  color: #172437;
}

.product-mini-price {
  color: #2b62d9;
  font-weight: 800;
}

.cta-strip {
  width: min(1100px, 90%);
  margin: 30px auto 0;
  background: linear-gradient(135deg, #1f3d8f, #2b62d9);
  border-radius: 24px;
  padding: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  color: white;
}

.cta-strip h2 {
  margin: 0;
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #183a89;
  border-radius: 999px;
  padding: 12px 20px;
  font-weight: 800;
  text-decoration: none;
}

@media (max-width: 700px) {
  .feature-banner {
    grid-template-columns: 1fr;
  }

  .cta-strip {
    flex-direction: column;
    text-align: center;
  }
}
</style>
