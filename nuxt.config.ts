import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  ssr: true,
  nitro: { preset: 'vercel-static' },
  vite: { plugins: [tailwindcss()] },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/motion/nuxt'],
  app: {
    head: {
      title: 'Aizar Rahima Suprayitno — Full Stack Developer',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      meta: [
        { name: 'description', content: 'Full Stack Developer specializing in Laravel, Vue.js, Next.js, and microservice architecture. 3+ years building production systems.' },

        // Open Graph (LinkedIn, WhatsApp, Facebook)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Aizar Rahima Suprayitno — Full Stack Developer' },
        { property: 'og:description', content: 'Full Stack Developer specializing in Laravel, Vue.js, Next.js, and microservice architecture.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:url', content: 'https://your-domain.com' },

        // Twitter/X card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Aizar Rahima Suprayitno — Full Stack Developer' },
        { name: 'twitter:description', content: 'Full Stack Developer specializing in Laravel, Vue.js, Next.js, and microservice architecture.' },
        { name: 'twitter:image', content: '/og-image.png' },
      ]
    }
  }
});