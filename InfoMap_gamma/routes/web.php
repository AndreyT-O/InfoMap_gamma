<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Http\Request;

/**
 * Models
 */
use App\User;
use App\Location;

Route::get('/', function () {
    return redirect()->route('userMap');
});
Route::get('/InfoMap.com/map',function() {
    return view('layouts.user.userPage');
})->name('userMap');

/**
 *  User routes
 */
$goup = [
    'namespace' => 'InfoMap',
    'middleware' => ['auth','userCheck']
];

Route::group($goup,function(){
    /**
    * User route 
    */ 
    $methods_user = ['index','update','store','destroy'];
    Route::resource('/InfoMap.com/user/map/location','UserController')
    ->only($methods_user)
    ->names('user');
    Route::get('/InfoMap.com/user/map','UserController@indexMap')->name('user.map');
    Route::post('/InfoMap.com/user/map/location/{id}/review','UserController@createReview');
});

/**
 *  Admin routes
 */
$goup = [
    'namespace' => 'InfoMap',
    'middleware' => ['auth','adminCheck']
];
Route::group($goup,function(){
    /**
     * Admin route
     */
    $methods_admin = ['index','update','store','destroy'];
    Route::resource('/InfoMap.com/admin/map/location','AdminController')
    ->only($methods_admin)
    ->names('admin');
    Route::get('/InfoMap.com/admin/map','AdminController@indexMap')->name('admin.map');
    Route::post('/InfoMap.com/admin/map/location/{id}/review','AdminController@createReview');
    Route::delete('/InfoMap.com/admin/map/location/review/{id}','AdminController@deleteReview');
});

/**
 * Route get location information on id
 */
Route::get('/location/{id}',function($id) {
    return [
        Location::where('id',$id)->select('id','user_id','title','text','marker')->first(),
        Location::where('id',$id)->first()->reviews()->select('id','review','surname','updated_at')->orderBy('updated_at', 'DESC')->get(),
        Location::where('id',$id)->first()->images()->select('id','image_url')->get()
    ];
});
/**
 * Route get all locations information
 */
Route::get('/locations',function() {
    return [
        Location::select('id','marker')->get(),
        Location::select('id','title')->get()
    ];
});
/**
 * Route set new images
 * 
 * @param  \Illuminate\Http\Request  $request
 */
Route::post('/InfoMap.com/uploads', function(Request $request) {
    $path = $request->file('image')->store('location_images','public');
    return $path;
});
/**
 * Route clear images of base
 * 
 * @param  \Illuminate\Http\Request  $request
 */
Route::post('/InfoMap.com/uploads/clear', function(Request $request) {
    foreach ($request->image as $key => $value) {
        Storage::disk('public')->delete(substr($value,9));
    }
});

/**Routes for Auth */
Auth::routes();
/** Standart route */
Route::get('/home', 'HomeController@index')->name('home');

/**
 * Another routes
 */
Route::get('/{any}', function() {
    return redirect()->route('userMap');
})->where('any', '.*')->middleware('redirectUrl');


