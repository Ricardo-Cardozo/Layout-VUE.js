<template>
  <TheHeader/>
  <BannerLayout/>
  <div class="container">
    <AboutLayout/>  
    <ServicesLayout/>  
  </div>
  <TheFooter/>
</template>
<script>



import BannerLayout from '@/components/BannerLayout.vue';
import AboutLayout from '@/components/AboutLayout.vue';
import ServicesLayout from '@/components/ServicesLayout.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    BannerLayout,
    AboutLayout,
    ServicesLayout,
    TheFooter,
    TheHeader
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  margin: 5em auto 2em;
  max-width: 1220px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h1 {
  font-size: 40px;
}

h3 {
  font-size: 26px;
}

p {
  font-size: 18px;
}
</style>
