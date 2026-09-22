<template>
    <span class="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
        {{ label }}
    </span>
</template>

<script setup lang="ts">
defineProps<{ label: string; }>();
</script>