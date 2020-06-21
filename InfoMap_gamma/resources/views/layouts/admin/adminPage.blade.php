@extends('layouts.admin.basicPage')
@section('content')
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
		<a href="{{ route('admin.map')}}" class="brand-link">
			<img src="{{ asset('js/admin/dist/img/AdminLTELogo.png')}}"
				alt="InfoMap"
				class="brand-image img-circle elevation-3"
				style="opacity: .8">
			<span class="brand-text font-weight-light">Admin</span>
		</a>

		<list-locations
        @showform = 'showCloseAdminForm($event)'></list-locations>
    </aside>
    <router-view></router-view>
	<div class="modal fade" id="modalAdminClose" tabindex="-1" role="dialog" aria-labelledby="modalAdminClose" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Оновлення</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p>Покинути форму редагування локації?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-warning ml-auto" data-dismiss="modal">Ні</button>
                    <button type="button" class="btn btn-outline-danger mr-auto removeComment" @click='closeAdminForm' data-dismiss="modal">Так</button>
                </div>
            </div>
        </div>
    </div>
    
@endsection
