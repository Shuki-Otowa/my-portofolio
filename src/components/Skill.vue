<template>
  <div id="skill">
    <h2>Skill<span class="title-jpn">保有スキル</span></h2>
    <div class="skill-container">
      <h3 class="subtitle">language</h3>
      <hr />
      <div class="card-wrapper">
        <v-card
          v-for="card in cards"
          v-bind:key="card.title"
          class="cards"
          max-width="90%"
          outlined
        >
          <v-list class="card">
            <div class="skill-title">
            <v-list class="card-title"><h4>{{ card.title }}</h4></v-list>
            <v-icon large>{{ card.icon }} </v-icon>

            </div>
            <v-list class="card-summary">{{ card.summary }}</v-list>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cards: [
        {
          title: "HTML",
          icon: "devicon-html5-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "CSS",
          icon: "devicon-css3-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "SCSS",
          icon: "devicon-sass-plain",

          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "bootstrap",
          icon: "devicon-bootstrap-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "jQuery",
          icon: "devicon-jquery-plain",
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
          title: "Vue.js",
          icon: "devicon-vuejs-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
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
#skill {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #91ab9c;
  padding-bottom: 150px;
}

.container {
  background-color: #91ab9c;
}

.skill-container {
  width: 90%;
  background-color: #fff;
  border-radius: 30px;
  margin: 0 auto;
  padding: 30px 0;
}
.skill-title {
  display: flex;
  justify-content: center;
}
.card-wrapper {
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

hr {
  width: 90%;
  margin: 0 auto;
}

.subtitle {
  font-size: 32px;
  padding: 0 60px 20px 60px;
}

.cards {
  margin: 0 auto;
  margin-top: 25px;
  padding: 0 20px;
  border: 0;
}

.card {
  margin: 0 auto;
  text-align: center;
}
.card-title {
  font-size: 26px;
  margin-right: 10px;
}

.card-summary {
  text-align: left;
}

@media screen and (max-width: 600px) {
  hr {
    width: 85%;
    margin: 0 auto;
  }
  .subtitle {
    text-align: center;
    font-size: 28px;
  }
  .card-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
