<template>
  <div @click.self="$emit('close')" class="overlay">
    <div class="modal">
      <div class="modal-container" ref="modal-container">
        <v-icon @click="$emit('close')" class="icon-close" large
          >mdi-close-thick</v-icon
        >
        <img :src="val.img_src" class="modal-img" />
        <h3 class="modal-title">{{ val.title }}</h3>
        <p>{{ val.summary }}</p>
        <h3 class="modal-title">使用したスキル</h3>
        <p>{{ val.skill }}</p>
        <div class="button-link">
          <div class="button hover">
            <a v-if="val.github" :href="val.github">GitHub</a>
          </div>
          <div class="button hover">
            <a :href="val.website">Webサイト</a>
          </div>
        </div>
        <div>
          <button @click="$emit('close')" class="button-close">閉じる</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  name: "Modal",
  props: ["val"],
  methods: {},
};
</script>

<style scoped>
.modal-title {
  text-align: center;
  margin: 5px 0;
}
.v-application a {
  color: #333;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-delay: 0.1s;
}
.v-application a:hover {
  color: #fff;
  transition-delay: 0.1s;
}
.overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  z-index: 10;
  width: 50%;
  max-width: 1000px;
  height: 95%;
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  overflow-wrap: break-word;
  overflow: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* スクロールバーを非表示 IE, Edge 対応 */
  scrollbar-width: none; /* スクロールバーを非表示 Firefox 対応 */
}

.modal::-webkit-scrollbar {
  display: none; /* スクロールバーを非表示 Chrome, Safari 対応 */
}
.modal-container {
  width: 90%;
  height: 100%;
  padding-top: 40px;
  margin: 0 auto;
}

.modal-img {
  width: 100%;
  border-radius: 20px;
  margin-top: 10px;
}

.button-link {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 0px;
}
.button {
  color: #333;
  width: 48%;
  height: 50px;
  text-align: center;
  font-weight: 600;
  margin: 30px 0;
  border-radius: 8px;
  border: 2px solid #333;
  position: relative;
  z-index: 1;
  transition: 0.4s;
}
.button::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: #333;
  border-radius: 6px;
  transform-origin: 0%;
  transform: scaleX(0);
  transition: transform ease 0.4s;
}

.button:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}

.button-close {
  padding-bottom: 40px;
  width: 100%;
  font-weight: 600;
  color: #555;
  transition: 0.4s;
}
.button-close:hover {
  color: #000;
  transition: 0.4s;
}

.v-icon {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
}
.v-icon:hover {
  color: #333;
  transform: rotateZ(180deg);
}

@media screen and (max-width: 800px) {
  .modal {
    height: 90%;
    width: 90%;
  }
}
</style>