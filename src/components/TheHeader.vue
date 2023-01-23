<template>
  <nav>
    <div class="brand">
      <img src="../assets/logo.png" alt="" srcset="">
      <h1>LogoVUE</h1>
    </div>
    <ul>
      <li>
        <p class="links">Home</p>
      </li>
      <li>
        <p class="links">About</p>
      </li>
      <li>
        <p class="links">Services</p>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
}

</script>

<style>
nav {
  background-color: #000;
  color: #fff;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 1.2em 2em;
}

ul {
  display: flex;
  list-style: none;
}

li {
  margin: 1em;
}

.links {
  cursor: pointer;
  font-weight: bold;
  border: 2px solid transparent;
  padding: 10px;
  border-radius: 5px;
  transition: .5s;
}

.links:hover {
  border: 1px solid #fff;
}

.brand {
  display: flex;
  align-items: center;
}

.brand img {
  width: 50px;
  margin-right: .8rem;
}
</style>