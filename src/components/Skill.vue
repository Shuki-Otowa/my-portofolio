<template>
  <div class="container">
    <h2>Skill</h2>
    <div class="skill-container">
      <div class="skill-cards">
        <div class="skill-card">
          <h3>HTML</h3>
          <i class="devicon-html5-plain skill-icon"></i>
        </div>
        <div class="skill-card">
          <h3>CSS</h3>
          <i class="devicon-css3-plain skill-icon"></i>
        </div>
        <div class="skill-card">
          <h3>SCSS</h3>
          <i class="devicon-sass-original skill-icon"></i>
        </div>
        <div class="skill-card">
          <h3>Javascript</h3>
          <i class="devicon-javascript-plain skill-icon"></i>
        </div>
        <div class="skill-card">
          <h3>Vue</h3>
          <i class="devicon-vuejs-plain skill-icon"></i>
        </div>
        <div class="skill-card">
          <h3>Git</h3>
          <i class="devicon-git-plain skill-icon"></i>
        </div>
        <div class="skill-card">
          <h3>npm</h3>
          <i class="devicon-npm-original-wordmark skill-icon"></i>
        </div>
        <div class="skill-card">
          <h3>firebase</h3>
          <i class="devicon-firebase-plain skill-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #999;
  height: 1000px;
}
.section-title {
  display: flex;
}
.skill-container {
  width: 80vw;
  background-color: #fff;
  border-radius: 30px;
  margin: 0 auto;
}
.skill-icon {
  font-size: 56px;
}
.skill-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
.skill-card {
  margin: 0 auto;
  text-align: center;
}
</style>