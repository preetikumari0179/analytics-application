import { mapGetters, mapActions } from "vuex";
export default {
    name: 'SaleReports',
    computed: mapGetters(["allReport"]),
    methods: {
        ...mapActions(["getReports"]),
    },
    created() {
        this.getReports();
    }
};
