import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import {firebaseApp} from './firebaseApp'

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'

const router = new VueRouter( {
    mode: 'history',
    routes: [
        { path: '/dashboard', component: Dashboard},
        { path: '/signin', component: Signin}
    ]
})

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        router.push('/dashboard')   // push = Create stack history
    } else {
        router.replace('/signin')   // replace = Start new stack
    }
})

new Vue( {
    el: '#app',
    router,
    render: h => h(App)
})