<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Admin | InfoMap</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta name="csrf-token" content="{{ csrf_token() }}">

  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

  <link href="{{ asset('css/appAdmin.css') }}" rel="stylesheet">

</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper" id='warder'>
	<nav class="main-header navbar navbar-expand navbar-white navbar-light">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item">
			<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
			</li>
		</ul>
		<ul class='navbar-nav ml-auto'>
			<li class="nav-item d-none d-sm-inline-block">
			<a class="nav-link" data-widget="pushmenu" href="{{ route('logout') }}"
				onclick="event.preventDefault();
				document.getElementById('logout-form').submit();">
												{{ __('Вихід') }}
				<i class='fas fa-sign-out-alt'></i>
				</a>
				<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
				@csrf
				</form>
			</li>
		</ul>
	</nav>


  	@yield('content')

</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.js"></script>

<script src="{{ asset('js/admin/plugins/jquery/jquery.min.js')}}"></script>

<script src="{{ asset('js/admin/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

<script type='text/javascript' src="{{ asset('js/admin/dist/js/adminlte.min.js')}}"></script>

<script type='text/javascript' src="{{ asset('js/admin/dist/js/demo.js')}}"></script>

<script src="{{ asset('js/app.js')}}"></script>
</body>
</html>
