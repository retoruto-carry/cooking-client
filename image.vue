<template>
  <input type="file" name="iconImage" @change="onFileInputChange" />
</template>

<script>
import * as loadImage from 'blueimp-load-image'

export default {
  data() {
    return {
      twitterCardImage: '',
      iconImage: ''
    }
  },
  methods: {
    onFileInputChange(e) {
      e.preventDefault()
      const files = e.target.files || e.dataTransfer.files
      // 画像でない場合は終了
      if (files[0].type !== 'image/png' && files[0].type !== 'image/jpeg') {
        this.clearInput()
        alert('使用できる形式はpng/jepg/jpgのみです')
        return false
      }

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        const img = new Image()
        img.src = reader.result
        img.onload = () => {
          // リサイズしてImage形式->canvas形式にする
          const canvas = loadImage.scale(
            img, // img or canvas element
            {
              maxWidth: 160,
              maxHeight: 70,
              canvas: true
            }
          )
          // canvas形式->blob形式にして保存
          this.simpleTweetButton.iconImage = this.toBlob(canvas)
        }
      }
      this.createImageOnButton(files[0])
    },
    captureCanvas() {
      return this.$html2canvas(this.$refs.ogpIllustImage.$el).then((canvas) => {
        return new Promise((resolve, reject) => {
          canvas.toBlob((blob) => {
            resolve(blob)
          })
        })
      })
    },
    upload(blob) {
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      const url = 'b'
      const formData = new FormData()
      formData.append(
        'twitterCardImage',
        this.simpleTweetButton.twitterCardImage
      )
      formData.append('iconImage', blob)
      this.$axios.post(url, formData, config).then((res) => {
        // post成功後作成したページに遷移
        this.$router.push('/b/' + res.data.data.id + '?afterCreated=true')
      })
    }
  }
}
</script>

<style scoped>
#btnCard {
  height: 235.5px;
  width: 450px;
  border: 3px solid black;
  text-align: center;
}
#btnCard .c-btn {
  min-width: 115px;
  padding: 17px;
  font-size: 14px;
}
#btnCard h5 {
  font-size: 24px;
}
#btnCard-inner {
  padding: 12px;
}
.button-img {
  height: 40px;
}
.validationWarning {
  color: red;
  margin: 8px;
  margin-bottom: 24px;
}

.vue-tags-input {
  max-width: none;
}
</style>
