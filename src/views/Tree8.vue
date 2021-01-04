<template>
    <div>
        <a href="https://github.com/qq449245884/vue-okr-tree">https://github.com/qq449245884/vue-okr-tree</a>
        <div class="filter-wrapper">
            <input type="text" v-model="filterText" placeholder="输入关键字进行过滤">
        </div>

        <vue-okr-tree
            ref="tree"
            :data="testData"
            direction="horizontal"
            current-lable-class-name="crrentClass"
            :filter-node-method="filterNode"
            show-collapsable
            default-expand-all
        ></vue-okr-tree>
    </div>
</template>

<script>
import {VueOkrTree} from 'vue-okr-tree';
import 'vue-okr-tree/dist/vue-okr-tree.css'

  export default {
    components: {
      'vue-okr-tree': VueOkrTree
    },
    data () {
      return {
      filterText: '',
      testData: [{
        id: 1,
        label: '1',
        children: [{
          id: 2,
          label: '2',
          children: [{
            id: 3,
            label: '3',
          }, {
            id: 4,
            label: '4',
          }, {
            id: 5,
            label: '5',
          }]
        }, {
          id: 6,
          label: '6',
          children: [{
              id: 7,
              label: '7',
            },{
              id: 8,
              label: '8',
            }
          ]
        },{
          id: 9,
          label: '9'
        }]
      }],
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      getNodeById () {
        const node = this.$refs.tree.getNode(7)
        alert(node.data.label)
      },
      getNodeByData () {
        const node = this.$refs.tree.getNode({id: 7,label: '销售一部'})
        alert(node.data.label)
      },
      setCurrentNode () {
        const node = this.$refs.tree.getNode(7)
        this.$refs.tree.setCurrentNode(node)
      },
      getCurrentNode () {
        const node = this.$refs.tree.getCurrentNode()
        if (!node) {
          alert('当前没有选中节点')
        } else {
          alert(`当前选中的节点是"${node.label}"`)
        }
      },
      remove () {
        const node = this.$refs.tree.getNode(2)
        this.$refs.tree.remove(node)
      },
      append () {
        const node = this.$refs.tree.getNode(6)
        const appData = {
          id: 10,
          label: '销售三部'
        }
        if (this.$refs.tree.getNode(10)) {
          alert('已经存在了，不可在增加了')
        } else {
          this.$refs.tree.append(appData, node)
        }
      },
      insertBefore () {
        const node = this.$refs.tree.getNode(6)
        const appData = {
          id: 11,
          label: '11'
        }
        if (this.$refs.tree.getNode(11)) {
          alert('已经存在了，不可在增加了')
        } else {
          this.$refs.tree.insertBefore(appData, node)
        }
      },
      insertAfter () {
        const node = this.$refs.tree.getNode(6)
        const appData = {
          id: 11,
          label: '11'
        }
        if (this.$refs.tree.getNode(11)) {
          alert('已经存在了，不可在增加了')
        } else {
          this.$refs.tree.insertAfter(appData, node)
        }
      }
    }
  }
</script>
<style>
.crrentClass{
  color: red;
}
</style>