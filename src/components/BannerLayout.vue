<template>
  <div class="banner-container">
    <img class="vue-banner" src="../../public/vuejs.svg" alt="" srcset="">
    <h1>Bem vindo!</h1>
    <h3>Este site está sendo desenvolvido com <span>Vue.js</span> para fins educacionais</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut eligendi officiis deserunt voluptatibus,
      molestias deleniti quaerat, accusantium asperiores doloribus aspernatur, velit voluptate dolorum eos veritatis
      beatae labore alias facilis.</p>
    <button class="btn">Saiba mais</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.banner-container {
  background-image: linear-gradient(90deg, #42b883, #0e291c);
  width: 100%;
  height: 85vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.banner-container h1 {
  color: #000;
  margin: 1em;
}

.banner-container h3 {
  color: #081108;
}

.banner-container p {
  color: #fff;
  margin: 1em;
  width: 1000px;
  text-align: center;
}

.btn:hover {
  margin-top: 1em;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  border: solid 3px transparent;
  transition: .5s;
}

.btn {
  margin-top: 1em;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  border: solid 3px #000;
  font-weight: bold;
}

.vue-banner {
 width: 300px;
}
</style>