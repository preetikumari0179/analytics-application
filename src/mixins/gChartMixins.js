export default {
  data() {
    return {
      chartOptions: {
        title: '',
        height: 400,
        pointSize: 10,
        legend: { position: 'top', alignment: 'center' },
      },
    };
  },
  methods: {
    setTitleAndSubtitle(title) {
      this.chartOptions.title = title;
    },
  },
};
