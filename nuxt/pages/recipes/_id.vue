<template>
  <div>
    <section class="movie">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/zy5A5XaYuoU"
        allowfullscreen
      ></b-embed>
    </section>
    <section class="descriotion">
      <h1 class="heading">
        レンジでスクランブルエッグ
      </h1>
    </section>
    <section class="ingredients">
      <h2 class="heading">
        材料一覧
      </h2>
      <ul class="list-unstyled">
        <b-media tag="li" class="item">
          <b-img
            slot="aside"
            src="/images/egg.jpeg"
            width="48"
            alt="placeholder"
          ></b-img>

          <h5 class="name">
            卵
          </h5>
          <p class="amount">
            2個
          </p>
        </b-media>
        <b-media tag="li" class="item">
          <b-img
            slot="aside"
            src="/images/butter.jpg"
            width="48"
            alt="placeholder"
          ></b-img>

          <h5 class="name">
            有塩バター
          </h5>
          <p class="amount">
            5グラム
          </p>
        </b-media>
        <b-media tag="li" class="item">
          <b-img
            slot="aside"
            src="/images/salt.jpg"
            width="48"
            alt="placeholder"
          ></b-img>

          <h5 class="name">
            塩
          </h5>
          <p class="amount">
            少々
          </p>
        </b-media>
      </ul>
    </section>
    <section class="procedure">
      <h2 class="heading">
        手順
      </h2>
      <ol>
        <li>有塩バターをラップをしないで600Wのレンジで10秒加熱し、溶かす</li>
        <li>卵と塩を入れよく混ぜる</li>
        <li>ふんわりラップをし、600Wのレンジで1分加熱</li>
      </ol>
    </section>
    <section class="complete">
      完成したら料理を撮影してクリア！！
      <b-button block class="camera" to="/dishes/crop">
        <font-awesome-icon :icon="['fas', 'camera']" />
        撮影する
      </b-button>
    </section>
  </div>
</template>

<script></script>

<style lang="scss">
@import '~/assets/sass/variable.scss';

.movie {
  margin-bottom: 32px;
}
.heading {
  margin-top: 24px;
  @extend %h1;
}

.ingredients {
  .heading {
    margin-top: 16px;
    @extend %h2;
  }
  .list-unstyled {
    .item {
      margin-bottom: 8px;
      .name {
        @extend %primary;
        font-size: 14px;
        margin-top: 0px;
        margin-bottom: 4px;
      }
      .amount {
        margin-bottom: 0px;
        font-size: 12px;
        @extend %secondary;
      }
    }
  }
}

.procedure {
  .heading {
    margin-top: 16px;
    @extend %h2;
  }
}

.complete {
  .camera {
    background-color: $app;
    border: none;
  }
}
</style>
