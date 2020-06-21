<!DOCTYPE html>
<!-- <html lang="en"> -->
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Title site -->
    <title>InfoMap</title>
    <!-- Logo image site -->
    <link rel="shortcut icon" href="{{ asset('/image_default/Travel-map-icon.png')}}" type="image/png">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div class="wrapper" id="warder">
        <!-- Neader -->
        <header>
            <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <!-- {{ config('app.name', 'InfoMap') }} -->
                        InfoMap
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Left Side Of Navbar -->
                        <ul class="navbar-nav mr-auto">

                        </ul>

                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ml-auto">
                            <!-- Authentication Links -->
                            @guest
                                <li class="nav-item" @click='initialization = "login"'>
                                    <a class="nav-link" data-toggle="modal" data-target="#initWindow">{{ __('Вхід') }}</a>
                                </li>
                                @if (Route::has('register'))
                                    <li class="nav-item" @click='initialization = "register"'>
                                        <a class="nav-link" data-toggle="modal" data-target="#initWindow">{{ __('Реєстрація') }}</a>
                                    </li>
                                @endif
                            @else
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                        {{ Auth::user()->name }} <span class="caret"></span>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right text-center" style='padding: 0' aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item exit-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();">
                                            {{ __('Вихід') }}
                                            <i class='fas fa-sign-out-alt'></i>
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            @csrf
                                        </form>
                                    </div>
                                </li>
                            @endguest
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <!-- Basic -->
        <main class="infoLocation">
            @yield('content')
        </main>
        <!-- Modal -->
        <button type="hidden" class="btn btn-primary removeButton" data-toggle="modal" data-target="#removeForms">
        </button>
        <!-- Modal window to delete location -->
        <div class="modal fade" id="removeForms" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Видалення</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center">
                        Ви справді хочете видалити?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary ml-auto" data-dismiss="modal">Ні</button>
                        <button type="button" class="btn btn-outline-danger mr-auto" data-dismiss="modal" @click='deleteLocation(locationId)'>Так</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal windows with lodin -->
        <div class="modal fade" id="initWindow" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body" >

                            <div class="card">
                                <div class="card-header row">
                                    <div v-if='initialization == items[0]' class='col-11'>
                                        {{ __('Вхід') }}
                                    </div>
                                    <div v-else class='col-11'>
                                        {{ __('Реєстрація') }}
                                    </div>
                                    <button type="button" class="close col-1 float-right" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="card-body">
                                    <form method="POST" class='login' v-if='initialization == items[0]' action="{{ route('login') }}">
                                        @csrf

                                        <div class="form-group row">
                                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Email адрес') }}</label>
                                            <div class="col-md-6">
                                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                                @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Пароль') }}</label>
                                            <div class="col-md-6">
                                                <input id="password" v-model='userPassword' type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                                @error('password')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="form-group row mb-0">
                                            <div class="col-12 ml-auto mr-auto text-center">
                                                <button type="submit" class="btn btn-outline-primary logIn">
                                                    {{ __('Вхід') }}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <form method="POST" v-else action="{{ route('register') }}">
                                        @csrf

                                        <div class="form-group row">
                                            <label for="name1" class="col-md-4 col-form-label text-md-right">{{ __("Ім'я") }}</label>

                                            <div class="col-md-6">
                                                <input id="name1"  type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                                @error('name')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="email1" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail адрес') }}</label>

                                            <div class="col-md-6">
                                                <input id="email1"  type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="password1" class="col-md-4 col-form-label text-md-right">{{ __('Пароль') }}</label>

                                            <div class="col-md-6">
                                                <input id="password1" v-model='userPassword' type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                                @error('password')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="password-confirm1" class="col-md-4 col-form-label text-md-right">{{ __('Повторіть пароль') }}</label>

                                            <div class="col-md-6">
                                                <input id="password-confirm1" v-model='userPasswordCorfirm' type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Обов'язкове заповнення">
                                            </div>
                                        </div>

                                        <div class="form-group row mb-0">
                                            <div class="col-12 ml-auto mr-auto text-center">
                                                <button type="submit" class="btn btn-outline-primary registerIn" disabled>
                                                    {{ __('Реєстрація') }}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.js"></script>
    <script src="{{asset('js/app.js')}}"></script>
    <script type="text/javascript">
            @if (count($errors) > 0)
                $('#initWindow').modal('show');
            @endif
    </script>
</body>
</html>