<template>
    <div class="container-fluid col-12 p-0">
        <GmapMap
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        @click='onMapClick($event)'
        >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="JSON.parse(m.marker)"
            :clickable="true"
            :draggable="draggableMarker"
            :icon='m.icon'
            :animation=2
            @click='onMarkerClick($event,m,m.id)'
            @dragend="newPosition($event)"
        />
        </GmapMap>
        <div class="buttonCreate col-12 text-right" v-if='activeUser'>
            <button @click='createForm' data-toggle="tooltip" data-placement="top" title="Створення нового місцеположення">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'activeUser'
        ],
        data: () => ({
                center          : {lat:51.1518032,lng:23.6378023},
                markers         : [],
                draggableMarker : false,
                createMarker    :false
        }),
        methods: {
            /**
             * Method click on map
             */
            onMapClick(e){
                if(this.$route.name != 'map' || this.$route.name != 'userMap') {
                    if (this.$route.name == 'userUpdateLocation' || (this.$route.name == 'userCreateLocation' && this.createMarker == false) ) {
                        $('#closeForms').modal('show');
                    } else if(this.$route.name == 'userLocation' || this.$route.name == 'location'){  
                        $('.sidebar').removeClass('active');
                        this.activeUser > 0?
                        this.$router.push({name: 'userMap'}):
                        this.$router.push({name: 'map'});
                        this.$store.dispatch('ADD_MARKERS');

                    } else if(this.$route.name == 'userCreateLocation' && this.createMarker == true){
                        $('.gm-style').find('div').css('cursor','url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur), default');
                        this.markers.push({
                            marker:'{"lat":'+e.latLng.lat()+', "lng":'+e.latLng.lng()+'}',
                            icon: {
                                url:"https://www.pinclipart.com/picdir/big/17-171343_maps-clipart-map-pin-google-maps-marker-blue.png",
                                scaledSize: { width: 27, height: 43, f: "px", b: "px" }
                            }
                        });
                        this.center = {
                            lat: e.latLng.lat() - 0.02317,
                            lng: e.latLng.lng() - 2.18079
                        }
                        this.$store.dispatch('ADD_NEW_MARKER',{
                            marker: {
                                lat:e.latLng.lat(),
                                lng:e.latLng.lng()
                            }
                        })
                        $('.sidebar').addClass('active');
                        this.createMarker = false;
                        this.draggableMarker = true;
                    }
                }
            },
            /**
             * Method insert position new marker
             */
            newPosition(e) {
                this.$store.dispatch('ADD_NEW_MARKER',{
                    marker: {
                        lat:e.latLng.lat(),
                        lng:e.latLng.lng()
                    }
                });
            },
            /**
             * Method click on marker
             */
            onMarkerClick(e,marker,id) {
                if(this.$router.name != 'userUpdateLocation') {
                    
                    this.center = {
                        lat: e.latLng.lat() - 0.02317,
                        lng: e.latLng.lng() - 2.18079
                    }
                    // marker.icon = {
                    //     url:"https://www.pinclipart.com/picdir/big/17-171343_maps-clipart-map-pin-google-maps-marker-blue.png",
                    //     scaledSize: { width: 27, height: 43, f: "px", b: "px" }
                    // }; 
                    
                    this.$store.dispatch('ADD_LOCATION',{id: id});
                    this.activeUser > 0?
                    this.$router.push({name:'userLocation',params:{id: id}}).catch(e=>{}):
                    this.$router.push({name:'location',params:{id: id}}).catch(e=>{});
                }
            },
            /**
             * Method open create form
             */
            createForm: function() {
                if(this.$router.name != 'userCreateLocation') {
                    this.$router.push({name:'userCreateLocation'});
                    this.createMarker = true;
                    $('.sidebar').removeClass('active');
                }
            }
        },
        watch: {
            /**
             * Watch vuex, markers in base
             */
            '$store.getters.GET_MARKERS': {
                handler: function(search) {
                    this.markers = this.$store.getters.GET_MARKERS;
				},
                deep: true,
                immediate: true
			},
            /**
             * Watch vuex, markers in base
             */
            '$route.params': {
                handler: function(search) {
                    if(this.$route.name == 'userUpdateLocation' || this.$route.name == 'userCreateLocation') {
                        this.draggableMarker = true;
                        $('.gm-style').find('div').css('cursor','pointer');
                    } else {
                        this.draggableMarker = false;
                        $('.gm-style').find('div').css('cursor','url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur), default');
                    }
				},
                deep: true,
                immediate: true
			}
        },
        mounted() {
            this.$store.dispatch('ADD_MARKERS');
        }
    }
</script>
