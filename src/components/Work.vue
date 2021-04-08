<template>
  <div class="container">
    <h2>Work</h2>
    <div class="work-items">

      <div class="work-item">
        <h3>item1</h3>
        <div class="work-item-content">
          <a href="" class="work-link">
            <img src="../assets/Profile.jpg" alt="" class="work-img" />
          </a>
          <p class="work-comment">
            ここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れる
          </p>
          <a href="">
            <i class="devicon-github-original-wordmark colored icon"></i>
          </a>
        </div>
      </div>

      <div class="work-item">
        <h3>item2</h3>
        <div class="work-item-content">
          <a href="" class="work-link">
            <img src="../assets/Profile.jpg" alt="" class="work-img" />
          </a>
          <p class="work-comment">
            ここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れる
          </p>
          <a href="">
            <i class="devicon-github-original-wordmark colored icon"></i>
          </a>
        </div>
      </div>

      <div class="work-item">
        <h3>item3</h3>
        <div class="work-item-content">
          <a href="" class="work-link">
            <img src="../assets/Profile.jpg" alt="" class="work-img" />
          </a>
          <p class="work-comment">
            ここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れるここに製作物の説明を入れる
          </p>
          <a href="">
            <i class="devicon-github-original-wordmark colored icon"></i>
          </a>
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
.container {
  background-color: rgb(250, 137, 137);
  height: 1000px;
}

.work-items {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
}

.work-item {
  text-align: center;
  padding-top: 20px;
  width: 25%;
  background-color: #fff;
  border-radius: 30px;
  height: 600px;
}

.work-item-content {
  margin: 0 auto;
  max-width: 90%;
}

.work-img {
  max-width: 90%;
}

.work-comment {
  padding: 20px 10px;
  text-align: left;
}

.icon {
  font-size: 56px;
}
</style>