<template>
     <swiper :options="swiperOption">
    <swiper-slide class="ps"><img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg" alt=""></swiper-slide>
    <swiper-slide class="ps"><img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1884744230,2095088928&fm=26&gp=0.jpg" alt=""></swiper-slide>
  </swiper>
</template>

<script>
export default {
 name: 'carrousel',
    data() {
      return {
        swiperOption: {
              autoplay:true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
}
</script>

<style lang='scss'>
.ps{
  width:100%;
  height:200px;
  img{
      width:100%;
      height:100%;
  }
}
</style>
