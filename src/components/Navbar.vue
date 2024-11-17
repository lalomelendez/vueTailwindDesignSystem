<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-lg font-bold">My Project</div>
      <ul class="flex space-x-4">
        <li>
          <router-link
            to="/"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/buttons"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Buttons</router-link
          >
        </li>
        <li>
          <router-link
            to="/cards"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Cards</router-link
          >
        </li>
        <li>
          <router-link
            to="/forms"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Forms</router-link
          >
        </li>
        <li>
          <router-link
            to="/messages-alerts"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Messages/Alerts</router-link
          >
        </li>
        <li>
          <router-link
            to="/photo-gallery"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Photo Gallery</router-link
          >
        </li>
        <li>
          <router-link
            to="/modals"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Modals</router-link
          >
        </li>
        <li>
          <router-link
            to="/tabs"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Tabs</router-link
          >
        </li>
        <li>
          <router-link
            to="/dropdowns"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Dropdowns</router-link
          >
        </li>
        <li>
          <router-link
            to="/tooltips"
            class="text-white hover:text-gray-300"
            active-class="text-yellow-500"
            >Tooltips</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
