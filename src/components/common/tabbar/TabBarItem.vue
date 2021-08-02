<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="tabbaritem-icon"></slot>
        </div>
        <div v-else>
            <slot name="tabbaritem-icon-active"></slot>
        </div>
        <!-- 这种方法没法让使用者改变点击时字体高亮颜色 -->
        <!-- <div :class="{active: isActive}">
            <slot name="tabbaritem-text"></slot>
        </div> -->
        <div :style="activeStyle">
            <slot name="tabbaritem-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 89px;
}
.tab-bar-item img {
    width: 29px;
    height: 29px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
.active {
    color: red;
}
</style>
