<template>
    <section
        v-motion="{ initial: { opacity: 0, y: 60 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } } }"
        class="max-w-3xl mx-auto px-4 py-16">
        <h2 class="text-2xl font-bold text-neutral-900 mb-2">Selected Work</h2>
        <p class="text-sm text-neutral-500 mb-6">Team and side projects I've contributed to end-to-end.</p>
        <div class="grid sm:grid-cols-2 gap-4">
            <UiProjectCard v-for="(project, index) in projects" :key="project.name" v-bind="project"
                v-motion="{ initial: { opacity: 0, y: 30 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 450, delay: index * 120, ease: 'easeOut' } } }" />
        </div>
    </section>
</template>

<script setup lang="ts">
import projects from '~/content/projects.json';
</script>