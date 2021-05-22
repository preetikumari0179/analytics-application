import { createStore } from 'vuex';
import report from '../report.json';

export default createStore({
  state: {
    reports: [],
  },
  getters: {
    allReport: state => state.reports,
  },
  mutations: {
    setReports: (state, reports) => (state.reports = reports),
  },
  actions: {
    async getReports({commit}) {
      const response = report;
      commit("setReports", response);
    }
  },
  modules: {
  }
})
