<template>
  <div class="dashboard-container">
    <div class="dashboard-card">
      <h1 class="title">🎓 Student Dashboard</h1>

      <button class="add-btn" @click="openForm = !openForm">
        Add Student
      </button>

      <AddStudentForm v-if="openForm" @add="addStudent" />

      <StudentList
        :students="students"
        @delete="deleteStudent"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddStudentForm from "../components/AddStudentForm.vue";
import StudentList from "../components/StudentList.vue";

const openForm = ref(false);

const students = ref([
  { name: "Alice Johnson", age: 21 },
  { name: "Michael Smith", age: 22 },
]);

function addStudent(student) {
  students.value.push(student);
  openForm.value = false;
}

function deleteStudent(index) {
  students.value.splice(index, 1);
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.dashboard-card {
  width: 650px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

.add-btn {
  background-color: #4f46e5;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
}

.add-btn:hover {
  background-color: #4338ca;
}
</style>
