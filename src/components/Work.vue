<template>
  <div id="work">
    <div class="container">
      <h2>Work<span class="title-jpn">製作物</span></h2>
      <div class="work-items">
        <div class="work-item">
          <img src="../assets/Profile.jpg" alt="" class="work-img" />
          <h3 class="subtitle">製作物の名前</h3>
          <p class="work-comment">
            ここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れる
          </p>
          <h3 class="subtitle">使用したスキル</h3>
          <div class="useSkill" v-for="skill1 in skills1" :key="skill1">
            {{ skill1 }}
          </div>
          <h3 class="subtitle">製作物へのリンク</h3>
          <div class="icons-link">
            <a href="" class="link"><p>GitHub</p></a>
          </div>
        </div>

        <div class="work-item">
          <img src="../assets/Skill.jpg" alt="" class="work-img" />
          <h3 class="subtitle">製作物の名前</h3>
          <p class="work-comment">
            ここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れる
          </p>
          <h3 class="subtitle">使用したスキル</h3>
          <div class="useSkill" v-for="skill2 in skills2" :key="skill2">
            {{ skill2 }}
          </div>
          <h3 class="subtitle">製作物へのリンク</h3>
          <div class="icons-link">
            <a href="" class="link"><p>GitHub</p></a>
            <a href="" class="link"><p>Webサイト</p></a>
          </div>
        </div>

        <div class="work-item">
          <img src="../assets/Contact.jpg" alt="" class="work-img" />
          <h3 class="subtitle">製作物の名前</h3>
          <p class="work-comment">
            ここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れる
          </p>
          <h3 class="subtitle">使用したスキル</h3>
          <div class="useSkill" v-for="skill3 in skills3" :key="skill3">
            {{ skill3 }}
          </div>
          <h3 class="subtitle">製作物へのリンク</h3>
          <div class="icons-link">
            <a href="" class="link"><p>GitHub</p></a>
            <a href="" class="link"><p>Webサイト</p></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
      skills1: [
        "#HTML",
        "#CSS",
        "#Vue.js",
        "#Vuetify",
        "#axios",
        "#Firebase",
        "#Netlify",
      ],
      skills2: ["#HTML", "#CSS", "#Vue.js", "#Firebase"],
      skills3: ["#HTML", "#SCSS", "#Vue.js", "#Firebase", "#bootstrap"],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
#work {
  background-color: #dcd1ae;
  min-height: 100%;
  padding-bottom: 150px;
}
.container {
  max-width: 1800px;
  margin: 0 auto;
}

.work-items {
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.work-item {
  text-align: center;
  background-color: #fff;
  border-radius: 30px;
  height: fit-content;
  padding-bottom: 30px;
}

.work-img {
  width: 100%;
  height: 20%;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
}

.work-comment {
  padding: 0 20px;
  text-align: left;
  margin: 0;
}

.subtitle {
  font-size: 20px;
  padding: 20px 0;
}

.useSkill {
  display: inline-block;
  background-color: #dcd1ae;
  margin: 10px 6px;
  padding: 0 12px;
  border-radius: 8px;
}

.icons-link {
  display: flex;
  justify-content: space-evenly;
}

.link {
  display: inline-block;
  width: 40%;
  background-color: #dcd1ae;
  border-radius: 10px;
  padding: 8px 0;
  color: #000;
}

.v-application p {
  margin-bottom: 0;
}
.link:hover {
  opacity: 0.8;
  transition: all 0.6s ease;
}

@media screen and (max-width: 1024px) {
  .work-items {
    width: 98%;
    grid-template-columns: repeat(1, 1fr);
  }
  .icons-link {
    flex-direction: column;

}
  .link {
    border-radius: 10px;

  width: 90%;
  padding: 10px 0;
  margin: 0 auto;
  margin-bottom: 20px;
}
}
</style>