<template>
     <div class="da">
         <div class="shang">
            
         </div>
         <div class="zhong">
           <router-view />
         </div>
         <div class="xia">
             <router-link to="/home/zuo" tag='span'>首页</router-link>
             <router-link to="/home/you" tag='span'>我的</router-link>
         </div>
     </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.da{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
}
.shang{
    width:100%;
    height:50px;
    background:black;
}
.zhong{
    flex:1;
    overflow:auto;
}
.xia{
    width:100%;
    height:50px;
    line-height:50px;
    text-align:center;
    background:#ccc;
    display:flex;
    span{
        flex:1;
        text-decoration:none;
    }
}
</style>
