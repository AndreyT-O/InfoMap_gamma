<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Карта</h1>
                    </div>
                </div>
            </div>
        </div>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="container fullMap">
                            <GmapMap
                                :center="center" 
                                :zoom="6"
                                map-type-id="terrain">
                                <GmapMarker
                                    v-for='(marker,id) in markers'
                                    :key='id'
                                    :position="JSON.parse(marker.marker)"
                                    :clickable="true"
                                    :draggable="false"
                                    :animation=2
                                    @click='seeLocation(marker.id)'
                                />
                            </GmapMap>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: () => ({
            markers : [],
            center  : {lat:51.1518032,lng:23.6378023}
        }),
        methods: {
            /**
             * Method see information location
             */
            seeLocation: function(e) {
                this.$store.dispatch('ADD_LOCATION',{id:e});
                this.$router.push({name:'adminUpdateLocation', params: {id:e}});
            }
        },
        watch: {
            /**
             * Watch Vuex GET_MARKERS
             */
            '$store.getters.GET_MARKERS': {
                handler: function(search) {
                    this.markers = this.$store.getters.GET_MARKERS;
				},
                deep: true,
                immediate: true
            },
            /**
             * Watch Route
             */
            '$route.params': {
                handler: function(search) {
                    if(this.$route.name == 'adminMap') {
                        $('.nav a').removeClass('active');
					    $('.basicMap').addClass('active');
                    }
				},
                deep: true,
                immediate: true
			},
        },
        mounted() {
            this.$store.dispatch('ADD_MARKERS');
        }
    }
</script>
