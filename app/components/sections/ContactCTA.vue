<template>
    <section
        v-motion="{ initial: { opacity: 0, y: 60 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } } }"
        class="bg-neutral-900 text-white text-center px-4 py-20 rounded-3xl max-w-3xl mx-auto my-16">
        <h2 class="text-2xl font-bold">Let's Talk</h2>
        <p class="mt-3 text-neutral-300 max-w-md mx-auto">
            Open to new opportunities, collaborations, or just a chat about building scalable web apps and clean
            architecture.
        </p>

        <a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent('Let\'s talk')}`"
            target="_blank" rel="noopener"
            class="inline-block mt-6 px-5 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-semibold">
            Get In Touch
        </a>
    </section>
</template>

<script setup lang="ts">
import profile from '~/content/profile.json';
</script>