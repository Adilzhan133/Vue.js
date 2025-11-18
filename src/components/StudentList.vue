<template>
  <div class="list">
    <StudentCard
      v-for="(student, index) in students"
      :key="index"
      :name="student.name"
      :age="student.age"
      @delete="emit('delete', index)"
    />
  </div>
</template>

<script setup>
import StudentCard from "./StudentCard.vue";

defineProps(["students"]);
const emit = defineEmits(["delete"]);
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
