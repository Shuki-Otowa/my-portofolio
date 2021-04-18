<template>
  <div id="skill">
    <h2>Skill</h2>
    <div class="skill-container">
      <h3 class="skill-cards-title">language</h3>
      <hr />
      <div class="card-container">
        <v-card
          v-for="card in cards"
          v-bind:key="card.title"
          class="cards"
          max-width="90%"
          outlined
        >
          <v-list class="card">
            <v-icon large>{{ card.icon }} </v-icon>
            <v-list class="card-title">{{ card.title }}</v-list>
            <v-list class="card-summary">{{ card.summary }}</v-list>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import "devicon";

export default {
  auth: false,
  data() {
    return {
      cards: [
        {
          title: "HTML",
          icon: "devicon-html5-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
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
          title: "Javascript",
          icon: "devicon-javascript-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "Vue",
          icon: "devicon-vuejs-plain",
          summary:
            "どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明どのレベルかを簡単に説明",
        },
        {
          title: "firebase",
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
  padding-bottom: 100px;
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

.card-container {
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

h2 {
  color: aliceblue;
  font-size: 6rem;
  margin-left: 20px;
  margin-bottom: 30px;
}

hr {
  width: 90%;
  margin: 0 auto;
}

.skill-cards-title {
  font-size: 28px;
  padding: 0 60px 20px 60px;
}

.cards {
  margin: 0 auto;
  margin-top: 25px;
  padding: 0 20px;
}

.card {
  margin: 0 auto;
  text-align: center;
}
.card-title {
  font-size: 24px;
}

.card-summary {
  text-align: left;
}

@media screen and (max-width: 600px) {
  hr {
    width: 85%;
    margin: 0 auto;
  }
  .skill-cards-title {
    text-align: center;
  }
  .card-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
