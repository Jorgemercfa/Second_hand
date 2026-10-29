<template>
  <div class="faq-page">
    <header>
      <Navbar />
    </header>

    <main class="faq-container">
      <div class="faq-header">
        <div class="eyebrow">FAQ</div>
        <h1>Preguntas frecuentes</h1>
        <p>Resolvemos las dudas más comunes sobre compras, entrega y uso de la plataforma.</p>
      </div>

      <div class="faq-list">
        <article class="faq-item">
          <h3>¿Cómo realizo una compra?</h3>
          <p>Explora el catálogo, agrega productos al carrito y completa el checkout siguiendo los pasos indicados.</p>
        </article>

        <article class="faq-item">
          <h3>¿Puedo registrar mi empresa?</h3>
          <p>Sí. La plataforma incluye un flujo de registro para empresas y administración de productos.</p>
        </article>

        <article class="faq-item">
          <h3>¿Qué tipo de productos se venden?</h3>
          <p>Productos reutilizados y de segunda mano seleccionados, priorizando utilidad, calidad y buena presentación.</p>
        </article>

        <article class="faq-item">
          <h3>¿Se manejan promo o descuentos?</h3>
          <p>Sí. Puedes revisar la sección de promociones para aprovechar ofertas activas temporales.</p>
        </article>

        <article class="faq-item">
          <h3>¿Qué pasa si necesito ayuda?</h3>
          <p>Puedes contactarnos desde la sección de ayuda o a través de los canales indicados en el pie de página.</p>
        </article>
      </div>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { useStaticPageSeo } from '@/composables/useSeoHead';

useStaticPageSeo(
  'FAQ',
  'Consulta las dudas frecuentes sobre compras, pagos, promociones y funcionamiento de Second Hand.',
  'FAQ',
);
</script>

<style scoped>
.faq-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f7f8fc 0%, #eef5ff 100%);
}

.faq-container {
  width: min(980px, 90%);
  margin: 0 auto;
  padding: 80px 0 60px;
}

.faq-header {
  margin-bottom: 26px;
}

.eyebrow {
  display: inline-block;
  background: #edf5ff;
  color: #2b62d9;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 7px 16px;
  margin-bottom: 16px;
}

.faq-header h1 {
  font-size: clamp(2.1rem, 4vw, 3rem);
  margin-bottom: 12px;
  color: #1f2d3d;
}

.faq-header p {
  color: #53657a;
  line-height: 1.8;
}

.faq-list {
  display: grid;
  gap: 16px;
}

.faq-item {
  background: white;
  border-radius: 18px;
  padding: 22px 24px;
  box-shadow: 0 12px 24px rgba(18, 32, 54, 0.06);
}

.faq-item h3 {
  margin-bottom: 8px;
  color: #22324a;
}

.faq-item p {
  margin: 0;
  color: #54657b;
  line-height: 1.8;
}
</style>
