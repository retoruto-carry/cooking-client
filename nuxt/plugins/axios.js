// eslint-disable-next-line prettier/prettier
export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    $axios.setHeader('Access-Control-Allow-Origin', '*')
  })
}
