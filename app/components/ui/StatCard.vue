<template>
    <div ref="el" class="p-5 rounded-2xl border border-neutral-200">
        <p class="text-3xl font-bold text-neutral-900">{{ display }}{{ suffix }}</p>
        <p class="mt-1 text-sm font-medium text-neutral-800">{{ label }}</p>
        <p class="mt-1 text-xs text-neutral-500 leading-relaxed">{{ note }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    value: number;
    suffix?: string;
    label: string;
    note?: string;
}>();

const el = ref<HTMLElement | null>(null);
const display = ref(0);
let animated = false;

function animate() {
    if (animated) return;
    animated = true;
    const duration = 1000;
    const start = performance.now();
    function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        display.value = Math.round(props.value * progress);
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => { if (entry?.isIntersecting) animate(); },
        { threshold: 0.4 }
    );
    if (el.value) observer.observe(el.value);
    onUnmounted(() => observer.disconnect());
});
</script>