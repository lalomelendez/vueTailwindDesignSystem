<template>
  <div>
    <h1>UI Components</h1>
    <nav>
      <ul>
        <li><router-link to="/buttons">Buttons</router-link></li>
        <li><router-link to="/cards">Cards</router-link></li>
        <li><router-link to="/forms">Forms</router-link></li>
        <li>
          <router-link to="/messages-alerts">Messages/Alerts</router-link>
        </li>
        <li><router-link to="/photo-gallery">Photo Gallery</router-link></li>
        <li><router-link to="/modals">Modals</router-link></li>
        <li><router-link to="/tabs">Tabs</router-link></li>
        <li><router-link to="/dropdowns">Dropdowns</router-link></li>
        <li><router-link to="/tooltips">Tooltips</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
