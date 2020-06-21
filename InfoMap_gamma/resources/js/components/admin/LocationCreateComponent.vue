<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h4 class="m-0 text-dark">Створення локації</h4>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                        <router-link 
                        class='nav-link active' 
                        :to="{ name: 'adminMap' }">   
                            Головна
                        </router-link ></li>
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
                                     <button type="submit" @click='createLocation()' class="btn btn-outline-primary createLocation" disabled>Створити</button>
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
                                            <GmapMap
                                            :center="center" 
                                            :zoom="7"
                                            map-type-id="terrain"
                                            @click='InsertPosition($event)'>
                                            <GmapMarker
                                                v-if='marker.length != 0'
                                                :position="marker"
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
                                </div>
                                <div class="input-group mb-3 col-9 ml-auto mr-auto">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Завантаження</span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file"  class="custom-file-input" id="file" name='image_url[]' ref="myFiles" multiple @change="previewFiles">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides';
    export default {
        components: { VueperSlides, VueperSlide },
        data: () => ({
                images     : [],
                newImages  : [],
                textarea   : null,
                title      : null,
                locationId : null,
                inputFiles : [],
                center     : {lat:51.1518032,lng:23.6378023},
                marker     : []
        }),
        methods: {
            /**
             * Method Vueper Slides
             */
            showNext: function() {},
            /**
             * Method insert position marker
             */
            InsertPosition: function(e) {
                this.center = {
                    lat:e.latLng.lat(),
                    lng:e.latLng.lng()
                }
                this.marker = {
                    lat:e.latLng.lat(),
                    lng:e.latLng.lng()
                }
            },
            /**
             * Method delete images
             */
            deleteImage: function(image) {
                this.images = this.images.filter(el => el != image);

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
             * Method create location
             */
            async createLocation() {
                if(this.inputFiles != null) {
                    for( let item of this.inputFiles) {
                        await this.uploadsFile(item);
                    }
                }
                this.$store.dispatch('CREATE_LOCATION',{
                    url:     '/InfoMap.com/admin/map/location/',
                    title    : this.title,
                    text     : this.textarea,
                    marker   : this.center,
                    newImages: this.newImages
                });
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
            }
        },
        updated() {
            if((/^\s+|\s+$/g.test(this.title) || this.title == '') ||
            (/^\s+|\s+$/g.test(this.textarea) || this.textarea == '') ||
            (this.images.length == 0)) {
                $('.createLocation').prop('disabled',true);
            }else {
                $('.createLocation').prop('disabled',false);
            }
        }
    }
</script>
