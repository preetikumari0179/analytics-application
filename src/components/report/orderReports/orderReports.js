import { mapGetters, mapActions } from 'vuex';
import gChartMixins from '../../../mixins/gChartMixins';

export default {
  name: 'OrderReports',
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
