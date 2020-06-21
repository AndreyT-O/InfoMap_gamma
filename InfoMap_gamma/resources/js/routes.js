import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
/** User components */
const location = () => import('./components/user/LocationComponent.vue');
const locationCreate = () => import('./components/user/LocationCreateComponent.vue');
const locationUpdate = () => import('./components/user/LocationUpdateComponent.vue');
/** Admin components */
const adminMap = () => import('./components/admin/MapComponent.vue');
const adminUpdateLocation = () => import('./components/admin/LocationUpdateComponent.vue');
const adminCreateLocation = () => import('./components/admin/LocationCreateComponent.vue');

const routes = [
    /**
     * Guest route
     */
    {
        path: '/InfoMap.com/map',
        name: 'map'
    },
    /**
     * User routes
     */
    {
        path: '/InfoMap.com/map/location/:id',
        name: 'location',
        component: location,
        props:true
    },
    {
        path: '/InfoMap.com/user/map',
        name: 'userMap'
    },
    {
        path: '/InfoMap.com/user/map/location/:id',
        name: 'userLocation',
        component: location,
        props:true
    },
    {
        path: '/InfoMap.com/user/map/location/create',
        name: 'userCreateLocation',
        component: locationCreate,
        props:true
    },
    {
        path: '/InfoMap.com/user/map/location/:id/update',
        name: 'userUpdateLocation',
        component: locationUpdate,
        props:true
    },
    /**
     * Admin routes
     */
    {
        path: '/InfoMap.com/admin/map',
        name: 'adminMap',
        component: adminMap
    },
    {
        path: '/InfoMap.com/admin/map/location/:id/update',
        name: 'adminUpdateLocation',
        component: adminUpdateLocation,
        props:true
    },
    {
        path: '/InfoMap.com/admin/map/location/create',
        name: 'adminCreateLocation',
        component: adminCreateLocation,
        props:true
    }
];

const router =  new VueRouter({
    routes,
    mode: 'history'
});

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
});

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
});

export default router;