<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name="Item-icon"></slot>
    </div>
    <div v-else>
      <slot name="Item-action"></slot>
    </div>
    <div :style="actionColor">
      <slot name="Item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      actioncolor:{
        type:String,
        default:'#FF5777'
      }},
      data(){
        return {}
      },
      computed:{
        isActive(){
          //当前选中路由
          return this.$route.path.indexOf(this.path) != -1
        },
        actionColor(){
          return this.isActive?{color:this.actioncolor}:{}
        }
      },
      methods:{
        itemclick(){
          // console.log(this.path)
          this.$router.replace(this.path)
        }
      }

  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    width: 25px;
    height: 25px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: #FF5777;
  }
</style>
