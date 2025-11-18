<template>
  <form class="form" @submit.prevent="submit">
    <input
      v-model="name"
      type="text"
      placeholder="Student name"
      required
    />
    <input
      v-model="age"
      type="number"
      placeholder="Age"
      required
    />
    <button class="submit-btn">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const age = ref("");

const emit = defineEmits(["add"]);

function submit() {
  emit("add", {
    name: name.value,
    age: Number(age.value),
  });

  name.value = "";
  age.value = "";
}
</script>

<style scoped>
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  flex: 1;
}

.submit-btn {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #4338ca;
}
</style>
