import { useHead } from '@vueuse/head';

const BASE_URL = 'https://secondhand.example';
const DEFAULT_TITLE = 'Second Hand | Segunda oportunidad para tu hogar';
const DEFAULT_DESCRIPTION = 'Descubre productos de calidad reutilizados y ofertas especializadas para ahorrar sin sacrificar estilo.';
const DEFAULT_IMAGE = 'https://secondhand.example/og-default.jpg';

export function useHomeSeo() {
  const seoData = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    image: DEFAULT_IMAGE,
    url: BASE_URL,
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Second Hand',
    description: DEFAULT_DESCRIPTION,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: ['https://www.instagram.com', 'https://www.facebook.com'],
  };

  useHead(() => ({
    title: seoData.title,
    meta: [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: 'second hand, productos reutilizados, ofertas, ecommerce, segunda oportunidad' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:image', content: seoData.image },
      { property: 'og:url', content: seoData.url },
      { property: 'og:locale', content: 'es_PE' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'canonical', href: seoData.url }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(organizationJsonLd),
      },
    ],
  }));
}

export function useStaticPageSeo(title, description, page) {
  const pageTitle = `${title} | Second Hand`;
  const pageUrl = `${BASE_URL}/${page}`;

  useHead(() => ({
    title: pageTitle,
    meta: [
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: DEFAULT_IMAGE },
      { property: 'og:url', content: pageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'canonical', href: pageUrl }],
  }));
}

export function useDefaultSeo() {
  useHead(() => ({
    title: DEFAULT_TITLE,
    meta: [
      { name: 'description', content: DEFAULT_DESCRIPTION },
      { property: 'og:title', content: DEFAULT_TITLE },
      { property: 'og:description', content: DEFAULT_DESCRIPTION },
      { property: 'og:image', content: DEFAULT_IMAGE },
    ],
  }));
}
