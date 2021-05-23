import { mapGetters, mapActions } from 'vuex';
import { GChart } from 'vue-google-charts';
import gChartMixins from '../../../mixins/gChartMixins';

export default {
  name: 'OrderReports',
  components: {
    GOrderChart: GChart,
  },
  mixins: [gChartMixins],
  computed: mapGetters(['orderDataReports']),
  methods: {
    ...mapActions(['getOrderReports']),
  },
  created() {
    this.getOrderReports();
    this.setTitleAndSubtitle('orders');
  },
};
