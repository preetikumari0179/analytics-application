import { mapActions } from 'vuex';
import gChartMixins from '../../../mixins/gChartMixins';

export default {
  name: 'PagViewReports',
  mixins: [gChartMixins],
  methods: {
    ...mapActions(['getPageViewReports']),
  },
  created() {
    this.getPageViewReports();
    this.setTitle('pageViews');
  },
};
