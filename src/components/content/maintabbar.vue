<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deepPink">
      <template v-slot:tabbaritem-icon>
        <img src="../../assets/img/tabbar/home.svg" alt="" />
      </template>
      <template v-slot:tabbaritem-icon-active>
        <img src="../../assets/img/tabbar/home_active.svg" alt="" />
      </template>
      <template v-slot:tabbaritem-text>首页</template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <template v-slot:tabbaritem-icon>
        <img src="../../assets/img/tabbar/category.svg" alt="" />
      </template>
      <template v-slot:tabbaritem-icon-active>
        <img src="../../assets/img/tabbar/category_active.svg" alt="" />
      </template>
      <template v-slot:tabbaritem-text>分类</template>
    </tab-bar-item>
    <tab-bar-item path="/shopping" activeColor="deepPink">
      <template v-slot:tabbaritem-icon>
        <img src="../../assets/img/tabbar/shopcart.svg" alt="" />
      </template>
      <template v-slot:tabbaritem-icon-active>
        <img src="../../assets/img/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template v-slot:tabbaritem-text>购物</template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <template v-slot:tabbaritem-icon>
        <img src="../../assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template v-slot:tabbaritem-icon-active>
        <img src="../../assets/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template v-slot:tabbaritem-text>我的</template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar.vue";
import TabBarItem from "../common/tabbar/TabBarItem.vue";

export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
