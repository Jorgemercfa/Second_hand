<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '@/components/Footer-item.vue'
import Navbar from '@/components/Navbar-item.vue'
import { getCompanyproducts } from '@/auth/companyproductsRepo'

const router = useRouter()
const products = computed(() => getCompanyproducts())

const getProductName = (product) => product.name || 'Producto sin nombre'
const getButtonText = (product) => product.details_button || 'Ver detalles'
const parsePrice = (value) => {
  if (value === null || value === undefined || value === '') return null

  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null
  }

  if (typeof value !== 'string') return null

  const cleaned = value.trim().replace(/[^\d.,-]/g, '')
  if (!cleaned) return null

  const lastComma = cleaned.lastIndexOf(',')
  const lastDot = cleaned.lastIndexOf('.')
  const decimalIndex = Math.max(lastComma, lastDot)

  const normalizedValue =
    decimalIndex >= 0
      ? `${cleaned.slice(0, decimalIndex).replace(/[.,]/g, '')}.${cleaned
          .slice(decimalIndex + 1)
          .replace(/[.,]/g, '')}`
      : cleaned.replace(/[.,]/g, '')

  const parsed = Number(normalizedValue)

  return Number.isFinite(parsed) ? parsed : null
}

const getProductPrice = (product) => {
  const directPrice = parsePrice(product.price)
  if (directPrice !== null) return directPrice

  const originalPrice = parsePrice(product.originalPrice)
  if (originalPrice !== null) return originalPrice

  const discountPrice = parsePrice(product.discount_price)
  if (discountPrice !== null) return discountPrice

  const tributoPrice = parsePrice(product.tributo)
  if (tributoPrice !== null) return tributoPrice

  return null
}

const formatPrice = (product) => {
  const price = getProductPrice(product)

  if (price === null) return 'Precio no disponible'

  return `S/ ${price.toFixed(2)}`
}
</script>

<template>
  <header>
    <Navbar />
  </header>

  <div class="products-area">
    <h1 class="title-products">Nuestros Productos</h1>

    <div class="products-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-content">
          <h2 class="product-title">{{ getProductName(product) }}</h2>
          <img
            v-if="product.image"
            :src="product.image"
            :alt="getProductName(product)"
            class="product-image"
          />
          <p class="product-description">
            {{ formatPrice(product) }}
          </p>
        </div>

        <button
          class="details-button"
          @click="router.push({ name: 'productsDetails', params: { id: product.id } })"
        >
          {{ getButtonText(product) }}
        </button>
      </div>
    </div>
  </div>

  <footer>
    <Footer />
  </footer>
</template>

<style>
.products-area {
  margin: 50px 7%;
  text-align: center;
}

.title-products {
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: left;
  position: relative;
}

.title-products::after {
  content: '';
  width: 60px;
  height: 4px;
  background-color: #325bcd;
  position: absolute;
  bottom: -10px;
  left: 0;
  border-radius: 5px;
}

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #325bcd, #2549ad);
  color: white;
  border-radius: 14px;
  padding: 24px;
  width: 320px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}

.product-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.product-image {
  width: 160px;
  height: 160px;
  border-radius: 10px;
  object-fit: cover;
  background-color: white;
}

.product-title {
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
}

.product-description {
  font-size: 1rem;
  text-align: center;
}

.details-button {
  margin-top: 20px;
  background-color: #1f1f1f;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.details-button:hover {
  background-color: #141313;
}
</style>
