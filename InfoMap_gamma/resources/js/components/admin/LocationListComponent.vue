<template>
    <div class="sidebar">
		<nav class="mt-2">
			<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
				<li class='nav-item'>
					<a href="#" class="nav-link basicMap" @click='seeMap($event)'>
						<i class="nav-icon fas fa-map-marked-alt"></i>
						<p>
							Головна
						</p>
					</a>
				</li>
				<li class="nav-item has-treeview">
					<a href="#" class="nav-link listLocation">
						<i class="nav-icon fas fa-atlas"></i>
						<p>
							Локації
							<i class="right fas fa-angle-left"></i>
						</p>
					</a>
					<ul class="nav nav-treeview">
						<li class="nav-item" v-for='(location,index) in locations' :key='index' @click='seeLocation(location.id,$route.name)'>
							<!-- <router-link class='nav-link' :id='`location_`+location.id' :to="{name:'adminUpdateLocation',params:{id:location.id}}">
								<i class="far fa-circle nav-icon"></i>
								<p>{{location.title}}</p>
							</router-link> -->
							<a class='nav-link' :id='`location_`+location.id'>
								<i class="far fa-circle nav-icon"></i>
								<p>{{location.title}}</p>
							</a>
						</li>
					</ul>
				</li>
				<li class='nav-item'>
					<a href="#" class="nav-link create" @click='seeCreate($event)'>
						<i class="nav-icon fas fa-plus-square"></i>
						<p>
							Створити
						</p>
					</a>
				</li>
			</ul>
		</nav>
		
    </div>
</template>

<script>
    export default {
        data()  {
            return {
				locations : []
            }
        },
        methods: {
			/**
			 * Method see location page
			 */
            seeLocation: function(id,name) {
				if(this.$route.name == 'adminUpdateLocation' || this.$route.name == 'adminCreateLocation') {
					this.$route.name == 'adminCreateLocation'?
					this.$emit('showform',{name:'adminUpdateLocation',id}):
					this.$emit('showform',{name,id});
				} else {
					this.$router.push({name:"adminUpdateLocation",params:{id:id}})
					this.$store.dispatch('ADD_LOCATION',{id:id});
				}
				
			},
			/**
			 * Method see basic page
			 */
			seeMap: function(e) {
				if(this.$route.name == 'adminUpdateLocation' || this.$route.name == 'adminCreateLocation') {
					this.$emit('showform',{name:'adminMap'});
				} else {
					$('.nav a').removeClass('active');
					$('.basicMap').addClass('active');
					this.$router.push({name:'adminMap'});
				}
			},
			/**
			 * Method see create page
			 */
			seeCreate: function(e) {
				if(this.$route.name == 'adminUpdateLocation') {
					this.$emit('showform',{name:'adminCreateLocation'});
				} else {
					$('.nav a').removeClass('active');
					$('.create').addClass('active');
					this.$router.push({name:'adminCreateLocation'});
				}
			}
        },
        watch: {
			/**
			 * Watch vuex getters GET_LISTLOCATIONS
			 */
            '$store.getters.GET_LIST_LOCATIONS': {
                handler: function(search) {
                    this.locations = this.$store.getters.GET_LIST_LOCATIONS;
				},
                deep: true,
                immediate: true
			}
        },
        mounted() {
            this.$store.dispatch('ADD_LIST_LOCATIONS');
		}
    }
</script>
