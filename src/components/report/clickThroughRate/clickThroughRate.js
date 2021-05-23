import { mapGetters, mapActions } from 'vuex';
import gChartMixins from '../../../mixins/gChartMixins';

export default {
  name: 'ClickThroughRate',
  mixins: [gChartMixins],
  computed: mapGetters(['clickThruRateDataReports']),
  methods: {
    ...mapActions(['getClickThruRateReports']),
  },
  created() {
    this.getClickThruRateReports();
    this.setTitleAndSubtitle('clickThruRate');
  },
};
