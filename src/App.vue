<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <body>

    <div class="container">

      <header>
        <h1>Tarot Card Reader</h1>
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/reading">Readings</RouterLink>
            
          </nav>
      </header>

      <main>
        <div class="background-view">
          <RouterView />
        </div>
      </main>

      <footer><p>How lovely are tarot cards?</p></footer>

    </div>
  </body>
</template>

<style scoped>

header {
  text-align: center;
  max-height: 100px;
  width: 100%;
  font-size: 20px;
}

nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
}

nav a {
  color: #3a4e85;
}

body {
  color: black;
}

.background-view {
    background-color: #a383b2;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    gap: 10px;
    max-width: 100%;
    padding: 20px;
    border: #dbaac3 12px solid;
    border-radius: 15px;
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 1),
        0 4px 8px rgba(0, 0, 0, 0.15);
}

nav a.router-link-exact-active {
  color: #dbaac3;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-child {
  display: inline;
  border-left: none;
}

main {
  margin: 100px;
  background-color: #fff0e4;
}

body {
  background-color: white;
}
</style>
