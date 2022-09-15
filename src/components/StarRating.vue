<script setup>
    const props = defineProps(['ratings'])
</script>

<template>
    <div id="star-ratings" class="d-flex align-items-center">
        <template v-if="ratings > 5">
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
        </template>
        <template v-else-if="ratings > 4">
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star_border</span>
        </template>
        <template v-else-if="ratings > 3">
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star_border</span>
            <span class="material-icons-outlined">star_border</span>
        </template>
        <template v-else-if="ratings > 2">
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star_border</span>
            <span class="material-icons-outlined">star_border</span>
            <span class="material-icons-outlined">star_border</span>
        </template>
        <template v-else>
            <span class="material-icons-outlined">star</span>
            <span class="material-icons-outlined">star_border</span>
            <span class="material-icons-outlined">star_border</span>
            <span class="material-icons-outlined">star_border</span>
            <span class="material-icons-outlined">star_border</span>
        </template>
    </div>
</template>