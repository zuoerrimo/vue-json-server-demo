<template>
<div>
  <div class="chart" ref="chart"></div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'LineChart',
  props: {
    title: {
      type: Object,
      default() {                                                           
        return {}
     },
   },
    tooltip: {
      type: Object,
      default() {                                                           
        return {}
     },
    },
    xAxis: {
      type: Object,
      default() {                                                           
        return {}
     },
    },
    yAxis: {
      type: Object,
      default() {                                                           
        return {}
     },
    },
    series: {
      type: Array,
      default() {                                                           
        return []
     },
    }
  },
  watch: {
    title: function() {
      this.lineChart()                                                    
    }
  },
  methods: {
    lineChart() {
      const myChart = echarts.init(this.$refs.chart);
      myChart.setOption({
        title: this.title,
        tooltip: this.tooltip,
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        series: this.series
      })
    },
  }
}
</script>
<style scoped>
  .chart {
    height: 300px; 
  }
</style>