import { mapGetters, mapActions } from "vuex";
import { GChart } from 'vue-google-charts';
import gChartMixins from "../../../mixins/gChartMixins";

export default {
    name: 'ClickThroughRate',
    components: {
        GChart
    },
    mixins:[gChartMixins],
    computed: mapGetters(["clickThruRateDataReports"]),
    methods: {
        ...mapActions(["getClickThruRateReports"]),
    },
    created() {
        this.getClickThruRateReports();
        this.setTitleAndSubtitle('clickThruRate');
    }
};
