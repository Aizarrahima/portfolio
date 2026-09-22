<template>
    <div class="p-5 rounded-2xl border border-neutral-200 flex flex-col gap-3">
        <div class="flex items-baseline justify-between gap-3">
            <h3 class="font-semibold text-neutral-900">{{ name }}</h3>
            <span class="text-sm text-neutral-500">{{ period }}</span>
        </div>
        <p class="text-sm text-neutral-600 leading-relaxed">{{ description }}</p>
        <div class="flex flex-wrap gap-2">
            <UiPill v-for="tech in stack" :key="tech" :label="tech" />
        </div>

        <a v-if="link" :href="link" target="_blank" rel="noopener"
            class="mt-1 text-sm font-medium text-neutral-900 underline underline-offset-2">
            View project →
        </a>
        <span v-else class="mt-1 text-xs text-neutral-400 italic">Internal project — details on request</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name: string;
    period: string;
    description: string;
    stack: string[];
    link?: string | null;
}>();
</script>