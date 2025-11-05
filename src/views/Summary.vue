<template>
  <div class="page-container">
    <h2>📋 Summary</h2>

    <div v-if="!store.username || store.favorites.length === 0">
      <p>ยังไม่มีข้อมูลการเลือกคอร์ส</p>
    </div>

    <div v-else>
      <p>ชื่อผู้ใช้: {{ store.username }}</p>
      <p>จำนวนคอร์สที่ถูกใจ: {{ store.favorites.length }}</p>
    </div>

    <RouterLink to="/">◀️ กลับไปหน้า Course</RouterLink>
  </div>
</template>

<script setup>
import { useFavoriteStore } from "../stores/favorite";
import { RouterLink } from "vue-router";
const store = useFavoriteStore();
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
