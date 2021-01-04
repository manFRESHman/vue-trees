<template>
    <div id="app" class="container">
      <div class="col-md-10 col-md-offset-1">
        <div class="page-header">
          <a href="https://github.com/CrazyMrYan/vue-tree-color">https://github.com/CrazyMrYan/vue-tree-color</a>
        </div>
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <form class="form-horizontal row">
              <div class="col-md-4">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" v-model="horizontal" > Horizontal
                  </label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" v-model="collapsable"> Collapsable
                  </label>
                </div>
              </div>
              <div class="col-md-4">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" v-model="expandAll" @change="expandChange"> Expand All
                  </label>
                </div>
              </div>
              <p><br></p>
              <p><br></p>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label col-md-5">labelClassName:</label>
                  <div class="col-md-7">
                    <select class="form-control" v-model="labelClassName">
                      <option value="bg-white">bg-white</option>
                      <option value="bg-orange">bg-orange</option>
                      <option value="bg-gold">bg-gold</option>
                      <option value="bg-gray">bg-gray</option>
                      <option value="bg-lightpink">bg-lightpink</option>
                      <option value="bg-chocolate">bg-chocolate</option>
                      <option value="bg-tomato">bg-tomato</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <p><br></p>
        <div class="text-center">
          <vue2-org-tree
            :data="data"
            :horizontal="horizontal"
            :collapsable="collapsable"
            :label-class-name="labelClassName"
            :render-content="renderContent"
            selected-class-name="bg-tomato"
            selected-key="selectedKey"
            @on-expand="onExpand"
            @on-node-click="onNodeClick"
          />
        </div>
      </div>
    </div>
</template>

<script>
import Vue2OrgTree from 'vue-tree-color'

export default {
    name: 'Tree6',
    components: {
        Vue2OrgTree,
    },
	data() {
        return {
          data: {
            id: 0,
            label: '0',
            children: [{
              id: 2,
              label: '2',
              children: [{
                id: 5,
                label: '5'
              }, {
                id: 6,
                label: '6'
              }, {
                id: 9,
                label: '9'
              }, {
                id: 10,
                label: '10'
              }]
            }, {
              id: 3,
              label: '3',
              children: [{
                id: 7,
                label: '7'
              }, {
                id: 8,
                label: '8'
              }]
            }, {
              id: 4,
              label: '4'
            }, {
              id: 9,
              label: '9'
            }]
          },
          expandAll: false,
          horizontal: false,
          collapsable: true
        };
    },
        methods: {
          labelClassName: function() {
            return 'clickable-node'
          },
          renderContent: function(h, data) {
            return data.label
          },
          onExpand: function(e, data) {
            if ('expand' in data) {
              data.expand = !data.expand

              if (!data.expand && data.children) {
                this.collapse(data.children)
              }
            } else {
              this.$set(data, 'expand', true)
            }
          },
          onNodeClick: function(e, data) {
            console.log('onNodeClick: %o', data)
            this.$set(data, 'selectedKey', !data.selectedKey)
          },
          collapse: function(list) {
            var _this = this
            list.forEach(function(child) {
              if (child.expand) {
                child.expand = false
              }

              child.children && _this.collapse(child.children)
            })
          },
          expandChange: function() {
            this.toggleExpand(this.data, this.expandAll)
          },
          toggleExpand: function(data, val) {
            var _this = this
            if (Array.isArray(data)) {
              data.forEach(function(item){
                _this.$set(item, 'expand', val)
                if (item.children) {
                  _this.toggleExpand(item.children, val)
                }
              })
            } else {
              this.$set(data, 'expand', val)
              if (data.children) {
                _this.toggleExpand(data.children, val)
              }
            }
          }
        }
}
</script>

<style>
    .org-tree-node-label {
      white-space: nowrap;
    }
    .bg-white {
      background-color: white;
    }
    .bg-orange {
      background-color: orange;
    }
    .bg-gold {
      background-color: gold;
    }
    .bg-gray {
      background-color: gray;
    }
    .bg-lightpink {
      background-color: lightpink;
    }
    .bg-chocolate {
      background-color: chocolate;
    }
    .bg-tomato {
      background-color: tomato;
    }
    .clickable-node {
      cursor: pointer;
    }
</style>