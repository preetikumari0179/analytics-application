<template>
  <div ref="chart"></div>
</template>

<script>
import loadGoogleCharts from '../../lib/googleChartsLoader';
import debounce from 'debounce';

let chartsLib = null;
export default {
  name: 'GChart',
  props: {
    type: {
      type: String,
    },
    data: {
      type: [Array, Object],
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    version: {
      type: String,
      default: 'current',
    },
    settings: {
      type: Object,
      default: () => ({
        packages: ['corechart', 'table'],
      }),
    },
    events: {
      type: Object,
    },
    createChart: {
      type: Function,
    },
    resizeDebounce: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      chartObject: null,
    };
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.drawChart();
      },
    },
    options: {
      deep: true,
      handler() {
        this.drawChart();
      },
    },
    type: {
      deep: true,
      handler() {
        this.createChartObject();
        this.drawChart();
      }
    },
  },
  mounted() {
    loadGoogleCharts(this.version, this.settings).then((api) => {
      chartsLib = api;
      const chart = this.createChartObject();
      this.$emit('ready', chart, api);
      this.drawChart();
    });
    if (this.resizeDebounce > 0) window.addEventListener('resize', debounce(this.drawChart, this.resizeDebounce));
  },
  beforeDestroy() {
    if (this.chartObject && typeof this.chartObject.clearChart === 'function') {
      this.chartObject.clearChart();
    }
  },
  methods: {
    /**
     * @method: drawChart()
     * @description: To Instantiate and draw the chart according to chartObject.
     */
    drawChart() {
      if (!chartsLib || !this.chartObject) return;
      const data = this.getValidChartData();
      if (data) this.chartObject.draw(data, this.options);
    },
    /**
     * @method: getValidChartData()
     * @description: To  get valid the chart options according to data props.
     * @return chart's options according to data props
     */
    getValidChartData() {
      if (this.data instanceof chartsLib.visualization.DataTable) return this.data;
      if (this.data instanceof chartsLib.visualization.DataView) return this.data;
      if (Array.isArray(this.data)) return chartsLib.visualization.arrayToDataTable(this.data);
      if (this.data !== null && typeof this.data === 'object') return new chartsLib.visualization.DataTable(this.data);
      return null;
    },
    /**
     * @method: createChartObject()
     * @description: To get the chart object according to type of chart.
     * @return chartObject  To return google cart object according to type and with listeners.
     */
    createChartObject() {
      const createChart = (el, google, type) => {
        if (!type) throw new Error('please, provide chart type property');
        return new google.visualization[type](el);
      };
      const fn = this.createChart || createChart;
      this.chartObject = fn(this.$refs.chart, chartsLib, this.type);
      this.attachListeners();
      return this.chartObject;
    },
    /**
     * @method: attachListeners()
     * @description: add listeners to google chart listener.
     * if some custom listener added to the component.
     */
    attachListeners() {
      if (!this.events) return;
      Object.entries(this.events).forEach(([event, listener]) => {
        chartsLib.visualization.events.addListener(this.chartObject, event, listener);
      });
    },
  },
};
</script>
