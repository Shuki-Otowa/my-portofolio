<template>
  <div class="section-cantact section">
    <div class="wrapper">
      <h2 class="section-title">
        Contact<span class="title-jpn">お問合せ</span>
      </h2>
      <p class="lead-text">
        ご質問、ご感想、お仕事のご相談等、お気軽にお問い合わせください。
      </p>
      <v-container class="form-wrapper">
        <v-form ref="form" v-if="showForm">
          <v-card-title class="form-title">お名前</v-card-title>
          <v-textarea
            class="form-text"
            auto-grow
            rows="1"
            no-resize
            placeholder="やまだ たろう"
            v-model="name"
            :rules="[rules.required]"
          ></v-textarea>
          <v-card-title class="form-title">メールアドレス</v-card-title>
          <v-textarea
            class="form-text"
            auto-grow
            rows="1"
            no-resize
            placeholder="example@co.jp"
            v-model="mail"
            :rules="[rules.required, rules.email]"
          ></v-textarea>
          <v-card-title class="form-title">内容</v-card-title>
          <v-textarea
            class="form-text"
            auto-grow
            rows="1"
            placeholder="お問い合わせ内容"
            v-model="comment"
            :rules="[rules.required, rules.length]"
            counter="<10"
          ></v-textarea>
          <v-btn depressed ripple block v-on:click="request">送 信</v-btn>
        </v-form>
        <div class="form-success" v-else>
          <p class="form-success-comment">
            お問い合わせありがとうございます!<br />
            お問い合わせの内容が登録されました。3日以内にご連絡いたしますので少々お待ちください。
          </p>
          <img src="..//assets/Sending emails_Monochromatic (1).svg" alt="" />
        </div>
      </v-container>
    </div>
  </div>
</template>


<script scaped>
import axios from "axios";

export default {
  data() {
    return {
      showForm: true,
      name: "",
      mail: "",
      comment: "",
      isSubmitComplete: false,
      rules: {
        required: (value) => !!value || "必ず入力してください", // 入力必須の制約
        length: (value) => value.length >= 10 || "10文字以上で入力してください", // 文字数の制約
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "正しい形式で入力してください。"; // メールアドレスの形式の制約
        },
      },
    };
  },
  methods: {
    request() {
      if (this.$refs.form.validate()) {
        this.showForm = false;
        axios.post(
          "https://firestore.googleapis.com/v1/projects/myportfolio-82e02/databases/(default)/documents/reqest",
          {
            fields: {
              name: {
                stringValue: this.name,
              },
              mail: {
                stringValue: this.mail,
              },
              comment: {
                stringValue: this.comment,
              },
            },
          }
        );
      } else {
        alert(
          "データを送信できていません。お手数ですが、もう一度やり直してください。"
        );
      }
    },
  },
};
</script>


<style scoped>
.section-cantact {
  background-color: #e6a5ab;
}

.lead-text {
  width: 65%;
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 1.2rem;
}

.form-wrapper {
  /* max-width: 1280px; */
  padding: 20px 40px 40px;
  width: 65%;
  border-radius: 30px;
  background-color: #fff;
}

.form-title {
  padding: 0;
  margin-top: 20px;
}

.form-title::before {
  margin-right: 6px;
  padding: 0px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #f5f5f5;
  background-color: #c44;
  content: "必 須";
}

.form-success {
  padding-top: 20px;
}

.form-success img {
  width: 40%;
  display: block;
  margin: 0 auto;
  padding: 60px 0;
}

button {
  height: 60px !important;
  font-size: 1.3rem !important;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #c44 !important;
  color: #fff !important;
  font-weight: bold;
}

@media screen and (max-width: px) {
  .wrapper {
    padding-bottom: 0px;
  }
  .lead-text {
    font-size: 1rem;
    width: 95%;
  }
  .form-wrapper {
    padding: 20px;
    width: 100%;
  }

  .form-title::before {
    padding: 0 8px;
    font-size: 0.8rem;
  }

  .form-success {
    margin-top: 20px;
  }
  .form-success img {
    width: 100%;
    padding: 20px 0 50px;
  }
  button {
    margin-top: 40px !important;
    height: 60px !important;
    font-size: 18px !important;
    border-radius: 10px !important;
  }
}
</style>