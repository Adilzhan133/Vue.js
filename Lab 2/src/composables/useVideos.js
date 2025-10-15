import { ref, computed, watch, onMounted } from 'vue'

export default function useVideos() {
  const videos = ref([])
  const loading = ref(true)
  const searchQuery = ref('')
  const totalLikes = ref(0)

  const addLike = () => totalLikes.value++

  const filteredVideos = computed(() => {
    return videos.value.filter(v =>
      v.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      v.channel.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })

  const sortByViews = () => {
    videos.value.sort((a, b) => b.views - a.views)
  }

  onMounted(() => {
    setTimeout(() => {
      videos.value = [
        { id: 1, title: 'Vue 3 Tutorial', channel: 'Vue Mastery', views: 24000, thumbnail: 'https://i.ytimg.com/vi/FXpIoQ_rT_c/hqdefault.jpg' },
        { id: 2, title: 'Composition API Explained', channel: 'Academind', views: 35000, thumbnail: 'https://i.ytimg.com/vi/bwItFdPt-6M/hqdefault.jpg' },
        { id: 3, title: 'Learn Vue in 1 Hour', channel: 'Programming with Mosh', views: 50000, thumbnail: 'https://i.ytimg.com/vi/4deVCNJq3qc/hqdefault.jpg' }
      ]
      loading.value = false
    }, 1000)
  })

  watch(searchQuery, (newValue) => {
    console.log('Search updated to:', newValue)
  })

  return { videos, filteredVideos, searchQuery, totalLikes, addLike, loading, sortByViews }
}
