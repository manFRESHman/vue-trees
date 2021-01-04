<template>
  <div style="height:200px">
    <a href="https://github.com/zingchart/ZingChart">https://github.com/zingchart/ZingChart</a>
    <zingchart :height="'100%'" ref="myChart" 
        :data="chartData" >
    </zingchart>
</div>
</template>

<script>

import 'zingchart/es6';
import 'zingchart/modules-es6/zingchart-tree.min.js';

import zingchartVue from 'zingchart-vue';

export default {
    name: 'Tree3',
    components: {
        zingchart: zingchartVue,
    },
	data() {
		return {
            chartData: {
                type: 'tree',
                options: {
                  //aspect: 'tree-down',
                  link: {
                      aspect: 'arc'
                  },
                  maxSize: 15,
                  minSize: 5,
                  node: {
                      type: 'circle',
                      tooltip: {
                        padding: '8px 10px',
                        borderRadius: '3px',
                      }
                  }
                },
                series: [{
                id: 'theworld',
                parent: '',
                name: 'The World',
                },
                {
                id: 'asia',
                parent: 'theworld',
                name: 'Asia',
                value: 4100000000
                },
                {
                id: 'africa',
                parent: 'theworld',
                name: 'Africa',
                value: 1260000000
                },
                {
                id: 'america',
                parent: 'theworld',
                name: 'America',
                value: 328000000
                },
                {
                id: 'europe',
                parent: 'theworld',
                name: 'Europe',
                value: 741000000
                },
                {
                id: 'ca',
                parent: 'america',
                name: 'California',
                value: 32000000
                },
                {
                id: 'ny',
                parent: 'america',
                name: 'New York',
                value: 19000000
                },
                {
                id: 'txt',
                parent: 'america',
                name: 'Texas',
                value: 29000000
                },
            ]
            }
		}
    },
    created() {
    },
    mounted() {
    }
}
</script>

<style>
    .zc-html,
    .zc-body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
 
    .chart--container {
      height: 100%;
      width: 100%;
      min-height: 530px;
    }
 
    .zc-ref {
      display: none;
    }
 
    select {
      margin: 10px;
    }
</style>