<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Button Styles</h1>
    <div class="space-y-4">
      <!-- Primary Button -->
      <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Primary Button
      </button>

      <!-- Secondary Button -->
      <button class="bg-gray-500 text-white font-bold py-2 px-4 rounded">
        Secondary Button
      </button>

      <!-- Success Button -->
      <button class="bg-green-500 text-white font-bold py-2 px-4 rounded">
        Success Button
      </button>

      <!-- Danger Button -->
      <button class="bg-red-500 text-white font-bold py-2 px-4 rounded">
        Danger Button
      </button>

      <!-- Warning Button -->
      <button class="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
        Warning Button
      </button>

      <!-- Info Button -->
      <button class="bg-teal-500 text-white font-bold py-2 px-4 rounded">
        Info Button
      </button>

      <!-- Light Button -->
      <button class="bg-gray-200 text-black font-bold py-2 px-4 rounded">
        Light Button
      </button>

      <!-- Dark Button -->
      <button class="bg-gray-800 text-white font-bold py-2 px-4 rounded">
        Dark Button
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonStyles",
};
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
button:hover {
  opacity: 0.8;
}
</style>
