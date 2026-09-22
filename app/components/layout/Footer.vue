<template>
    <footer
        class="max-w-3xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <span>&copy; {{ new Date().getFullYear() }} {{ profile.name }}</span>
        <div class="flex gap-4">
            <a :href="profile.links.github" target="_blank" rel="noopener" class="hover:text-neutral-900">GitHub</a>
            <a :href="profile.links.linkedin" target="_blank" rel="noopener" class="hover:text-neutral-900">LinkedIn</a>
            <a :href="profile.links.medium" target="_blank" rel="noopener" class="hover:text-neutral-900">Medium</a>
        </div>
    </footer>
</template>

<script setup lang="ts">
import profile from '~/content/profile.json';
</script>