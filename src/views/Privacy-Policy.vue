<template>
  <div class="legal-page">
    <header>
      <Navbar />
    </header>

    <main class="legal-container">
      <div class="legal-card">
        <div class="eyebrow">Información legal</div>
        <h1>Política de Privacidad</h1>
        <p>
          En Second Hand valoramos tu privacidad y nos comprometemos a proteger la información personal
          que compartes al navegar, registrarte o realizar compras en nuestra plataforma.
        </p>

        <h2>1. Información que recopilamos</h2>
        <p>
          Podemos recopilar datos como nombre, correo electrónico, información de contacto, historial de
          compras, preferencias y contenido relacionado con tu cuenta.
        </p>

        <h2>2. Uso de la información</h2>
        <p>
          Utilizamos tus datos para gestionar pedidos, personalizar la experiencia, prevenir fraudes,
          mejorar nuestros servicios y comunicar promociones relevantes cuando tú lo autorices.
        </p>

        <h2>3. Protección de datos</h2>
        <p>
          Adoptamos medidas razonables para proteger la información frente a accesos no autorizados,
          alteraciones, revelaciones o destrucción.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Utilizamos cookies para mejorar la navegación, recordar sesiones y analizar el uso de la
          plataforma con fines operativos y de mejora.
        </p>

        <h2>5. Derechos del usuario</h2>
        <p>
          Puedes solicitar acceso, corrección o eliminación de tus datos personales, así como revocar
          el consentimiento para ciertos usos comerciales en cualquier momento.
        </p>

        <h2>6. Contacto</h2>
        <p>
          Si tienes dudas sobre esta política, puedes escribirnos al correo de contacto que aparece en
          nuestra plataforma o a través de nuestras redes sociales.
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
  'Política de Privacidad',
  'Consulta cómo Second Hand recopila, usa y protege tu información personal en la plataforma.',
  'Privacy-Policy',
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
