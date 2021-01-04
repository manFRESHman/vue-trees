<template>
    <div class="wrapper">
        <a href="https://github.com/David-Desmaisons/Vue.D3.tree">https://github.com/David-Desmaisons/Vue.D3.tree</a>
        <tree :data="tree" node-text="name" layoutType="vertical">
        </tree>    
    </div>
</template>
<script>
import {tree} from 'vued3tree'

export default {
  components: {
    tree
  },
  data() {
    return {
      tree: {
        name: "father",
        children:[{
          name: "son1",
          children:[ {name: "grandson"}, {name: "grandson2"}]
        },{
          name: "son2",
          children:[ {name: "grandson3"}, {name: "grandson4"}]
        }]
      }
    }
  }
}
</script>
<style scoped>
    .wrapper {
        background: rgb(244, 244, 244);
        position: relative;
        height: 300px;
        width: 300px;
    }
</style>