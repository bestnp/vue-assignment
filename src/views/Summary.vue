<template>
  <div class="page-container">
    <h2>📋 Summary</h2>
    <p>ผู้ใช้: {{ store.username || "ยังไม่ได้กำหนดชื่อ" }}</p>
    <h3>รายการโปรด ({{ store.favorites.length }})</h3>
    <!-- TODO: ดึง username และ favorites.length จาก store -->
    <p>ชื่อผู้ใช้: {{ store.username || "-" }}</p>
    <p>จำนวนคอร์สที่ถูกใจ: {{ store.favorites.length }}</p>
    <RouterLink to="/">◀️ กลับไปหน้า Courses</RouterLink>
  </div>
</template>

<script setup>
import { useFavoriteStore } from "../stores/favorite";
import { RouterLink } from "vue-router";
const store = useFavoriteStore();
// TODO: import { useFavoriteStore }
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
