<template>
  <div id="services">
    <h1 class="services-title">Services</h1>
    <div class="services-container">
      <CardServices class="green" title="Performance" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus eum, distinctio veritatis non cum
    consequuntur aliquam, recusandae repellendus vero vitae corporis placeat mollitia eligendi pariatur, velit
    explicabo? Magnam, harum!" />
      <CardServices class="yellow" title="Optimization" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus eum, distinctio veritatis non cum
    consequuntur aliquam, recusandae repellendus vero vitae corporis placeat mollitia eligendi pariatur, velit
    explicabo? Magnam, harum!" />
      <CardServices class="blue" title="Velocity" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus eum, distinctio veritatis non cum
    consequuntur aliquam, recusandae repellendus vero vitae corporis placeat mollitia eligendi pariatur, velit
    explicabo? Magnam, harum!" />
    </div>
   
  </div>
</template>

<script>
import CardServices from './UIElements/CardServices.vue';
export default {
  components: {
    CardServices
  }
}
</script>

<style>
.services-title {
  text-align: center;
  margin: 2em;
}

.services-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>