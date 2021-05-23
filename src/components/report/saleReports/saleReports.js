import { mapGetters, mapActions } from 'vuex';
import gChartMixins from '../../../mixins/gChartMixins';

export default {
  name: 'SaleReports',
  mixins: [gChartMixins],
  computed: mapGetters(['saleDataReports']),
  methods: {
    ...mapActions(['getSaleReports']),
  },
  created() {
    this.getSaleReports();
    this.setTitleAndSubtitle('sales');
  },
};
