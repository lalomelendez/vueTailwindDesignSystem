<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Buttons</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Primary Button -->
      <button
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Primary Button
      </button>

      <!-- Secondary Button -->
      <button
        class="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
      >
        Secondary Button
      </button>

      <!-- Success Button -->
      <button
        class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
      >
        Success Button
      </button>

      <!-- Danger Button -->
      <button
        class="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
      >
        Danger Button
      </button>

      <!-- Warning Button -->
      <button
        class="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700"
      >
        Warning Button
      </button>

      <!-- Info Button -->
      <button
        class="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-700"
      >
        Info Button
      </button>

      <!-- Light Button -->
      <button
        class="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-300"
      >
        Light Button
      </button>

      <!-- Dark Button -->
      <button
        class="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-900"
      >
        Dark Button
      </button>

      <!-- Outline Buttons -->
      <button
        class="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
      >
        Outline Primary
      </button>
      <button
        class="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded hover:bg-gray-500 hover:text-white"
      >
        Outline Secondary
      </button>

      <!-- Disabled Button -->
      <button
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
        disabled
      >
        Disabled Button
      </button>

      <!-- Button with Icon -->
      <button
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center hover:bg-blue-700"
      >
        <svg
          class="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </svg>
        Button with Icon
      </button>

      <!-- Rounded Full Button -->
      <button
        class="bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700"
      >
        Rounded Full Button
      </button>

      <!-- Pill-Shaped Button -->
      <button
        class="bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-700"
      >
        Pill-Shaped Button
      </button>

      <!-- Square Button -->
      <button
        class="bg-indigo-500 text-white font-bold py-2 px-2 hover:bg-indigo-700"
      >
        Square Button
      </button>

      <!-- Button with Shadow -->
      <button
        class="bg-orange-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-orange-700"
      >
        Button with Shadow
      </button>

      <!-- Button with Gradient -->
      <button
        class="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded hover:from-green-500 hover:to-blue-600"
      >
        Button with Gradient
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
};
</script>

<style scoped></style>
