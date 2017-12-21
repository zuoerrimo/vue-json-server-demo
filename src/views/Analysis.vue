<template>
  <div>
    <el-container>
      <el-main>
       <line-chart
       :title="title"
       :xAxis="xAxis"
       :yAxis="yAxis"
       :tooltip="tooltip"
       :series="series"
       ></line-chart> 
      </el-main>
    </el-container>
  </div>
</template>
<script>
import lineChart from '@/components/LineChart'
export default {
  name: 'Analysis',
  components: {
    lineChart,
  },
  data() {
    return {
      title: {},
      tooltip: {},
      xAxis: {},
      yAxis: {},
      series: [],
    }
  },
  methods: {
    lineChart() {
        this.title = {
          text: '线图'
        }
        this.tooltip = {}
        this.xAxis = {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        }
        this.yAxis = {}
        this.series = [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
    },

    init() {
      this.lineChart()
    },
  },
  mounted(){
    this.init()
 }
}
</script>
<style scoped>
  .chart {
    height: 300px; 
  }
</style>