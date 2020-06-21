<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h4 class="m-0 text-dark">Локація - {{title}} - (Редагування)</h4>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <!-- <router-link 
                            class='nav-link active' 
                            :to="{ name: 'adminMap' }">   
                                Головна
                            </router-link ></li> -->
                            <!-- <a class='nav-link active' @click='goToBasic'>Головна</a> -->
                        </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="info">
                            <form method="POST" onsubmit="return false;">
                                <div class='form-group text-center'>
                                    <button type="submit" @click='updateLocation()' class="btn btn-outline-primary updateLocation">Змінити</button>
                                    <button type="submit" data-target="#modalRemoveLocation" data-toggle="modal" class="btn btn-outline-danger">Видалити</button>
                                </div>
                                <div class="form-group col-11 ml-auto mr-auto mb-0">
                                    <div class="preview">
                                        <div class="form-image">
                                            <vueper-slides
                                            ref="vueperslides1"
                                            class='primary'
                                            @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
                                            :bullets="false"
                                            fixed-height="400px"
                                            :progress='true'>
                                                <vueper-slide
                                                v-for='(image, i) in images'
                                                :key='i'
                                                :image='image.image_url'>
                                                </vueper-slide>
                                            </vueper-slides>
                                        </div>
                                        <div class="form-map">
                                            <!-- map -->
                                            <GmapMap
                                            :center="center" 
                                            :zoom="7"
                                            map-type-id="terrain"
                                            @click='InsertPosition($event)'>
                                            <GmapMarker
                                                :position="center"
                                                :clickable="true"
                                                :draggable="false"
                                                :animation=2
                                            />
                                        </GmapMap>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group col-9 ml-auto mr-auto mb-0" style='height:auto'>
                                    <vueper-slides
                                    ref="vueperslides2"
                                    class='thumbnails'
                                    :dragging-distance="50"
                                    @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
                                    :visible-slides="5"
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
                                            <template v-slot:content>
                                                <i class="fas fa-times deleteImg" @click='deleteImage(image)'></i>
                                            </template>
                                        </vueper-slide>
                                    </vueper-slides>
                                    <!-- <div class="user-thumbnails">
                                        <ul class="thumbnails" v-if='images'>
                                            <li
                                            v-for='(image, id) in images'
                                            :key='id'
                                            @click='seeImageForm(image)'
                                            >
                                            <img :src="image" alt="" class='img-fluid img-thumbnail rounded'>
                                            <i class="fas fa-times deleteImg" 
                                            @click='removeImage(image)'>
                                            </i>
                                            </li>
                                        </ul>
                                    </div> -->
                                </div>
                                <div class="input-group mb-3 col-9 ml-auto mr-auto">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Завантаження</span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="file" name='image_url[]' ref="myFiles" multiple @change="previewFiles">
                                        <label class="custom-file-label" for="file">Вибрати картинку</label>
                                    </div>
                                </div>
                                <div class="input-group mb-3 col-9 ml-auto mr-auto">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" >Назва</span>
                                    </div>
                                    <input v-model='title' name='title' type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                                <div class="input-group mb-3 col-9 ml-auto mr-auto mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Текст</span>
                                    </div>
                                    <textarea v-model='textarea' name='textarea' class="form-control" aria-label="With textarea" rows="5"></textarea>
                                </div>
                            </form>
                            <div class="cardReview card-body col-12 col-sm-7 col-md-7 ml-auto mr-auto">
                                <div class="tab-content">
                                    <div class="active tab-pane" id="activity">
                                        <div class="post comment-form">
                                            <form action="" onsubmit="return false;">
                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Коментувати</label>
                                                    <textarea v-model='reviewText' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                            </form>
                                            <button type="submit" @click='createReview()' class="btn btn-outline-primary createReview" disabled>Коментувати</button>
                                        </div>
                                        <div class="review-form"></div>
                                        <div class="post clearfix" v-for='(review,id) in reviews' :key='id' :id='`review_`+review.id'>
                                            <div class="user-block">
                                                <img class="img-circle img-bordered-sm" src="http://bootdey.com/img/Content/user_1.jpg" alt="User Image">
                                                <span class="username">
                                                <a href="#">{{review.surname}}</a>
                                                <a href="#" class="float-right btn-tool"><i class="fas fa-times" data-toggle="modal" @click='reviewId = review.id' data-target="#modalRemoveReview"></i></a>
                                                </span>
                                                <span class="description">
                                                    <span class="date">{{review.updated_at.substring(0,10)}}</span>
                                               </span>
                                            </div>
                                            <p>
                                                {{review.review}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="modal fade" id="modalRemoveReview" tabindex="-1" role="dialog" aria-labelledby="modalRemoveReview" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Видалення</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <p>Ви справді хочете видалити відгук?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning ml-auto" data-dismiss="modal">Ні</button>
                        <button type="button" class="btn btn-danger mr-auto removeComment" :id='reviewId' @click='deleteReview($event)' data-dismiss="modal">Так</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalRemoveLocation" tabindex="-1" role="dialog" aria-labelledby="modalRemoveLocation" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Видалення</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        <p>Ви справді хочете видалити локацію?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-warning ml-auto" data-dismiss="modal">Ні</button>
                        <button type="button" class="btn btn-outline-danger mr-auto removeLocation" id='' @click='deleteLocation(locationId)' data-dismiss="modal">Так</button>
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
        data: () => ({
                images       : [],
                reviews      : [],
                deleteImages : [],
                newImages    : [],
                textarea     : null,
                reviewId     : '',
                title        : null,
                locationId   : null,
                reviewText   : null,
                inputFiles   : [],
                center       : {lat:51.1518032,lng:23.6378023},
        }),
        methods: {
            /**
             * Method VueperSlider
             */
            showNext: function() {},
            /**
             * Method insert marker position
             */
            InsertPosition: function(e) {
                this.center = {
                    lat:e.latLng.lat(),
                    lng:e.latLng.lng()
                }
            },
            /**
             * Method delete images
             */
            deleteImage: function(image) {
                this.images = this.images.filter(el => el != image);
                image.name == undefined?
                this.deleteImages.push(image):
                this.inputFiles = this.inputFiles.filter(el =>el.name == image.name);
            },
            /**
             * Method see preview images
             */
            previewFiles: function(e) {
                for(let i = 0 ; i <  event.target.files.length; i++) {
                    this.inputFiles.push(event.target.files[i]);
                }

                var file = e.target.files; 
                for (var i = 0, f; f = file[i]; i++) {

                    if (!f.type.match('image.*')) {
                        alert("Image only please....");
                    }
                    var reader = new FileReader();
                    var vue = this, name = f;
                    reader.onload = (function (theFile) {
                        return function (e) {
                            vue.images.push({
                                name      : name.name,
                                image_url : e.target.result
                            })	
                        };
                    })(f);
                    reader.readAsDataURL(f);
                }
                setTimeout( () => {
                    this.$refs.vueperslides1.goToSlide(-1);
                }, 1000 );
            },
            /**
             * Method update location
             */
            async updateLocation() {
                if(this.inputFiles != null) {
                    for( let item of this.inputFiles) {
                        await this.uploadsFile(item);
                    }
                }

                this.$store.dispatch('UPDATE_LOCATION',{
                    url          : '/InfoMap.com/admin/map/location/',
                    id           : this.locationId,
                    title        : this.title,
                    text         : this.textarea,
                    marker       : this.center,
                    deleteImages : this.deleteImages,
                    newImages    : this.newImages
                });
            },
            /**
             * Method delete location
             */
            async deleteLocation(id) {
                await axios
                .delete('/InfoMap.com/admin/map/location/' + id)
                .then(data => {
                    this.$store.dispatch('ADD_LIST_LOCATIONS');
                    this.$store.dispatch('ADD_MARKERS');
                    this.$router.push({name:'adminMap'});
                })
                .catch(error => {
                    alert('error');
                    console.log(error);
                })
            },
            /**
             * Method add new image to base
             */
            async uploadsFile(item){
                let vue = this;
                let form = new FormData();
                form.append('image',item);
                await axios.post('/InfoMap.com/uploads',form)
                .then(function(data){
                    vue.newImages.push(data.data);
                })
                .catch(error => {
                    alert('error');
                    console.log(error);
                });
            },
            /**
             * Method create comment
             */
            createReview: function() {
                 axios
                .post('/InfoMap.com/admin/map/location/'+this.locationId+'/review',{
                    review      : this.reviewText,
                    location_id : this.locationId
                })
                .then(function(data) {
                    setTimeout(() => {
                        $('.createReview').prop('disabled',true);
                    }, 1000);
                    $('.review-form').after(
                        $('<div/>').attr('class','post clearfix previeReview').append(
                            $('<div/>').attr('class','user-block').append(
                                $('<img/>')
                                .attr({
                                    'class':'img-circle img-bordered-sm',
                                    'src':"http://bootdey.com/img/Content/user_1.jpg",
                                    'alt':"User Image"
                                }),
                                $('<span/>').attr('class','username').append(
                                    $('<a/>').attr('href','#').text(data.data.surname),
                                    $('<a/>').attr({
                                        'href':'#',
                                        'class':'float-right btn-tool'
                                    }).append(
                                        $('<i/>').attr({
                                            'class':'fas fa-times',
                                            'data-toggle':'modal',
                                            'data-target':'#exampleModal'
                                        })
                                    )
                                ),
                                $('<span/>').attr('class','description').text(data.data.updated_at)
                            ),
                            $('<p/>').text(data.data.review)
                        )
                    )

                })
                .catch(error => {console.log(error)});
            },
            /**
             * Method remove comment
             */
            deleteReview: function(e) {
                axios
                .delete('/InfoMap.com/admin/map/location/review/'+$(e.target).attr('id'))
                .then(function(data) {
                    $('#review_'+$(e.target).attr('id')).remove();
                })
                .catch(error => {
                    alert('error');
                    console.log(error);
                });
            }
        },
        watch: {
            /**
             * Watch vuex GET_LOCATION
             */
            '$store.getters.GET_LOCATION': {
                handler: function(search) {
                    let object = this.$store.getters.GET_LOCATION;
                    if(object.length != 0) {
                        this.title      = object[0].title;
                        this.textarea   = object[0].text;
                        this.locationId = object[0].id;
                        this.center     = JSON.parse(object[0].marker);
                        this.images     = object[2];
                        this.reviews    = object[1];
                        $('.nav a').removeClass('active');
                        $('.listLocation').addClass('active');
                        $('#location_'+object[0].id).addClass('active');
                        $('.previeReview').remove();
                        setTimeout(() => {
                            this.$refs.vueperslides1.goToSlide(-1);
                        }, 1000);
                    }
				},
                deep: true,
                immediate: true
            },
            '$route.params':{
                handler: function(search) {
                    if(this.$route.name == 'adminUpdateLocation') {
                        this.inputFiles = [];
                        $("#file").val(null);
                    }
                },
                deep: true,
                immediate: true
            },
            /**
             * Watch data - reviewText
             */
            reviewText: function() {
                /^\s+|\s+$/g.test(this.reviewText) || this.reviewText == ''?
                $('.createReview').prop('disabled',true):
                $('.createReview').prop('disabled',false);
            }
        },
        mounted() {
            setTimeout(() => {
                $('#location_'+this.locationId).addClass('active');
            }, 1000);
        },
        updated() {
            if((/^\s+|\s+$/g.test(this.title) || this.title == '') ||
            (/^\s+|\s+$/g.test(this.textarea) || this.textarea == '') ||
            (this.images.length == 0)) {
                $('.updateLocation').prop('disabled',true);
            }else {
                $('.updateLocation').prop('disabled',false);
            }
        }
    }
</script>
