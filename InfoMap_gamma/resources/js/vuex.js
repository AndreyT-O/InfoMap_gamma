import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

import router from './routes.js';

const store = new Vuex.Store({
    state: {
        markers: [],
        listLocations:[],
        location: [],
        newMarker:[]
    },
    getters: {
        /** Get all markers */
        GET_MARKERS: state => {
            return state.markers;
        },
        /** Get list title locations */
        GET_LIST_LOCATIONS: state => {
            return state.listLocations;
        },
        /** Get information location */
        GET_LOCATION: state => {
            return state.location;
        },
        /** Get new marker */
        GET_NEW_MARKER: state => {
            return state.newMarker;
        }
    },
    mutations: {
        /** Set all markers */
        SET_MARKERS: (state, payload) => {
            state.markers = [];
            payload.map(obj => {
                state.markers.push(obj);
            })
        },
        /** Set list title locations */
        SET_LIST_LOCATIONS: (state, payload) => {
            state.listLocations = [];
            payload.map(obj => {
                state.listLocations.push(obj);
            });
        },
        /** Set information location */
        SET_LOCATION: (state, payload) => {
            state.location = [];
            payload.map(obj => {
                state.location.push(obj);
            });
        },
        /** Set new marker */
        SET_NEW_MARKER: (state, payload) => {
            state.newMarker = [];
            state.newMarker = payload.marker;
        }
    },
    actions: {
        /** Give new marker  */
        async ADD_NEW_MARKER (context, payload) {
            context.commit('SET_NEW_MARKER',{marker:payload.marker});
        },
        /** Give all markers */
        ADD_MARKERS (context, payload) {
            axios
            .get('/locations')
            .then(data => {
                context.commit('SET_MARKERS',data.data[0]);
            });
        },
        /** Give list title locations */
        async ADD_LIST_LOCATIONS (context, payload) {
            await axios
            .get('/locations')
            .then(data => {
                context.commit('SET_LIST_LOCATIONS',data.data[1]);
            });
        },
        /** Give information location */
        ADD_LOCATION (context, payload) {
            axios
            .get('/location/' + payload.id)
            .then(data => {
                context.commit('SET_LOCATION',data.data);
            })
        },
        /** Update information location */
        async UPDATE_LOCATION (context, payload) {
            NProgress.start();
            payload.url + payload.id
             await axios
            .put(payload.url + payload.id,{
                title      : payload.title,
                text       : payload.text,
                marker     : payload.marker,
                old_images : payload.deleteImages,
                new_images : payload.newImages
            })
            .then(data => {
                $('.updateLocation').prop('disabled',false);
                NProgress.done();
                if(router.history.current.name == 'userUpdateLocation') {
                    $('.sidebar').removeClass('active');
                    router.push({name: 'userMap'});
                    context.commit('SET_NEW_MARKER',{marker:null});
                } else {
                    router.push({name:'adminMap'});
                    store.dispatch('ADD_LIST_LOCATIONS');
                }
                context.dispatch('ADD_MARKERS');
            })
            .catch(error => {
                $('.updateLocation').prop('disabled',false);
                NProgress.done();
                alert('Не всі поля заповненні!');
                console.log(error);
                axios.post('/InfoMap.com/uploads/clear',{
                    image : payload.newImages
                });
            });
        },
        /** Create information location */
        async CREATE_LOCATION (context, payload) {
            NProgress.start();
            await axios
            .post(payload.url, {
                title      : payload.title,
                text       : payload.text,
                marker     : JSON.stringify(payload.marker),
                new_images : payload.newImages
            })
            .then(data => {
                $('.createLocation').prop('disabled',false);
                NProgress.done();
                if(router.history.current.name == 'userCreateLocation') {
                    $('.sidebar').removeClass('active');
                    router.push({name: 'userMap'});
                    context.commit('SET_NEW_MARKER',{marker:null});
                } else {
                    router.push({name:'adminMap'});
                    store.dispatch('ADD_LIST_LOCATIONS');
                }
                context.dispatch('ADD_MARKERS');
            })
            .catch(error => {
                $('.createLocation').prop('disabled',false);
                NProgress.done();
                alert('Не всі заповленні поля!');
                console.log(error);
                axios.post('/InfoMap.com/uploads/clear',{
                    image : payload.newImages
                });
            });
        }
    }
});
export default store