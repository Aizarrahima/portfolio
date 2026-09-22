<template>
    <section
        v-motion="{ initial: { opacity: 0, y: 60 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } } }"
        class="max-w-3xl mx-auto px-4 py-16">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <UiStatCard v-for="(stat, index) in stats" :key="stat.label" v-bind="stat"
                v-motion="{ initial: { opacity: 0, y: 30 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 450, delay: index * 90, ease: 'easeOut' } } }" />
        </div>
    </section>
</template>

<script setup lang="ts">
import stats from '~/content/stats.json';
</script>