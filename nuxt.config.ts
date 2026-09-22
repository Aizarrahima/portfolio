import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  ssr: true,
  nitro: { preset: 'vercel-static' }, // ganti sesuai target hosting
  vite: { plugins: [tailwindcss()] },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/motion/nuxt'],
  app: {
    head: {
      title: 'Aizar Rahima Suprayitno — Full Stack Developer',
      meta: [
        { name: 'description', content: 'Full Stack Developer specializing in Laravel, Vue.js, Next.js, and microservice architecture. 2+ years building production systems.' }
      ]
    }
  }
});