<template>
    <div class="container-fluid p-0">
        <form method='POST' id='createForm' enctype="multipart/form-data" onsubmit="return false;">
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
                        <template v-slot:content>
                            <i class="fas fa-times deleteImg" @click='deleteImage(image)'></i>
                        </template>
                    </vueper-slide>
                </vueper-slides>
            </div>
            <div class="closeLocation col-12 col-md-5 col-lg-4 p-0">
                <i @click='closeLocation' class="fas fa-arrow-alt-circle-left"></i>
            </div>
            <div class="from-group container mt-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Завантаження</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="file" name='image_url[]' ref="myFiles" multiple @change="previewFiles" required>
                        <label class="custom-file-label" for="file">Вибрати картинку</label>
                    </div>
                </div>
            </div>
            <div class="form-group container">
                <label for="exampleInputEmail1">Заголовок</label>
                <input type="text" id='title' v-model='title' name='title' class="form-control" placeholder="Введіть.....">
            </div>
                <div class="form-group container">
                <label for="exampleFormControlTextarea1">Опис</label>
                <textarea v-model='textarea' id='textarea' class="form-control" name='text' rows="3" required></textarea>
            </div>
            <div class="form-group text-center">
                <button type="submit" @click='createLocation()' class="btn btn-outline-primary mb-2 createLocation" disabled>Створити</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides';
    export default {
        components: { VueperSlides, VueperSlide },
        data: () => ({
            locationId    : '',
            title         : '',
            textarea      : '',
            userId        : '',
            images        : [],
            newImages     : [],
            previewImages : [],
            inputFiles    : [],
            // count         : 1,
            // number        : 0
        }),
        methods: {
            /**
             * Method Vueper Slides
             */
            showNext: function() {},
            /**
             * Method leave location
             */
            closeLocation: function() {
                $('#closeForms').modal('show');
            },
            /**
             * Method delete images
             */
            deleteImage: function(image,obj) {
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
                    var vue = this, names = f;
                    reader.onload = (function (theFile) {
                        return function (e) {
                            vue.images.push({
                                name      : names.name,
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
                $('.createLocation').prop('disabled',true);
                if(this.inputFiles != null) {
                    for( let item of this.inputFiles) {
                        await this.uploadsFile(item);
                    }
                }

                this.$store.dispatch('CREATE_LOCATION',{
                    url       : '/InfoMap.com/user/map/location',
                    title     : this.title,
                    text      : this.textarea,
                    marker    : this.$store.getters.GET_NEW_MARKER??null,
                    newImages : this.newImages
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
                    vue.newImages.push('/storage/'+data.data);
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