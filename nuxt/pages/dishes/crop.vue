<template>
  <div>
    <button>
      <client-only>
        <clipper-upload v-model="imgURL">
          <b-button block class="camera">
            <font-awesome-icon :icon="['fas', 'camera']" />
            撮影する
          </b-button>
        </clipper-upload>
      </client-only>
    </button>
    <client-only>
      <clipper-fixed ref="clipper" class="my-clipper" :src="imgURL">
        <div slot="placeholder" class="placeholder">
          画像はまだありません
        </div>
      </clipper-fixed>
    </client-only>
    <b-button block variant="primary" class="ok-button" @click="getResult">
      この画像を使う
    </b-button>
    <p class="text-muted">
      [デモ用の注意] ※待ち時間が少し長い（10秒以上待つ場合はリロード）
    </p>
    <div>
      <div class="ogp-card-wrapper">
        <div id="ogpCard" class="ogp-card">
          <div class="inner">
            <div class="description">
              <div class="user">
                <div>
                  <img class="user-icon" src="/images/avatar.png" />
                </div>
                れとるときゃりーさんが
              </div>
              <div class="change">
                <span class="new-status"> 新米たまご料理職人 </span><br />
                に昇格しました！
              </div>
              <div class="logp-wapper">
                <img class="logo" src="/images/logo.png" />
              </div>
            </div>
            <div class="image-wrapper">
              <img class="image" :src="resultURL" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgURL: '',
      resultURL: ''
    }
  },
  methods: {
    async getResult() {
      const canvas = this.$refs.clipper.clip()
      this.resultURL = canvas.toDataURL('image/jpeg', 1) // canvas->image
      const dishImageBlob = await this.getBlobFromCanvas(canvas)
      const ogpImageBlob = await this.captureOgpCard()

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
      }
      const formData = new FormData()
      formData.append('image', dishImageBlob)
      formData.append('ogp', ogpImageBlob)
      this.$axios.post('dishes', formData, config).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res)
        this.$router.push('/dishes/' + res.data.data.id)
      })
    },
    getBlobFromCanvas(canvas) {
      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          resolve(blob)
        })
      })
    },
    captureOgpCard() {
      return this.$html2canvas(document.querySelector('#ogpCard')).then(
        (canvas) => {
          return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
              resolve(blob)
            })
          })
        }
      )
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/variable.scss';

.my-clipper {
  margin-top: 16px;
  width: 100%;
  max-width: 700px;
}

.placeholder {
  text-align: center;
  padding: 20px;
  background-color: lightgray;
}

.ok-button {
  margin-top: 12px;
}

$border-width: 16px;

.ogp-card-wrapper {
  position: absolute;
  top: 0;
  right: -600px;

  .ogp-card {
    height: 235.5px;
    width: 450px;
    text-align: center;
    background: $app;
    padding: $border-width;
    margin: 0 auto;
    .inner {
      background: #fff;
      border-radius: $border-width;
      padding: 20px;
      text-align: center;
      margin: auto;
      height: 235.5px - $border-width * 2;
      display: flex;

      .image-wrapper {
        display: flex;
        flex-direction: column;

        .image {
          width: 160px;
          margin: auto;
          border-radius: 8px;
        }
      }

      .description {
        flex: 1;
        font-size: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .user {
          @extend %primary;
          font-size: 8px;
          .user-icon {
            border-radius: 50%;
            width: 40px;
            margin-bottom: 2px;
          }
        }

        .change {
          @extend %secondary;
          font-size: 3px;
          .new-status {
            @extend %primary;
            font-size: 16px;
            background: linear-gradient(transparent 50%, $app 50%);
          }
        }

        .logo {
          margin-bottom: 0;
          height: 22px;
        }
      }
    }
  }
}
</style>
