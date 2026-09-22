<template>
    <div class="flex gap-4 p-5 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors">
        <div class="flex-1 min-w-0">
            <div class="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 class="font-semibold text-neutral-900">{{ title }}</h3>
                <span class="text-sm text-neutral-500 whitespace-nowrap">{{ period }}</span>
            </div>
            <p v-if="subtitle" class="text-sm text-neutral-600">{{ subtitle }}</p>
            <p v-if="description" class="mt-2 text-sm text-neutral-600 leading-relaxed">{{ description }}</p>
            <div v-if="tags?.length" class="mt-3 flex flex-wrap gap-2">
                <UiPill v-for="tag in tags" :key="tag" :label="tag" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    subtitle?: string;
    period: string;
    description?: string;
    tags?: string[];
}>();
</script>