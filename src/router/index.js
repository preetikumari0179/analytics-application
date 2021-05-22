import { createRouter, createWebHistory } from 'vue-router'
const Report = () =>   import('../components/report');
const OrderReports = () =>   import('../components/report/orderReports');
const ClickThroughRate = () =>   import('../components/report/clickThroughRate');
const PageViewReports = () =>   import('../components/report/pageViewReports');
const SaleReports = () =>   import('../components/report/saleReports');

const routes = [
  {
    path: '/',
    redirect: {
      name: "SaleReports"
    },
    name: 'Report',
    component: Report,
    children: [
        {
          path: 'orders',
          component: OrderReports,
          name: 'OrderReports',
        },
      {
        path: 'clickThroughRate',
        component: ClickThroughRate,
        name: 'ClickThroughRate',
      },
      {
        path: 'pageViews',
        component: PageViewReports,
        name: 'PageViewReports',
      },
      {
        path: 'sales',
        component: SaleReports,
        name: 'SaleReports',
      }
      ]
  },
  {
    path: '/*',
    name: 'NotFoundPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/NotFoundPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router