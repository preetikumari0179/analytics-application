import { mapActions } from 'vuex';
import gChartMixins from '../../../mixins/gChartMixins';

export default {
  name: 'OrderReports',
  mixins: [gChartMixins],
  methods: {
    ...mapActions(['getOrderReports']),
  },
  created() {
    this.getOrderReports();
    this.setTitle('orders');
  },
};
