<template>
  <div>
    <button @click="testAPI" :disabled="loading">
      {{ loading ? "通信中..." : "ApiTest" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { apiClient } from "@/utils/Axios.util";

const loading = ref(false);
const result = ref("");
const error = ref("");

const testAPI = async () => {
  loading.value = true;
  error.value = "";
  result.value = "";

  try {
    // JSONPlaceholderの適当なAPIを叩く
    const response = await apiClient.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    result.value = JSON.stringify(response.data, null, 2);
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.result {
  margin-top: 20px;
  padding: 15px;
  background: #f0f8ff;
  border-radius: 5px;
}

.error {
  margin-top: 20px;
  padding: 15px;
  background: #ffe6e6;
  color: #d63031;
  border-radius: 5px;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
