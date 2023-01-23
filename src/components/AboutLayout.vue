<template>

  <div id="about">
    <h1 class="about-title">About</h1>
    <div class="about-container">
      <img class="icon-pc" src="../../public/pc.svg" alt="" srcset="">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis enim doloribus, sit qui culpa
        quisquam, voluptas, quaerat error ipsa ullam iusto repellendus quas nostrum facere eaque accusantium velit
        similique, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam facilis quo porro aspernatur
        accusamus recusandae, nam sunt adipisci, nostrum exercitationem consectetur ducimus, temporibus quia quasi nemo
        voluptas ex est corrupti.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.about-title {
  text-align: center;
  margin-bottom: 1em;
}

.about-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.about-container .icon-pc {
  width: 300px;
  margin: 1em;
}

.about-container p {
  width: 600px;
  margin: 1em;
}
</style>