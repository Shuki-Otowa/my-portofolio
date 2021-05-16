<template>
  <div class="section-skill section">
    <div class="wrapper">
      <h2 class="section-title">Skill<span class="title-jpn">保有スキル</span></h2>
      <p class="lead-text">
        これからも既存スキルの更なるレベルアップと新技術の習得のために日々勉強を継続していきます。
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
            "レスポンシブサイトのコーディングはもちろん、デザインデータに忠実なコーディングを意識しています。また、保守性の高いコーディングを心がけています。",
        },
        {
          title: "CSS",
          icon: "devicon-css3-plain",
          summary:
            "予測しやすい、再利用しやすい、メンテナンスしやすいCSS設計を心がけています。",
        },
        {
          title: "SCSS",
          icon: "devicon-sass-plain",

          summary:
            "mixinやファイルの分割管理などを活用し、効率的でメンテナンス性が高いコード設計が可能です。ネストの使いすぎなど見通しが悪くならないように気をつけながら実装しています。",
        },
        {
          title: "JavaScript",
          icon: "devicon-javascript-plain",
          summary:
            "Vue.jsを扱うために基礎的なことを学習しました。 ",
        },
        {
          title: "jQuery",
          icon: "devicon-jquery-plain",
          summary: "スライダー、モーダル、スムーススクロールなど、Webサイトに動きをつけるためのアニメーション実装が可能です。",
        },
        {
          title: "Vue.js",
          icon: "devicon-vuejs-plain",
          summary:
            "基本的なVue.jsの構文や、利用方法を学習しており、単一ファイルコンポーネントを利用してSPAの開発ができます。本サイトもVue.jsで開発しています。",
        },
        {
          title: "Firebase",
          icon: "devicon-firebase-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        // {
        //   title: "npm",
        //   icon: "devicon-npm-original-wordmark",
        //   summary:
        //     "Vue.jsを用いた開発の際に関連する",
        // },
        {
          title: "Git",
          icon: "devicon-git-plain",
          summary:
            "Gitの基礎を学習し、定期的なコミットや、新たな機能を実装する際にはブランチを切り替えて開発を行うなど、個人開発においてもバージョン管理を意識しております。",
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

@media screen and (max-width: 599px) {
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
