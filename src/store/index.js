import Vue from 'vue';
import Vuex from 'vuex';
import report from '../report';

Vue.use(Vuex);
/**
 * @method: fetchReportData()
 * @description: To get the formatted report according to type of recodes.
 * @return reportdata in Array of array formatted by report.json
 */
function fetchReportData(type) {
  let reportdata = [];
  const column = ['Year', type];
  reportdata = report.records.map(el => [el.date, el[type]]);
  reportdata = [column, ...reportdata];
  return reportdata;
}
export default new Vuex.Store({
  state: {
    reports: {
      sales: null,
      orders: null,
      pageViews: null,
      clickThruRate: null,
    },
  },
  getters: {
    getReports: state => state.reports,
  },
  mutations: {
    setSaleReports: (state, reports) => { state.reports.sales = reports; },
    setOrderReports: (state, reports) => { state.reports.orders = reports; },
    setPageViewsReports: (state, reports) => { state.reports.pageViews = reports; },
    setClickThruRateReports: (state, reports) => { state.reports.clickThruRate = reports; },
  },
  actions: {
    async getSaleReports({ commit }) {
      if(!this.state.reports.sales) {
        commit('setSaleReports', fetchReportData('sales'));
      }
    },
    async getOrderReports({ commit }) {
      if(!this.state.reports.orders) {
        commit('setOrderReports', fetchReportData('orders'));
      }
    },
    async getPageViewReports({ commit }) {
      if(!this.state.reports.pageViews) {
        commit('setPageViewsReports', fetchReportData('pageViews'));
      }
    },
    async getClickThruRateReports({ commit }) {
      if(!this.state.reports.clickThruRate) {
        commit('setClickThruRateReports', fetchReportData('clickThruRate'));
      }
    },
  }
});
