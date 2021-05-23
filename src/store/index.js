import Vue from 'vue';
import Vuex from 'vuex';
import report from '../report';

Vue.use(Vuex);

function fetchReportData(type) {
  let response = [];
  const column = ['Year', type];
  response = report.records.map((el) => [el.date, el[type]]);
  response = [column, ...response];
  return response;
}
export default new Vuex.Store({
  state: {
    reports: [],
  },
  getters: {
    saleDataReports: (state) => state.reports,
    orderDataReports: (state) => state.reports,
    pageViewDataReports: (state) => state.reports,
    clickThruRateDataReports: (state) => state.reports,

  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setSaleReports: (state, reports) => { state.reports = reports; },
    /* eslint-disable no-param-reassign */
    setOrderReports: (state, reports) => { state.reports = reports; },
    /* eslint-disable no-param-reassign */
    setPageViewsReports: (state, reports) => { state.reports = reports; },
    /* eslint-disable no-param-reassign */
    setClickThruRateReports: (state, reports) => { state.reports = reports; },
  },
  actions: {
    async getSaleReports({ commit }) {
      commit('setSaleReports', fetchReportData('sales'));
    },
    async getOrderReports({ commit }) {
      commit('setOrderReports', fetchReportData('orders'));
    },
    async getPageViewReports({ commit }) {
      commit('setPageViewsReports', fetchReportData('pageViews'));
    },
    async getClickThruRateReports({ commit }) {
      commit('setClickThruRateReports', fetchReportData('clickThruRate'));
    },
  },
  modules: {
  },
});
