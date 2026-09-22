<template>
    <section
        v-motion="{ initial: { opacity: 0, y: 60 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } } }"
        class="max-w-3xl mx-auto px-4 py-16">
        <h2 class="text-2xl font-bold text-neutral-900 mb-6">Skill Set</h2>
        <div class="flex flex-col gap-5">
            <div v-for="(items, group, index) in skills" :key="group"
                v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 400, delay: index * 100, ease: 'easeOut' } } }">
                <h3 class="text-sm font-semibold text-neutral-500 mb-2">{{ group }}</h3>
                <div class="flex flex-wrap gap-2">
                    <UiPill v-for="item in items" :key="item" :label="item" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import skills from '~/content/skills.json';
</script>