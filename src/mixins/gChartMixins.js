export default {
  data() {
    return {
      chartOptions: {
        title: '',
        height: 400,
        pointSize: 4,
        legend: { position: 'top', alignment: 'center' },
        vAxis: {
          minorGridlines: {
            multiple: 0,
          },
        }
      },
    };
  },
  methods: {
    setTitleAndSubtitle(title) {
      this.chartOptions.title = title;
    },
  },
};
