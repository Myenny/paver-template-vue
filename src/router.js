import Vue from 'vue'
import Router from 'vue-router'
import ContactUs from '@/pages/ContactUs.vue'
import Home from '@/pages/Home.vue'
import Users from '@/pages/User.vue'
import Register from '@/pages/Register.vue'
import Welcome from '@/pages/Welcome.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/ContactUs',
            name: 'ContactUs',
            component: ContactUs
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/Users',
            name: 'Users',
            component: Users
        },
        {
            path: '/Welcome',
            name: 'Welcome',
            component: Welcome
        }
    ]
})