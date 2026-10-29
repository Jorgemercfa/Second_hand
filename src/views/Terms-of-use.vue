<template>
  <div class="legal-page">
    <header>
      <Navbar />
    </header>

    <main class="legal-container">
      <div class="legal-card">
        <div class="eyebrow">Términos</div>
        <h1>Términos de Uso</h1>
        <p>
          Al usar Second Hand aceptas cumplir con las condiciones generales de navegación, compra,
          y uso de la plataforma. Estos términos se actualizan de manera periódica para mejorar la
          experiencia y garantizar la seguridad del servicio.
        </p>

        <h2>1. Uso de la plataforma</h2>
        <p>
          La plataforma está diseñada para facilitar la compra de productos en buen estado, siempre
          bajo condiciones legales, transparentes y responsables por parte de la empresa y sus usuarios.
        </p>

        <h2>2. Compras y pagos</h2>
        <p>
          Los precios, promociones y condiciones de entrega indicadas en el sitio son informativas y
          pueden estar sujetas a cambios sin previo aviso. El usuario debe revisar toda la información
          antes de confirmar la compra.
        </p>

        <h2>3. Responsabilidad</h2>
        <p>
          Second Hand actúa como canal de presentación de productos y servicios, no como responsable del
          estado físico de cada artículo fuera de lo informado en la publicación.
        </p>

        <h2>4. Propiedad intelectual</h2>
        <p>
          El contenido visual, textual y gráfico de la plataforma está protegido por derechos de autor
          y no puede ser reutilizado sin autorización expresa.
        </p>

        <h2>5. Modificaciones</h2>
        <p>
          Nos reservamos el derecho a actualizar estos términos en cualquier momento con el fin de
          mejorar la operación, la seguridad y la experiencia del usuario.
        </p>
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
  'Términos de Uso',
  'Conoce las condiciones generales de uso de Second Hand y el funcionamiento de la plataforma.',
  'Terms-of-Use',
);
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f7f8fc 0%, #eef5ff 100%);
}

.legal-container {
  width: min(980px, 90%);
  margin: 0 auto;
  padding: 80px 0 60px;
}

.legal-card {
  background: white;
  border-radius: 26px;
  box-shadow: 0 14px 30px rgba(18, 32, 54, 0.08);
  padding: 36px 28px;
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

.legal-card h1 {
  font-size: clamp(2.2rem, 4vw, 3rem);
  margin-bottom: 18px;
  color: #1f2d3d;
}

.legal-card h2 {
  margin-top: 22px;
  margin-bottom: 8px;
  color: #1f2d3d;
  font-size: 1.12rem;
}

.legal-card p {
  margin: 0;
  color: #53657a;
  line-height: 1.8;
}
</style>
