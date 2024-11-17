<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">
        UI Components
      </h1>
      <nav class="bg-white shadow-md rounded-lg p-6">
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li>
            <router-link
              to="/buttons"
              class="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Buttons
            </router-link>
          </li>
          <li>
            <router-link
              to="/cards"
              class="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Cards
            </router-link>
          </li>
          <li>
            <router-link
              to="/forms"
              class="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Forms
            </router-link>
          </li>
          <li>
            <router-link
              to="/messages-alerts"
              class="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Messages/Alerts
            </router-link>
          </li>
          <li>
            <router-link
              to="/photo-gallery"
              class="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Photo Gallery
            </router-link>
          </li>
          <li>
            <router-link
              to="/modals"
              class="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Modals
            </router-link>
          </li>
          <li>
            <router-link
              to="/tabs"
              class="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Tabs
            </router-link>
          </li>
          <li>
            <router-link
              to="/dropdowns"
              class="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Dropdowns
            </router-link>
          </li>
          <li>
            <router-link
              to="/tooltips"
              class="block text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              Tooltips
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped></style>
