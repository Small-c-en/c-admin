<template>
  <!-- 弹窗内容主体部分 -->
  <div class="article-container">
    <!-- 用户基本信息 -->
    <div class="userInfo">
      <div class="avatar">
        <img
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.GT-ZhgDXV_VWMQbgDmgloAHaHS?w=206&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt=""
        />
      </div>
      <div class="user-name-level">
        <div class="username">猪是的念来过倒<el-tag type="danger">Tag 5</el-tag></div>
        <div class="address">江西-九江</div>
        <div class="level"></div>
      </div>
    </div>
    <!-- 用户文章信息 -->
    <div class="article">
      <div class="article-title">
        <div class="name">文章标题</div>
        <div class="title">今天心情不太好呢</div>
      </div>
      <div class="article-content">
        <div class="name">文章内容</div>
        <div class="content">
          <div class="detail">
            读书的根本目的是为了让自己明白世界，看清自己，让自己在无所依靠或者无所事事的时候，有一种严肃的力量推动着你往前走人生，我有我的精彩，有我的美丽，不必仰望羡慕别人，给自己平添不必要的烦恼。“你站在桥上看风景，看风景的人在楼上看你”，你就是别人眼里最美的风景！我没有财富，只要我还有快乐，还有追求，也许不一定成功，但是努力过，也无怨无悔，失败也是人生财富。人再豁达，也会有块心底的伤；心再冷漠，有时也会红了眼眶。走得再潇洒，途中也会有迷茫；活得再漂亮，背后也会有凄凉。不是你倦了，就会有温暖的巢穴；不是你渴了，就会有潺潺的山泉。每个人的内心，都有几处不为人知的暗伤。生活不可能一帆风顺，总会有波折，总会有险阻，生活是个爱开玩笑的孩子，也许今天给你所有，明天又会让你一无所有，无需烦恼，该来的总会来，再黑的夜晚也会有黎明到来的那一刻，不管生活有多么曲折，只要拥有幸福的态度就能挺过漫漫长夜，就能迎来美好的明天
          </div>
        </div>
        <div class="img-box">
          <div class="img-item" v-for="item in 7"></div>
        </div>
      </div>
      <div class="publish-time">发布时间：2024-12-11</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
//弹窗展示文章
.article-container {
  margin-left: 20px;
  margin-top: 20px;
  .userInfo {
    display: flex;
    .avatar {
      height: 70px;
      width: 70px;
      border-radius: 5px;
      border: 1px solid #ccc;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .user-name-level {
      margin-top: 10px;
      margin-left: 15px;
      .username {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 550;
        .el-tag {
          margin-left: 8px;
        }
      }
      .address {
        margin-top: 10px;
        font-size: 14px;
        color: #999;
      }
    }
  }

  .article {
    margin-left: 80px;
    margin-top: 20px;
    .article-title {
      .name {
        font-size: 20px;
        font-weight: 550;
        color: #c1a2e5;
      }
      .title {
        margin-top: 10px;
      }
    }
    .article-content {
      margin-top: 30px;
      .name {
        color: #c1a2e5;
        font-size: 20px;
        font-weight: 550;
      }
      .content {
        font-size: 16px;
        margin-top: 10px;
        width: 400px;
        height: 200px;
        overflow: scroll;
        padding: 5px;
        // background-color: #c1a2e51c;
      }
      .img-box {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 370px;
        margin: 10px;
        margin-top: 20px;
        .img-item {
          height: 115px;
          width: 115px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
      }
    }
    .publish-time {
      margin-left: 10px;
      margin-top: 20px;
      color: #999;
    }
  }
}
</style>
