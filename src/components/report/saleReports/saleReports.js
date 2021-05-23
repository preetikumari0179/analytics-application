import { mapGetters, mapActions } from "vuex";
import { GChart } from 'vue-google-charts';
import gChartMixins from "../../../mixins/gChartMixins";

export default {
    name: 'SaleReports',
    components: {
        GChart
    },
    mixins: [gChartMixins],
    computed: mapGetters(["saleDataReports"]),
    methods: {
        ...mapActions(["getSaleReports"]),
    },
    created() {
        this.getSaleReports();
        this.setTitleAndSubtitle('sales');
    }
};
