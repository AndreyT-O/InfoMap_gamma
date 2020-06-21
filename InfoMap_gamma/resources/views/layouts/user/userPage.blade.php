
@extends('layouts.user.basicPage')
@section('content')
    <!-- Map -->
    <div class="map col-12 p-0">
        <map-component :active-user='{{Auth::user()->id??0}}'></map-component>
    </div>
    <!-- Sidebar -->
    <div class="sidebar col-12 col-md-5 col-lg-4 p-0">
        <router-view 
        :active-user='{{Auth::user()->id??0}}'
        @deleteloc='modalDelete($event)'></router-view>
    </div>
    <!-- Modal for save information -->
    <div class="modal fade" id="closeForms" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Оновлення</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        Не зберігати оновлену інформацію?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary ml-auto" data-dismiss="modal">Ні</button>
                        <button type="button" class="btn btn-outline-warning mr-auto" data-dismiss="modal" @click='closeForm'>Так</button>
                    </div>
                </div>
            </div>
        </div>
@endsection
