<template>
  <div class="video-card">
    <img :src="thumbnail" :alt="title" width="100%" />
    <h3>{{ title }}</h3>
    <p>{{ channel }}</p>
    <p>{{ views }} views</p>
    <button class="like-btn" @click="$emit('liked')">❤ Like</button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  channel: String,
  views: Number,
  thumbnail: String
})
</script>
