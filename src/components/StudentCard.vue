<template>
  <div class="card">
    <div>
      <div class="name">{{ name }}</div>
      <div class="age">Age: {{ age }}</div>
    </div>

    <button class="delete-btn" @click="$emit('delete')">
      ✖
    </button>
  </div>
</template>

<script setup>
defineProps(["name", "age"]);
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
}

.name {
  font-size: 16px;
  font-weight: 600;
}

.age {
  margin-top: 4px;
  font-size: 14px;
  color: #555;
}

.delete-btn {
  font-size: 18px;
  color: #d11a2a;
  background: none;
  border: none;
  cursor: pointer;
}

.delete-btn:hover {
  opacity: 0.7;
}
</style>
