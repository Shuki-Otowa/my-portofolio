<template>
  <div class="cantact">
    <h2>Contact<span class="title-jpn">お問い合わせ</span></h2>

    <v-app style="width: 90%; border-radius: 30px; margin: 0 auto">
      <v-container style="width: 85%">
        <v-form ref="test_form">

        <v-card-title class="form-title">お名前</v-card-title>
        <v-textarea
          class="form-text"
          auto-grow
          rows="1"
          no-resize
          id="name"
          placeholder="やまだたろう"
          v-model="text1"
          :rules="[required]"
        ></v-textarea>
        <v-card-title class="form-title">メールアドレス</v-card-title>
        <v-textarea
          class="form-text"
          auto-grow
          rows="1"
          no-resize
          id="mail"
          placeholder="example@mail.co.jp"
          v-model="text2"
          :rules="[required]"
        ></v-textarea>
        <v-card-title class="form-title">内容</v-card-title>
        <v-textarea
          class="form-text"
          auto-grow
          rows="1"
          id="content"
          placeholder="お問い合わせ内容"
          v-model="text3"
          :rules="[required,limit_length]"
          counter="<10"
        ></v-textarea>
        <v-btn
          depressed
          block
          color="red"
          dark
          v-on:click="request"
          style="font-size: 20px; margin-top: 40px"
          >送信</v-btn
        >
        </v-form>
        <!-- <Loading v-show="loading"></Loading> -->
        <p class="copylight">@Shuki Otowa 2021</p>
      </v-container>
    </v-app>
  </div>
</template>


<script scaped>
import axios from "axios";

export default {
  data() {
    return {
      text1: "",
      text2: "",
      text3: "",
      required: (value) => !!value || "必ず入力してください", // 入力必須の制約
      limit_length: (value) =>
        value.length >= 10 || "10文字以上で入力してください", // 文字数の制約
    };
  },
  methods: {
    request: async function () {
      var Nam =
        "entry.2005620554" + "=" + document.getElementById("name").value;
      var Mai =
        "entry.1045781291" + "=" + document.getElementById("mail").value;
      var Con =
        "entry.839337160" + "=" + document.getElementById("content").value;

      var url =
        "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfcOBOa_a7ubDWN9uvACspvEhRVdLZObbmYtWl4FOMPfafVqw/formResponse" +
        Nam +
        "&" +
        Mai +
        "&" +
        Con;
      axios.get(url);
      setTimeout(() => {
        window.location.href = "/thank";
      }, 1000);
    },
    submit() {
      // ↓***** 新規追加 & 修正
      if (this.$refs.test_form.validate()) {
        // すべてのバリデーションが通過したときのみ
        // if文の中に入る
        this.success = true;
      } else {
        this.success = false;
      }
      // ↑***** 新規追加 & 修正
    }
  },
};
</script>


<style scoped>
.cantact {
  background-color: #e6a5ab;
  padding-bottom: 150px;
}
/* .container{
  padding: 0;
} */

.form-title {
  padding: 0;
  margin-top: 40px;
  font-size: 24px;
}
.form-title:first-child {
  margin-top: 50px;
}

.form-text {
  font-size: 18px;
  margin-top: 10px;
}

.copylight {
  text-align: center;
  margin-top: 30px;
}
.validation {
  color: red;
  font-size: 20px;
}
</style>