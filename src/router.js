import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home-item.vue';
import About from './views/About-item.vue';
import products from './views/Product-item.vue';
import Contact from './views/Contact-item.vue';
import productsDetails from './components/Component-coupons-item.vue';
import Promotions from './views/Promotions-item.vue';
import Reviews from './views/Reviews-item.vue';
import PrivacyPolicy from './views/Privacy-Policy.vue';
import TermsOfUse from './views/Terms-of-use.vue';
import FAQ from './views/FAQ-item.vue';

import SignIn from './views/Sign-in.vue';
import SignUp from './views/Sign-up.vue';
import ForgetPassword from './views/Forget-Password.vue';
import Profile from './views/Profile-item.vue';

import Cart from './views/Cart-item.vue';
import Checkout from './views/Checkout-item.vue';
import OrderConfirmation from './views/OrderConfirmation-item.vue';

import SignInCompany from './views/views_companies/Sign-in-companies.vue';
import SignUpCompany from './views/views_companies/Sign-up-companies.vue';
import ForgetPasswordCompany from './views/views_companies/Forget-password-companies.vue';
import HomeCompanies from './views/views_companies/Home-companies.vue';
import Createproducts from './views/views_companies/Create-product-item.vue';
import Companyproducts from './views/views_companies/Company-product-item.vue';

import { useSession } from './auth/session';
import { useSessionCompany } from './auth/session_companies';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Second Hand | Inicio' },
  },
  {
    path: '/About-item',
    name: 'About',
    component: About,
    meta: { title: 'Nosotros | Second Hand' },
  },
  {
    path: '/Product-item',
    name: 'product',
    component: products,
    meta: { title: 'Productos | Second Hand' },
  },
  {
    path: '/Contact-item',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Ayuda | Second Hand' },
  },
  {
    path: '/Promotions-item',
    name: 'Promotions',
    component: Promotions,
    meta: { title: 'Promociones | Second Hand' },
  },
  {
    path: '/Reviews-item',
    name: 'Reviews',
    component: Reviews,
    meta: { title: 'Reseñas | Second Hand' },
  },
  {
    path: '/Privacy-Policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: { title: 'Política de Privacidad | Second Hand' },
  },
  {
    path: '/Terms-of-Use',
    name: 'TermsOfUse',
    component: TermsOfUse,
    meta: { title: 'Términos de Uso | Second Hand' },
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ,
    meta: { title: 'FAQ | Second Hand' },
  },
  { path: '/product/:id', name: 'productsDetails', component: productsDetails },

  { path: '/Sign-in', name: 'SignIn', component: SignIn },
  { path: '/Sign-up', name: 'SignUp', component: SignUp },
  {
    path: '/Forget-Password',
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
    meta: { requiresAuth: true },
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout,
    meta: { requiresAuth: true },
  },
  {
    path: '/OrderConfirmation',
    name: 'OrderConfirmation',
    component: OrderConfirmation,
    meta: { requiresAuth: true },
  },

  {
    path: '/Sign-in-companies',
    name: 'SignInCompany',
    component: SignInCompany,
  },
  {
    path: '/Sign-up-companies',
    name: 'SignUpCompany',
    component: SignUpCompany,
  },
  {
    path: '/Forget-Password-Companies',
    name: 'ForgetPasswordCompany',
    component: ForgetPasswordCompany,
  },
  {
    path: '/Home-companies',
    name: 'HomeCompanies',
    component: HomeCompanies,
    meta: { requiresCompanyAuth: true },
  },
  {
    path: '/Create-products',
    name: 'Createproducts',
    component: Createproducts,
    meta: { requiresCompanyAuth: true },
  },
  {
    path: '/Company-products',
    name: 'Companyproducts',
    component: Companyproducts,
    meta: { requiresCompanyAuth: true },
  },

  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: 'auto' };
  },
});

router.beforeEach((to) => {
  if (to.meta?.requiresAuth) {
    const { isAuthenticated } = useSession();
    if (!isAuthenticated.value) {
      return { name: 'SignIn' };
    }
  }

  if (to.meta?.requiresCompanyAuth) {
    const { isCompanyAuthenticated } = useSessionCompany();
    if (!isCompanyAuthenticated.value) {
      return { name: 'SignInCompany' };
    }
  }
});

router.afterEach(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
});

export default router;
