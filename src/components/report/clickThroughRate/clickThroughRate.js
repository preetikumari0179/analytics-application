import { mapActions } from 'vuex';
import gChartMixins from '../../../mixins/gChartMixins';

export default {
  name: 'ClickThroughRate',
  mixins: [gChartMixins],
  methods: {
    ...mapActions(['getClickThruRateReports']),
  },
  created() {
    this.getClickThruRateReports();
    this.setTitle('clickThruRate');
  },
};
