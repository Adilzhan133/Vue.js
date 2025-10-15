<template>
  <div :class="['app', theme]">
    <h1>🎬 Mini YouTube Dashboard</h1>

    <button @click="toggleTheme" class="theme-btn">
      Toggle {{ theme === 'light' ? 'Dark' : 'Light' }} Theme
    </button>

    <input v-model="searchQuery" placeholder="Search videos..." />

    <button @click="sortByViews">Sort by Views</button>

    <p v-if="loading">Loading videos…</p>
    <p v-else-if="filteredVideos.length === 0">No videos found.</p>
    <p v-else>{{ filteredVideos.length }} videos found</p>

    <div v-if="!loading" class="video-list">
      <VideoCard
        v-for="video in filteredVideos"
        :key="video.id"
        :title="video.title"
        :channel="video.channel"
        :views="video.views"
        :thumbnail="video.thumbnail"
        @liked="addLike"
      />
    </div>

    <p>Total Likes: {{ totalLikes }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import VideoCard from './components/VideoCard.vue'
import useVideos from './composables/useVideos'

const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const { videos, filteredVideos, searchQuery, totalLikes, addLike, loading, sortByViews } = useVideos()
</script>
