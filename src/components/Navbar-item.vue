<template>
  <nav class="navbar-area">
    <div class="nav-logo">
      <router-link to="/">
        <img class="logo" src="@/assets/company-logo.jpg" alt="Second Hand" />
      </router-link>
    </div>

    <div class="link-style" :class="{ 'show-menu': menuOpen }">
      <router-link @click="closeMenu" to="/" class="text-navbar">Inicio</router-link>
      <router-link @click="closeMenu" to="/Product-item" class="text-navbar">Productos</router-link>
      <router-link @click="closeMenu" to="/Promotions-item" class="text-navbar">Promociones</router-link>
      <router-link @click="closeMenu" to="/Reviews-item" class="text-navbar">Reseñas</router-link>
      <router-link @click="closeMenu" to="/About-item" class="text-navbar">Nosotros</router-link>
      <router-link @click="closeMenu" to="/Contact-item" class="text-navbar">Ayuda</router-link>

      <router-link @click="closeMenu" to="/Cart" class="text-navbar cart-link">
        <i class="pi pi-shopping-cart"></i>
        <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
      </router-link>

      <router-link
        v-if="!isAuthenticated"
        @click="closeMenu"
        to="/Sign-in"
        class="text-navbar"
        aria-label="Iniciar sesión"
        title="Iniciar sesión"
      >
        <i class="pi pi-sign-in"></i>
      </router-link>

      <router-link
        v-else
        @click="closeMenu"
        to="/Profile"
        class="text-navbar"
        aria-label="Perfil"
        title="Perfil"
      >
        <i class="pi pi-user"></i>
      </router-link>
    </div>

    <div class="hamburger" @click="toggleMenu">☰</div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useSession } from '@/auth/session';
import { useCart } from '@/store/cart.js';

const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
const closeMenu = () => (menuOpen.value = false);

const { isAuthenticated } = useSession();
const { cartCount } = useCart();
</script>

<style>
html {
  scroll-padding-top: 80px;
}

.navbar-area {
  background: linear-gradient(90deg, #1f3d8f, #2b62d9);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: 0 10px 24px rgba(28, 48, 78, 0.12);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-logo img.logo {
  height: 44px;
  width: auto;
  border-radius: 8px;
}

.link-style {
  display: flex;
  align-items: center;
  gap: 24px;
}

.pi {
  font-size: 20px;
  color: white;
}

.text-navbar {
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;
  transition: opacity 0.2s ease;
}

.text-navbar::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0%;
  height: 2px;
  background: white;
  transition: width 0.25s ease;
}

.text-navbar:hover::after,
.router-link-active::after {
  width: 100%;
}

.router-link-active {
  font-weight: 700;
}

.hamburger {
  display: none;
  font-size: 26px;
  color: white;
  cursor: pointer;
}

.cart-link {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background: #ff6b6b;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}

@media (max-width: 900px) {
  .link-style {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: linear-gradient(180deg, #1f3d8f, #203b88);
    padding: 20px 0;
    gap: 18px;
    display: none;
    animation: fadeIn 0.2s ease;
  }

  .link-style.show-menu {
    display: flex;
  }

  .hamburger {
    display: block;
  }

  .text-navbar::after {
    display: none;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
