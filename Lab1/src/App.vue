<script setup>
import { ref, computed } from 'vue'

const tasks = ref([])

const newTask = ref('')
const newCategory = ref('General')
const newPriority = ref('Normal')

const addTask = () => {
  if (!newTask.value.trim()) return
  tasks.value.push({
    id: Date.now(),
    text: newTask.value,
    category: newCategory.value,
    priority: newPriority.value,
    completed: false
  })
  newTask.value = ''
}

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

const toggleComplete = (id) => {
  const task = tasks.value.find(t => t.id === id)
  if (task) task.completed = !task.completed
}

const incompleteCount = computed(() =>
  tasks.value.filter(t => !t.completed).length
)

const filter = ref('all')
const filteredTasks = computed(() => {
  if (filter.value === 'all') return tasks.value
  if (filter.value === 'incomplete') return tasks.value.filter(t => !t.completed)
  return tasks.value
})
</script>

<template>
  <div class="app">
    <h1>{{ "Vue 3 Task Manager" }}</h1>

    <div class="form">
      <input v-model="newTask" placeholder="Enter task" />
      <select v-model="newCategory">
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
      </select>
      <select v-model="newPriority">
        <option>Low</option>
        <option selected>Normal</option>
        <option>High</option>
      </select>
      <button @click="addTask">Add Task</button>
    </div>

    <p>Incomplete tasks: {{ incompleteCount }}</p>

    <label>
      Filter:
      <select v-model="filter">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </label>

    <p v-if="tasks.length === 0">No tasks</p>

    <ul>
      <li
        v-for="task in filteredTasks"
        :key="task.id"
        :class="{ completed: task.completed }"
      >
        <span @click="toggleComplete(task.id)" style="cursor: pointer">
          {{ task.text }} ({{ task.category }} - {{ task.priority }})
        </span>
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.app {
  max-width: 500px;
  margin: 0 auto;
  font-family: sans-serif;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.form {
  margin-bottom: 1em;
}
</style>
