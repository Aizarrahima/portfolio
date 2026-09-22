<template>
    <header class="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <span class="font-bold text-neutral-900">{{ profile.name.split(' ')[0] }}</span>

        <a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent('Let\'s talk')}`"
            target="_blank" rel="noopener" class="px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium">
            Get In Touch
        </a>
    </header>
</template>

<script setup lang="ts">
import profile from '~/content/profile.json';
</script>