<template>
  <div class="section-skill section">
    <div class="wrapper">
      <h2 class="section-title">Skill<span class="title-jpn">保有スキル</span></h2>
      <p class="lead-text">
        Progateや、ドットインストール、Udemyを使用して独学しています。また、QiitaやZennnなどの技術ブログも参考にしています。
      </p>
      <div class="skill-wrapper">
        <div class="skill-list">
          <div
            class="skill-item"
            v-for="skill in skills"
            v-bind:key="skill.title"
            outlined
          >
            <div class="skill-title">
              <h4 class="skill-name">{{ skill.title }}</h4>
              <v-icon large>{{ skill.icon }} </v-icon>
            </div>
            <div class="skill-summary">{{ skill.summary }}</div>
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
      skills: [
        {
          title: "HTML",
          icon: "devicon-html5-plain",
          summary:
            "レスポンシブサイトのコーディング。正しい文法で、UXが高く、コードがDRYで保守が容易な、SEOにも配慮したサイトをつくるべく日々勉強中です。",
        },
        {
          title: "CSS",
          icon: "devicon-css3-plain",
          summary:
            "レスポンシブサイトのコーディング。正しい文法で、UXが高く、コードがDRYで保守が容易な、SEOにも配慮したサイトをつくるべく日々勉強中です。",
        },
        {
          title: "SCSS",
          icon: "devicon-sass-plain",

          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "bootstrap",
          icon: "devicon-bootstrap-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "JavaScript",
          icon: "devicon-javascript-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "jQuery",
          icon: "devicon-jquery-plain",
          summary: "Webサイトに動きをつけるためスライダー、モーダル、",
        },
        {
          title: "Vue.js",
          icon: "devicon-vuejs-plain",
          summary:
            "基本的な知識、各種ディレクティブやVueRouter,Vuetify,Vuexなどを学習し、本サイトもVue.jsで開発しています。",
        },
        {
          title: "Firebase",
          icon: "devicon-firebase-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "npm",
          icon: "devicon-npm-original-wordmark",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "Git",
          icon: "devicon-git-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-skill {
  background-color: #91ab9c;
}

.lead-text {
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 1.2rem;
}
.skill-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 0px 0 60px;
}
.skill-title {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-top: 60px;
}

.skill-name {
  margin-right: 8px;
}
.skill-list {
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.skill-item {
  padding: 0 40px;
}

@media screen and (max-width: 800px) {
  .skill-title {
  font-size: 1.5rem;
  margin-top: 30px;
}
  .skill-list {
    grid-template-columns: repeat(1, 1fr);
  }

.skill-item {
  padding: 0 15px;
}
}
</style>
