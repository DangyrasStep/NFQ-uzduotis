// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App'
import vueResource from 'vue-resource'
import uzduotis from './components/uzduotis'
import pirmaUzduotis from './components/pirmauzduotis'
import antraUzduotis from './components/antrauzduotis'

Vue.use(vueRouter);
Vue.use(vueResource);

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: uzduotis,
      meta: {
        title: 'Užduotis'
      }
    },
    {
      path: '/Pirmas-puslapis',
      component: pirmaUzduotis,
      meta: {
        title: 'Pirmas puslapis'
      }
    },
    {
      path: '/Antras-puslapis',
      component: antraUzduotis,
      meta: {
        title: 'Antras puslapis'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  components: {
    App
  },
  template: `
    <div style="margin-top: 0; text-align: left;" id="app">
      <nav>
        <div class="nav-wrapper blue">
          <div class="container">
            <router-link to="/"><a class="brand-logo"><img style="max-height: 50px;margin: 7px;" src="./static/logo.png"></a></router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><router-link to="/">Užduotis</router-link></li>
              <li><router-link to="/pirmas-puslapis">Pirmas puslapis</router-link></li>
              <li><router-link to="/antras-puslapis">Antras puslapis</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  `
}).$mount('#app')
