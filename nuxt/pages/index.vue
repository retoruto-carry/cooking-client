<template>
  <div>
    <section>
      <b-card>
        <b-media>
          <b-img
            slot="aside"
            rounded
            src="/images/avatar.png"
            width="64"
            alt="placeholder"
          ></b-img>

          <h5 class="mt-0">
            れとるときゃりー
          </h5>
          <p class="mb-0">
            LEVEL 1
          </p>
        </b-media>
        <b-card-body>
          <b-badge pill class="badge" variant="warning text-white">
            <font-awesome-icon :icon="['fas', 'egg']" />
            たまご料理職人見習い
          </b-badge>
        </b-card-body>
      </b-card>
    </section>
    <h1 class="heading">
      コース一覧
    </h1>
    <section>
      <b-container>
        <b-row>
          <b-col lg="4" xl="3" md="6" sm="6" xs="12">
            <nuxt-link to="/cources/1">
              <b-card
                class="cource"
                title="たまご料理マスターへの道"
                img-src="/images/sukuranburu.jpg"
                img-alt="Image"
                img-top
              >
                <b-card-sub-title class="mb-2">
                  20レシピ
                </b-card-sub-title>
              </b-card>
            </nuxt-link>
          </b-col>
          <b-col lg="4" xl="3" md="6" sm="6" xs="12">
            <b-card
              class="cource"
              title="定番中華料理マスターへの道"
              img-src="/images/chine.jpeg"
              img-alt="Image"
              img-top
            >
              <b-card-sub-title class="mb-2">
                20レシピ
              </b-card-sub-title>
            </b-card>
          </b-col>
          <b-col lg="4" xl="3" md="6" sm="6" xs="12">
            <b-card
              class="cource"
              title="スタミナ肉料理職人への道"
              img-src="/images/sutamina.jpg"
              img-alt="Image"
              img-top
            >
              <b-card-sub-title class="mb-2">
                20レシピ
              </b-card-sub-title>
            </b-card>
          </b-col>
          <b-col lg="4" xl="3" md="6" sm="6" xs="12">
            <b-card
              class="cource"
              title="たまご料理マスターへの道"
              img-src="https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/705645.jpeg"
              img-alt="Image"
              img-top
            >
              <b-card-sub-title class="mb-2">
                20レシピ
              </b-card-sub-title>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
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
.cource {
  margin-bottom: 32px;
}

.badge {
  @extend %primary;
  font-size: 20px;
}
</style>
