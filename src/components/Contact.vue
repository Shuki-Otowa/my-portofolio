<template>
  <div id="cantact">
    <div class="container1">

    <h2>Contact<span class="title-jpn">お問合せ</span></h2>
    <v-container class="container">
      <div class="form-container">
        <v-form class="aaa" ref="form" v-if="showForm">
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
        <div class="formSuccess" v-else>
          <p class="formSuccessComment">
            お問い合わせありがとうございます!<br />
            お問い合わせの内容が登録されました。3日以内にご連絡いたしますので少々お待ちください。
          </p>
          <img src="..//assets/Sending emails_Monochromatic (1).svg" alt="" />
        </div>
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
#cantact {
  background-color: #e6a5ab;
  padding-bottom: 150px;
  min-height: 100vh;
}
.container1{
  max-width: 1800px;
  margin: 0 auto;
}
.container {
  width: 90%;
  max-width: 1280px;
  border-radius: 30px;
  padding-bottom: 52px;
  background-color: #fff;
}
.form-container {
  width: 90%;
  margin: 0 auto;
}

.form-title {
  padding: 0;
  margin-top: 40px;
  font-size: 24px;
}

.form-title::before {
  margin-right: 6px;
  padding: 0px 10px;
  border-radius: 4px;
  font-size: 14px;
  color: #f5f5f5;
  background-color: #c44;
  content: "必 須";
}

.form-text {
  font-size: 18px;
}

.formSuccess {
  font-size: 22px;
  margin-top: 40px;
}

.formSuccess img {
  width: 40%;
  display: block;
  margin: 0 auto;
  padding: 60px 0;
}

button {
  /* height: 60px !important; */
  font-size: 24px !important;
  margin-top: 60px;
  border-radius: 20px;
  background-color: #c44 !important;
  color: #fff !important;
  font-weight: bold;
}

@media screen and (max-width: 800px) {
  
  .container {
    padding-bottom: 60px;
  }
  .form-title {
    font-size: 18px;
    margin-top: 10px;
  }
  .form-title:first-child {
    padding-top: 30px;
  }

  .form-title::before {
    padding: 0 8px;
    font-size: 12px;
    content: "必 須";
  }

  .form-text {
    font-size: 16px;
  }
  .formSuccess {
    font-size: 18px;
    margin-top: 20px;
  }
  .formSuccess img {
    width: 100%;
    padding: 20px 0;
  }
  button {
    margin-top: 40px !important;
    height: 60px !important;
    font-size: 18px !important;
    border-radius: 10px !important;
  }
}
</style>