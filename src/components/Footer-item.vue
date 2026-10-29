<script setup>
import 'primeicons/primeicons.css';

const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer-area">
    <div class="footer-container">
      <div class="contact-footer">
        <h4 class="titile-footer">Contacto</h4>
        <div class="footer-text">
          <div>hello@secondhand.com</div>
          <div>+51 999 999 999</div>
        </div>
      </div>

      <div class="social-media">
        <h4 class="titile-footer">Redes Sociales</h4>
        <div class="social-media2">
          <div><a href="#" aria-label="Facebook"><i class="pi pi-facebook"></i></a></div>
          <div><a href="#" aria-label="Instagram"><i class="pi pi-instagram"></i></a></div>
          <div><a href="#" aria-label="YouTube"><i class="pi pi-youtube"></i></a></div>
          <div><a href="#" aria-label="Twitter"><i class="pi pi-twitter"></i></a></div>
        </div>
      </div>

      <div class="footer-links">
        <h4 class="titile-footer">Legal</h4>
        <div class="links-column">
          <router-link to="/Privacy-Policy">Privacidad</router-link>
          <router-link to="/Terms-of-Use">Términos</router-link>
          <router-link to="/FAQ">FAQ</router-link>
        </div>
      </div>
    </div>

    <div class="footer-bottom">© {{ year }} Second Hand. Todos los derechos reservados.</div>
  </footer>
</template>

<style>
.footer-area {
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: white;
  margin-top: 100px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.titile-footer {
  font-size: 1.05rem;
  margin-bottom: 16px;
  position: relative;
  font-weight: 700;
}

.titile-footer::after {
  content: '';
  width: 42px;
  height: 3px;
  background: #7cc6ff;
  position: absolute;
  bottom: -8px;
  left: 0;
  border-radius: 6px;
}

.footer-text,
.links-column {
  color: #dfe7f2;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.social-media2 {
  display: flex;
  gap: 18px;
  margin-top: 8px;
}

.social-media2 a,
.social-media2 i {
  font-size: 1.6rem;
  color: #dfe7f2;
  transition: transform 0.2s ease, color 0.2s ease;
}

.social-media2 a:hover i {
  color: white;
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  padding: 18px 20px;
  font-size: 0.85rem;
  color: #cbd5e1;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .titile-footer::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .social-media2 {
    justify-content: center;
  }
}
</style>
