<template>
  <div>
    <h1 class="heading">
      たまご料理マスターへの道
    </h1>
    <section class="recipes">
      <h2 class="heading">
        レシピ一覧
      </h2>
      <nuxt-link to="/recipes/1">
        <b-card class="recipe-card">
          <b-media>
            <b-img
              slot="aside"
              src="/images/nira.jpg"
              width="84"
              alt="placeholder"
            ></b-img>

            <h5 class="mt-0">
              レンジでスクランブルエッグ
            </h5>
            <p>
              レベル ★☆☆
            </p>
          </b-media>
        </b-card>
      </nuxt-link>
      <b-card class="recipe-card">
        <b-media>
          <b-img
            slot="aside"
            src="/images/zousui.jpeg"
            width="84"
            alt="placeholder"
          ></b-img>

          <h5 class="mt-0">
            電子レンジで3ステップ たまご雑炊
          </h5>
          <p>
            レベル ★☆☆
          </p>
        </b-media>
      </b-card>
      <b-card class="recipe-card">
        <b-media>
          <b-img
            slot="aside"
            src="/images/omu.jpg"
            width="84"
            alt="placeholder"
          ></b-img>

          <h5 class="mt-0">
            最小限オムライス
          </h5>
          <p>
            レベル ★★☆
          </p>
        </b-media>
      </b-card>
    </section>
  </div>
</template>

<script></script>

<style lang="scss">
@import '~/assets/sass/variable.scss';

.heading {
  margin-top: 10px;
  @extend %h1;
}
.recipes {
  .heading {
    margin-top: 10px;
    @extend %h2;
  }
  .recipe-card {
    margin-bottom: 16px;
  }
}
</style>
