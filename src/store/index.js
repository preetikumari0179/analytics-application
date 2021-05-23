import Vue from 'vue'
import Vuex from 'vuex';
import report from '../report.json';
Vue.use(Vuex);

function fetchReportData(type) {
  let response = [];
  const column =['Year', type];
  response = report.records.map(function (el) {
    return [ el.date, el[type]];
  });
  response = [column, ...response];
  return response
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
    setSaleReports: (state, reports) => (state.reports = reports),
    setOrderReports: (state, reports) => (state.reports = reports),
    setPageViewsReports: (state, reports) => (state.reports = reports),
    setClickThruRateReports: (state, reports) => (state.reports = reports),

  },
  actions: {
    async getSaleReports({commit}) {
      commit("setSaleReports", fetchReportData('sales'));
    },
    async getOrderReports({commit}) {
      commit("setOrderReports", fetchReportData('orders'));
    },
    async getPageViewReports({commit}) {
      commit("setPageViewsReports", fetchReportData('pageViews'));
    },
    async getClickThruRateReports({commit}) {
      commit("setClickThruRateReports", fetchReportData('clickThruRate'));
    }
  },
  modules: {
  }
});
