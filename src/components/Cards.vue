<template>
  <div class="p-8 flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-6">Cards</h1>

    <!-- Clickable Cards -->
    <div
      @click="handleClick"
      class="bg-blue-500 text-white p-6 rounded-lg hover:bg-blue-700 cursor-pointer my-4 w-96"
    >
      Clickable Card
    </div>
    <div
      @click="handleClick"
      class="bg-green-500 text-white p-6 rounded-lg hover:bg-green-700 cursor-pointer my-4 w-96"
    >
      Clickable Card
    </div>
    <div
      @click="handleClick"
      class="bg-red-500 text-white p-6 rounded-lg hover:bg-red-700 cursor-pointer my-4 w-96"
    >
      Clickable Card
    </div>

    <!-- Expandable Cards -->
    <div
      class="bg-yellow-500 text-white p-6 rounded-lg hover:bg-yellow-700 cursor-pointer my-4 w-96"
      @click="toggleExpand(1)"
    >
      <div>Expandable Card</div>
      <div v-if="expandedCard === 1">More content...</div>
    </div>
    <div
      class="bg-teal-500 text-white p-6 rounded-lg hover:bg-teal-700 cursor-pointer my-4 w-96"
      @click="toggleExpand(2)"
    >
      <div>Expandable Card</div>
      <div v-if="expandedCard === 2">More content...</div>
    </div>
    <div
      class="bg-purple-500 text-white p-6 rounded-lg hover:bg-purple-700 cursor-pointer my-4 w-96"
      @click="toggleExpand(3)"
    >
      <div>Expandable Card</div>
      <div v-if="expandedCard === 3">More content...</div>
    </div>

    <!-- Cards with Actions and Hover Effects -->
    <div
      class="bg-gray-500 text-white p-6 rounded-lg hover:shadow-lg cursor-pointer my-4 w-96"
    >
      <div>Card with Actions</div>
      <div class="mt-2">
        <button
          class="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
    <div
      class="bg-indigo-500 text-white p-6 rounded-lg hover:shadow-lg cursor-pointer my-4 w-96"
    >
      <div>Card with Actions</div>
      <div class="mt-2">
        <button
          class="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
    <div
      class="bg-pink-500 text-white p-6 rounded-lg hover:shadow-lg cursor-pointer my-4 w-96"
    >
      <div>Card with Actions</div>
      <div class="mt-2">
        <button
          class="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>

    <!-- Basic Cards -->
    <div class="bg-white shadow-md rounded-lg p-6 my-4 w-96">
      <h2 class="text-xl font-bold mb-2">Basic Card</h2>
      <p class="text-gray-700">
        This is a simple card with a title and description.
      </p>
    </div>

    <!-- Image Cards -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden my-4 w-96">
      <img
        src="https://via.placeholder.com/300x150"
        alt="Placeholder Image"
        class="w-full"
      />
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2">Image Card</h2>
        <p class="text-gray-700">
          This card includes an image with text below.
        </p>
      </div>
    </div>

    <!-- Profile Cards -->
    <div class="bg-white shadow-md rounded-lg p-6 flex items-center my-4 w-96">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile Image"
        class="w-24 h-24 rounded-full mr-4"
      />
      <div>
        <h2 class="text-xl font-bold">John Doe</h2>
        <p class="text-gray-700">Frontend Developer</p>
      </div>
    </div>

    <!-- Statistical Cards -->
    <div class="bg-white shadow-md rounded-lg p-6 my-4 w-96">
      <h2 class="text-xl font-bold mb-2">Statistics</h2>
      <div class="flex items-center">
        <div class="text-3xl font-bold text-blue-500 mr-4">75%</div>
        <div class="text-gray-700">Increase in sales</div>
      </div>
    </div>

    <!-- Product Cards -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden my-4 w-96">
      <img
        src="https://via.placeholder.com/300x150"
        alt="Product Image"
        class="w-full"
      />
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2">Product Name</h2>
        <p class="text-gray-700 mb-4">$29.99</p>
        <button
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Content Display Card -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden my-4 w-96">
      <img
        src="https://via.placeholder.com/300x150"
        alt="Placeholder Image"
        class="w-full"
      />
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2">Content Display</h2>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>
    </div>

    <!-- Team Member Card -->
    <div class="bg-white shadow-md rounded-lg p-6 flex items-center my-4 w-96">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile Image"
        class="w-24 h-24 rounded-full mr-4"
      />
      <div>
        <h2 class="text-xl font-bold">Jane Doe</h2>
        <p class="text-gray-700">Project Manager</p>
        <p class="text-gray-700">jane.doe@example.com</p>
      </div>
    </div>

    <!-- Product Listing Card -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden my-4 w-96">
      <img
        src="https://via.placeholder.com/300x150"
        alt="Product Image"
        class="w-full"
      />
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2">Product Name</h2>
        <p class="text-gray-700 mb-4">$49.99</p>
        <button
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Dashboard Widget Card -->
    <div class="bg-white shadow-md rounded-lg p-6 my-4 w-96">
      <h2 class="text-xl font-bold mb-2">Dashboard Widget</h2>
      <div class="flex items-center">
        <div class="text-3xl font-bold text-green-500 mr-4">150</div>
        <div class="text-gray-700">New Users</div>
      </div>
    </div>

    <!-- User Profile Card -->
    <div class="bg-white shadow-md rounded-lg p-6 flex items-center my-4 w-96">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile Image"
        class="w-24 h-24 rounded-full mr-4"
      />
      <div>
        <h2 class="text-xl font-bold">John Smith</h2>
        <p class="text-gray-700">Software Engineer</p>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      expandedCard: null,
    };
  },
  methods: {
    handleClick() {
      alert("Card clicked!");
    },
    toggleExpand(cardId) {
      this.expandedCard = this.expandedCard === cardId ? null : cardId;
    },
  },
};
</script>
