require('./bootstrap');

window.Vue = require('vue');

/**
 * Global import vue-router
 */
import router from './routes.js';

/**
 * Global import vuex
 */
import store from './vuex.js';


/** Import vue2-google.maps */
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCheUi_teeeCbBHW3niSAj3QaTvJgTNTRk',
      libraries: 'places', 
    }
});

Vue.component('map-component', require('./components/user/MapComponent.vue').default);
Vue.component('list-locations', require('./components/admin/LocationListComponent.vue').default);

const app = new Vue({
    el: '#warder',
    router,
    store,
    data() {
        return {
            items               : ['login','register'],
            initialization      : 'login',
            locationId          : '',
            /** User data */
            userPassword        : '',
            userPasswordCorfirm : '',
            /** Admin data */
            adminLocation       : '',
            adminId             : ''
        }
    },
    methods: {
        /**
         * Method open modal for delete location
         */
        modalDelete: function(id) {
            this.locationId = id;
            $('#removeForms').modal('show');
        },
        /**
         * Method delete location 
         */
        deleteLocation: function(e) {
            axios
            .delete("/InfoMap.com/user/map/location/"+e)
            .then(data => {
                store.dispatch('ADD_MARKERS');
                router.push({name:'userMap'});
                $('.sidebar').removeClass('active');
            })
            .catch(error => {
                alert('error');
                console.log(error);
            });
        },
        /**
         * Method close form
         */
        closeForm: function() {
            store.dispatch('ADD_MARKERS');
            $('.sidebar').removeClass('active');
            router.push({name: 'userMap'});
        },
        /**
         * Method show modal windows for admin
         */
        showCloseAdminForm: function(e) {
            this.adminLocation = e.name;
            this.adminId = e.id??null;
            $('#modalAdminClose').modal('show');
        },
        /**
         * Method check inputs for login
         */
        closeAdminForm: function() {
            if(this.adminLocation == 'adminUpdateLocation') {
                router.push({name: this.adminLocation, params: {id:this.adminId} });
                store.dispatch('ADD_LOCATION',{id:this.adminId});
            } else {
                router.push({name: this.adminLocation});
                $('.nav a').removeClass('active');
                this.adminLocation == 'adminMap'?
                $('.basicMap').addClass('active'):
                $('.create').addClass('active');
            } 
        }
    },
    watch: {
        /**
         * Watch password confirm
         */
        userPasswordCorfirm: function() {
            if(this.userPasswordCorfirm != this.userPassword) {
                $('#password-confirm1').addClass('is-invalid');
                $('.registerIn').prop('disabled',true);
            } else {
                $('#password-confirm1').removeClass('is-invalid');
                $('.registerIn').prop('disabled',false);
            }
        },
        userPassword: function() {
            this.userPassword = this.userPassword.replace(/[А-Яа-яЁё]/, '');
             if(this.userPassword.length < 8) {
                $('.registerIn').prop('disabled',true);
                $('.logIn').prop('disabled',true);
                $('#password1').addClass('is-invalid');
                $('#password').addClass('is-invalid');
            } else {
                $('.registerIn').prop('disabled',false);
                $('.logIn').prop('disabled',false);
                $('#password1').removeClass('is-invalid');
                $('#password').removeClass('is-invalid');
            }
        }
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});