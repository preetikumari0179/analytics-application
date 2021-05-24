import { mapActions } from 'vuex';
import gChartMixins from '../../../mixins/gChartMixins';

export default {
  name: 'SaleReports',
  mixins: [gChartMixins],
  methods: {
    ...mapActions(['getSaleReports']),
  },
  created() {
    this.getSaleReports();
    this.setTitle('sales');
  },
};
