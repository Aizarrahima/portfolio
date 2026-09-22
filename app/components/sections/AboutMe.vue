<template>
    <section
        v-motion="{ initial: { opacity: 0, y: 60 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } } }"
        class="max-w-3xl mx-auto px-4 py-16 grid sm:grid-cols-[160px_1fr] gap-6">
        <h2 class="text-sm font-semibold text-neutral-500 uppercase tracking-wide">About Me</h2>
        <p class="text-neutral-700 leading-relaxed">{{ profile.summary }}</p>
    </section>
</template>

<script setup lang="ts">
import profile from '~/content/profile.json';
</script>