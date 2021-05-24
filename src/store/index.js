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
    reports: [],
  },
  getters: {
    saleDataReports: state => state.reports,
    orderDataReports: state => state.reports,
    pageViewDataReports: state => state.reports,
    clickThruRateDataReports: state => state.reports,

  },
  mutations: {
    setReports: (state, reports) => { state.reports = reports; },
  },
  actions: {
    async getSaleReports({ commit }) {
      commit('setReports', fetchReportData('sales'));
    },
    async getOrderReports({ commit }) {
      commit('setReports', fetchReportData('orders'));
    },
    async getPageViewReports({ commit }) {
      commit('setReports', fetchReportData('pageViews'));
    },
    async getClickThruRateReports({ commit }) {
      commit('setReports', fetchReportData('clickThruRate'));
    },
  },
  modules: {
  },
});
