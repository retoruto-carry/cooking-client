<template>
  <div>
    <div class="finish-warpper">
      <section class="finish">
        <div class="clear">
          <p class="text">
            CLEAR
          </p>
        </div>
        <div>
          <b-img
            v-if="data.image"
            :src="data.image"
            class="image"
            fluid
            alt="作った料理"
          ></b-img>
        </div>
        <div class="congratulations">
          <p class="text">
            やったね！！
          </p>
        </div>
      </section>
    </div>

    <div class="levelup-warpper">
      <section class="levelup">
        <div class="clear">
          <p class="text">
            LEVEL UP
          </p>
        </div>
        <div class="circle">
          <span class="texts">
            <div class="label">LEVEL</div>
            <div class="amount">2</div>
          </span>
        </div>
        <div class="congratulations">
          <p class="text">
            たまご職人への道
          </p>
        </div>
      </section>
    </div>

    <div class="badge-warpper">
      <section class="badge">
        <div>
          <b-img src="/images/badge.png" class="image" fluid></b-img>
        </div>
        <div class="congratulations">
          <p class="text">
            <span>新米たまご料理職人</span><br />
            に昇格しました
          </p>
        </div>
      </section>
    </div>

    <section class="buttons">
      <p class="desc">
        みんなに共有して自慢しよう！！
      </p>
      <b-button pill block class="tweet" @click="tweet">
        <font-awesome-icon :icon="['fab', 'twitter']" />
        ツイートする
      </b-button>
      <b-button pill block variant="outline-secondary" to="/">
        トップへ戻る
      </b-button>
    </section>

    <section v-if="showResult" class="tweet-result">
      <p>ツイートする内容（実際にはツイートする）</p>
      <p class="">
        れとるときゃりーさんは、新米たまご職人に昇格しました！今日は「最小限オムライス」を作りました！｜Cooking道場
        https://cook.example.com/user/1
      </p>
      <b-img :src="data.ogp" class="image" fluid alt="作った料理"></b-img>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
      showResult: false
    }
  },
  /*
  asyncData({ app, params, error }) {
    return app.$axios
      .get(`/dishes/${params.id}`)
      .then((res) => {
        const data = res.data.data
        return {
          data: data
        }
      })
      .catch((e) => {
        error({ statusCode: 404, message: e.data })
      })
  }
  */
  async created() {
    await this.initResident()
  },
  methods: {
    async initResident() {
      const { data } = await this.$axios.$get(`dishes/${this.$route.params.id}`)
      this.data = data
    },
    tweet() {
      this.showResult = true
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/variable.scss';

.finish-warpper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .finish {
    height: 340px;
    width: 100%;
    background: url('/images/background_levelup.png') 0 0 no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .clear {
      color: white;
      margin-top: 30px;
      @extend %primary;
      font-size: 30px;
    }
    .image {
      width: 160px;
      margin: auto;
      border-radius: 8px;
    }
    .congratulations {
      color: white;
      @extend %primary;
      margin-bottom: 20px;
      font-size: 20px;
    }
  }
}

.levelup-warpper {
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .levelup {
    height: 340px;
    width: 100%;
    background: url('/images/background_levelup2.png') 0 0 no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .clear {
      color: white;
      margin-top: 30px;
      @extend %primary;
      font-size: 30px;
    }
    .circle {
      color: $app;
      background-color: white;
      width: 130px;
      height: 130px;
      text-align: center;
      display: inline-block;
      border-radius: 50%;

      .texts {
        margin: 250px;
        .label {
          @extend %primary;
          color: $app;
          font-size: 10px;
        }
        .amount {
          margin-top: 10px;
          @extend %primary;
          color: $app;
          font-size: 45px;
        }
      }
    }
    .congratulations {
      color: white;
      @extend %primary;
      margin-bottom: 20px;
      font-size: 20px;
    }
  }
}

.badge-warpper {
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .badge {
    height: 340px;
    width: 100%;
    background: url('/images/background_levelup3.png') 0 0 no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .image {
      padding-top: 70px;
      width: 100px;
      margin: auto;
    }
    .congratulations {
      color: white;
      @extend %primary;
      margin-bottom: 20px;
      font-size: 20px;
    }
  }
}

.buttons {
  .desc {
    text-align: center;
    @extend %primary;
  }
  margin-top: 64px;
  .tweet {
    background-color: #4dd2ed;
  }
}

.tweet-result {
  margin-top: 64px;
}
</style>
