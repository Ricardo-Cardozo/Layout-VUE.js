<template>
  <nav>
    <div class="brand">
      <img src="../assets/logo.png" alt="" srcset="">
      <h1>LogoVUE</h1>
    </div>
    <ul>
      <li>
        <a href="#banner" class="links" v-smooth-scroll="{ duration: 1000, offset: -50 }">Home</a>
      </li>
      <li>
        <a href="#about" class="links" v-smooth-scroll="{ duration: 1000, offset: -150 }">About</a>
      </li>
      <li>
        <a href="#services" class="links" v-smooth-scroll="{ duration: 1000, offset: -100 }">Services</a>
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
  position: fixed;
  top: 0;
  width: 100%;
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
  text-decoration: none;
  color: #fff;
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