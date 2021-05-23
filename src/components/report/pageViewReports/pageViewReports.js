import { mapGetters, mapActions } from "vuex";
import { GChart } from 'vue-google-charts';
import gChartMixins from "../../../mixins/gChartMixins";


export default {
    name: 'PagViewReports',
    components: {
        GChart
    },
    mixins:[gChartMixins],
    computed: mapGetters(["pageViewDataReports"]),
    methods: {
        ...mapActions(["getPageViewReports"]),
    },
    created() {
        this.getPageViewReports();
        this.setTitleAndSubtitle('pageViews');
    }
};
