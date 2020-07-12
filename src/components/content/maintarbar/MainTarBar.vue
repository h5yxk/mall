<template>

    <tabbar>
      <tabbaritem path="/home" >
        <img slot="Item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="Item-action" src="~assets/img/tabbar/home_active.svg">
        <div slot="Item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img slot="Item-icon" src="~assets/img/tabbar/category.svg">
        <img slot="Item-action" src="~assets/img/tabbar/category_active.svg">
        <div slot="Item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart">
        <img slot="Item-icon" src="~assets/img/tabbar/shopcart.svg">
        <img slot="Item-action" src="~assets/img/tabbar/shopcart_active.svg">
        <div slot="Item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="Item-icon" src="~assets/img/tabbar/profile.svg">
        <img slot="Item-action" src="~assets/img/tabbar/profile_active.svg">
        <div slot="Item-text">我的</div>
      </tabbaritem>
    </tabbar>

</template>

<script>
  import tabbar from 'components/common/tabbar/TabBar'
  import tabbaritem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTarBar",
    components:{
      tabbar,
      tabbaritem
    }
  }
</script>

<style scoped>

</style>
