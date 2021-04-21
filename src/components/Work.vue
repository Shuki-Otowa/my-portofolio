<template>
  <div id="work">
    <h2>Work<span class="title-jpn">製作物</span></h2>
    <div class="work-items">


      <div class="work-item">
        <a href="" class="work-link">
          <img src="../assets/Profile.jpg" alt="" class="work-img" />
        </a>
        <h3 class="subtitle">製作物の名前</h3>
        <div class="work-item-content">
          <p class="work-comment">
            ここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れる
          </p>
          <h3 class="subtitle">使用したスキル</h3>
          <div class="icons-skill">
            <v-icon large>devicon-html5-plain</v-icon>
            <v-icon large>devicon-css3-plain</v-icon>
            <v-icon large>devicon-vuejs-plain</v-icon>
            <v-icon large>devicon-npm-original-wordmark</v-icon>
          </div>
          <h3 class="subtitle">製作物へのリンク</h3>
          <div class="icons-link">
            <a href="https://github.com/Shuki-Otowa/my-portofolio"
              ><v-icon class="aaa" large>devicon-github-original-wordmark</v-icon></a
            >
            <a href=""><v-icon  class="aaa" large>mdi-web</v-icon></a>
          </div>
        </div>
      </div>


      <div class="work-item">
        <a href="" class="work-link">
          <img src="../assets/Skill.jpg" alt="" class="work-img" />
        </a>
        <h3 class="subtitle">製作物の名前</h3>
        <div class="work-item-content">
          <p class="work-comment">
            ここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れる
          </p>
          <h3 class="subtitle">使用したスキル</h3>
          <div class="icons-skill">
            <v-icon large>devicon-html5-plain</v-icon>
            <v-icon large>devicon-css3-plain</v-icon>
            <v-icon large>devicon-vuejs-plain</v-icon>
            <v-icon large>devicon-npm-original-wordmark</v-icon>
          </div>
          <h3 class="subtitle">製作物へのリンク</h3>
          <div class="icons-link">
            <a href=""
              ><v-icon large>devicon-github-original-wordmark</v-icon></a
            >
            <a href=""><v-icon large>mdi-web</v-icon></a>
          </div>
        </div>
      </div>


      <div class="work-item">
        <a href="" class="work-link">
          <img src="../assets/Contact.jpg" alt="" class="work-img" />
        </a>
        <h3 class="subtitle">製作物の名前</h3>
        <div class="work-item-content">
          <p class="work-comment">
            ここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れる
          </p>
          <h3 class="subtitle">使用したスキル</h3>
          <div class="icons-skill">
            <v-icon large>devicon-html5-plain</v-icon>
            <v-icon large>devicon-css3-plain</v-icon>
            <v-icon large>devicon-vuejs-plain</v-icon>
            <v-icon large>devicon-npm-original-wordmark</v-icon>
          </div>
          <h3 class="subtitle">製作物へのリンク</h3>
          <div class="icons-link">
            <a href=""
              ><v-icon large>devicon-github-original-wordmark</v-icon></a
            >
            <a href=""><v-icon large>mdi-web</v-icon></a>
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
  height: 100%;
  padding-bottom: 150px;
}

.work-items {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.work-item {
  text-align: center;
  background-color: #fff;
  border-radius: 30px;
  height: 100%;
}

.work-item-content {
  margin: 0 auto;
  max-width: 90%;
}

.work-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
}

.work-comment {
  padding: 0 14px;
  text-align: left;
}

.subtitle{
  font-size: 20px;
  padding: 20px 0;
}

.icons-skill {
  /* padding: 10px 0; */
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
}
.icons-link {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
}

.v-application p {
  margin-bottom: 0;
}

.aaa {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.aaa:hover {
  /* background-color: #222; */
  opacity: .4;
  transition: all .6s ease;
}

@media screen and (max-width: 800px) {
  .work-items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>