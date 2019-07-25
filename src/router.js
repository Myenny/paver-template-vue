import Vue from 'vue'
import Router from 'vue-router'
import ContactUs from '@/components/pages/ContactUs.vue'
import Home from '@/components/pages/Home.vue'
import Users from '@/components/pages/User.vue'
import Register from '@/components/pages/Register.vue'
import Welcome from '@/components/pages/Welcome.vue'

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