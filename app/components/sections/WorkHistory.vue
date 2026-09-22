<template>
    <section
        v-motion="{ initial: { opacity: 0, y: 60 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } } }"
        class="max-w-3xl mx-auto px-4 py-16">
        <h2 class="text-2xl font-bold text-neutral-900 mb-6">Work History</h2>
        <div class="flex flex-col gap-4">
            <UiTimelineCard v-for="(job, index) in workHistory" :key="job.company + job.period" :title="job.company"
                :subtitle="`${job.role} · ${job.location} · ${job.type}`" :period="job.period"
                :description="job.description" :tags="job.tags"
                v-motion="{ initial: { opacity: 0, y: 30 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 450, delay: index * 120, ease: 'easeOut' } } }" />
        </div>
    </section>
</template>

<script setup lang="ts">
import workHistory from '~/content/work-history.json';
</script>