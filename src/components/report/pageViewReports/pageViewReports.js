import { mapGetters, mapActions } from 'vuex';
import gChartMixins from '../../../mixins/gChartMixins';

export default {
  name: 'PagViewReports',
  mixins: [gChartMixins],
  computed: mapGetters(['pageViewDataReports']),
  methods: {
    ...mapActions(['getPageViewReports']),
  },
  created() {
    this.getPageViewReports();
    this.setTitleAndSubtitle('pageViews');
  },
};
