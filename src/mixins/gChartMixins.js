export default {
  data() {
    return {
      chartOptions: {
        title: '', // Text to display above the chart.
        height: 400, // Height of the chart, in pixels.
        pointSize: 4, // Diameter of displayed points in pixels
        legend: { position: 'top', alignment: 'center' }, // An object with members to configure various aspects of the legend.
        vAxis: {
          minorGridlines: {
            multiple: 0,
          },
        }
      },
    };
  },
  methods: {
    /**
     * @method: setTitle()
     * @param  title  is text to display above the chart.
     * @description: Method is used to set title of chartOptions.title
     */
    setTitle(title) {
      this.chartOptions.title = title;
    },
  },
};
