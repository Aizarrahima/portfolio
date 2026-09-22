<template>
    <section
        v-motion="{ initial: { opacity: 0, y: 60 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } } }"
        class="max-w-3xl mx-auto px-4 py-16">
        <h2 class="text-2xl font-bold text-neutral-900 mb-6">Education</h2>
        <div class="flex flex-col gap-4">
            <UiTimelineCard v-for="(edu, index) in education" :key="edu.institution" :title="edu.institution"
                :subtitle="edu.program" :period="edu.period"
                v-motion="{ initial: { opacity: 0, y: 30 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 450, delay: index * 120, ease: 'easeOut' } } }" />
        </div>
    </section>
</template>

<script setup lang="ts">
import education from '~/content/education.json';
</script>