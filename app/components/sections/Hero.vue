<template>
    <section class="relative bg-dot-grid">
        <div class="absolute inset-0 pointer-events-none"
            style="background: radial-gradient(ellipse 70% 60% at 50% 30%, transparent 40%, white 100%)"></div>

        <div v-motion="{ initial: { opacity: 0, y: 60 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } } }"
            class="relative max-w-3xl mx-auto px-4 pt-20 pb-12 text-center">
            <div class="relative inline-block">
                <img src="/profile.jpeg" alt="Aizar Rahima Suprayitno"
                    class="w-40 h-40 rounded-full object-cover ring-4 ring-white shadow-lg" />

                <!-- Floating tech badges -->
                <div v-for="(badge, index) in badges" :key="badge.icon" :class="badge.position"
                    v-motion="{ initial: { opacity: 0, scale: 0.6 }, visibleOnce: { opacity: 1, scale: 1, transition: { duration: 400, delay: 400 + index * 120, ease: 'easeOut' } } }"
                    class="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-md border border-neutral-200">
                    <Icon :icon="badge.icon" class="w-4 h-4" />
                    <span class="text-xs font-medium text-neutral-700">{{ badge.label }}</span>
                </div>
            </div>

            <div class="mt-6 flex justify-center gap-2 text-xs font-medium text-neutral-500">
                <span>Full Stack Developer</span>
            </div>

            <h1 class="mt-3 text-4xl font-bold text-neutral-900">
                {{ profile.name }}
            </h1>

            <p class="mt-4 text-neutral-600 max-w-xl mx-auto leading-relaxed">
                {{ profile.tagline }}
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import profile from '~/content/profile.json';

const badges = [
    { icon: 'logos:laravel', label: 'Laravel', position: '-top-4 -left-20' },
    { icon: 'logos:vue', label: 'Vue', position: 'top-8 -right-24' },
    { icon: 'logos:react', label: 'React', position: 'bottom-8 -left-24' },
    { icon: 'logos:nodejs-icon', label: 'Node.js', position: '-bottom-4 -right-20' },
];
</script>