<template>
    <div class="container-fluid p-0" v-if='location'>
        <div class="slider" v-if='images.length != 0'>
            <vueper-slides
            ref="vueperslides1"
            class='primary'
            @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
            :bullets="false"
            fixed-height="300px"
            :progress='true'>
                <vueper-slide
                v-for='(image, i) in images'
                :key='i'
                :image='image.image_url'>
                </vueper-slide>
            </vueper-slides>
            <div class='optionsLocation' v-if='activeUser == userId'>
                <i class="fas fa-pen updateLocation" @click='updateLocation' title='Редагування'></i>
                <i class="fas fa-trash deleteLocation" @click='deleteLocation' title="Видалення"></i>
            </div>
            <vueper-slides
            ref="vueperslides2"
            class='thumbnails'
            :dragging-distance="50"
            @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
            :visible-slides="3"
            fixed-height="100px"
            :bullets="false"
            :slideImageInside='true'
            :arrows="false"
            >
                <vueper-slide
                v-for='(image, i) in images'
                :key='i'
                :image='image.image_url'
                @click.native="$refs.vueperslides2 && $refs.vueperslides2.goToSlide(i)">
                </vueper-slide>
            </vueper-slides>

        </div>
        <div class="closeLocation col-12 col-md-5 col-lg-4 p-0">
            <i @click='closeLocation' class="fas fa-arrow-alt-circle-left"></i>
        </div>
        <div class="title text-center">
            <h2>
                {{location.title}}
            </h2>
        </div>
        <div class="text text-justify">
            <p>
                {{location.text}}
            </p>
        </div>
        <div class="reviews" v-if='reviews'>
            <div class="review-title col-12">
                <h4>
                    Коментарії:
                </h4>
            </div>
            <div class="review-input-form col-12 mt-2 mb-4" v-if='activeUser > 0'>
                <form enctype="multipart/form-data" onsubmit="return false;">
                    <div class="form-group mb-4">
                        <textarea name='review' class="form-control" id="review" v-model='reviewText' rows="3"></textarea>
                        <button @click='createReview()' id='reviewButton' type="submit" class="btn btn-outline-primary btn-sm float-right m-2" disabled>Коментувати</button>
                    </div>
                </form>
            </div>
            <div class="review-hide"></div>
            <div class="reviews-form col-12 mb-2" v-for='review in reviews' :key='review.id'>
                <div class="card card-white post">
                    <div class="post-heading">
                        <div class="float-left user-image col-2">
                            <img src="http://bootdey.com/img/Content/user_3.jpg" alt="" width="60px" class="img-circle avatar">
                        </div>
                        <div class="float-left user-info col-10 row">
                            <div class="title col-12 p-0">
                                <h5 class='float-left pl-4'>
                                    {{review.surname}}
                                </h5>
                                <p class="text-muted float-right small">
                                    {{review.updated_at.substring(0,10)}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="post-description text-fluid">
                        <p>
                            {{review.review}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { VueperSlides, VueperSlide } from 'vueperslides';
    export default {
        components: { VueperSlides, VueperSlide },
        props: [
            'activeUser'
        ],
        data: () => ({
            userId     : '',
            reviewText : '',
            location   : [],
            reviews    : [],
            images     : []
        }),
        methods: {
            /**
             * Method Vueper Slides
             */
            showNext: function() {},
            /**
             * MEthod close location
             */
            closeLocation: function() {
                $('.sidebar').removeClass('active');
                this.$route.name == 'userLocation'?
                this.$router.push({name: 'userMap'}):
                this.$router.push({name: 'map'});
                // this.$store.dispatch('ADD_MARKERS');
            },
            /**
             * Method delete location
             */
            deleteLocation: function() {
                this.$emit('deleteloc',this.location.id);
            },
            /**
             * Method update location
             */
            updateLocation : function() {
                this.$router.push({name: 'userUpdateLocation',params: {id:this.location.id}});
            },
            /**
             * Method create review
             */
            createReview: function() {
                let vue = this;
                axios
                .post('/InfoMap.com/user/map/location/'+this.location.id+'/review',{
                    review      : this.reviewText,
                    location_id : this.location.id
                })
                .then(function(data) {
                    vue.reviewText = null;
                    setTimeout(() => {
                        $('#reviewButton').prop('disabled',true);
                    }, 1000);
                    $('.review-hide').after(
                        $('<div/>').attr('class','reviews-form col-12 mb-2 previeReview').append(
                            $('<div/>').attr('class','card card-white post').append(
                                $('<div/>').attr('class','post-heading').append(
                                    $('<div/>').attr('class','float-left user-image col-2').append(
                                        $('<img/>').attr({
                                            'src'   :'http://bootdey.com/img/Content/user_3.jpg',
                                            'class' :'img-circle avatar'
                                        })
                                    ),
                                    $('<div/>').attr('class','float-left user-info col-10 row').append(
                                        $('<div/>').attr('class','title col-12 p-0').append(
                                            $('<h5/>').attr('class','float-left pl-4').text(data.data.surname),
                                            $('<p/>').attr('class','text-muted float-right small').text(data.data.updated_at.substring(0,10))
                                        )
                                    )
                                ),
                                $('<div/>').attr('class','post-description text-fluid').append(
                                    $('<p/>').text(data.data.review)
                                )
                            )
                        )
                    )
                })
                .catch(error => {alert('Неправильно введенні дані');console.log(error);});
            }
        },
        watch: {
            /**
             * Watch vuex, location in base
             */
            '$store.getters.GET_LOCATION': {
                handler: function(search) {
                    this.location = this.$store.getters.GET_LOCATION[0];
                    this.reviews  = this.$store.getters.GET_LOCATION[1];
                    this.userId   = this.$store.getters.GET_LOCATION[0]['user_id'];
                    this.images   = this.$store.getters.GET_LOCATION[2];
                    $('.sidebar').addClass('active');
                    $('.previeReview').remove();
                    setTimeout( () => {
                        this.$refs.vueperslides1.goToSlide(0);
                    }, 1000 );
				},
                deep: true,
                immediate: true
            },
            /**
             * Watch new review text
             */
            reviewText: function() {
                /^\s+|\s+$/g.test(this.reviewText) || this.reviewText== ''?
                $('#reviewButton').prop('disabled',true):
                $('#reviewButton').prop('disabled',false);
            }
        }
    }
</script>