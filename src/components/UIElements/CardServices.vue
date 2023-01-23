<template>
  <div class="container-card-services" :class="color">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    data: {
      color: ['green', 'yellow', 'blue']
    }
  }
}
</script>

<style>
.container-card-services {
  padding: 2em;
  border: 2px solid #000;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  margin: 1em 3em 3em;
}

.container-card-services p {
  margin-top: 2em;

}

.green {
  background-color: #42b883;
}

.yellow {
  background-color: rgb(252, 218, 51);
  color: #000;
}

.blue {
  background-color: rgb(105, 51, 151);
  color: #fff;
}
</style>