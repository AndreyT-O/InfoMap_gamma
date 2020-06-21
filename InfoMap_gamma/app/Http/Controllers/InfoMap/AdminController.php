<?php

namespace App\Http\Controllers\InfoMap;

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Storage;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Http\Requests\AdminRequest;

use App\User;
use App\Location;
use App\Image;
use App\Review;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return redirect()->route('admin.map');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Requests\AdminRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdminRequest $request)
    {
            $location = new Location;

            $location->fill([
                'user_id' => Auth::id(),
                'title'   => $request->title,
                'text'    => $request->text,
                'marker'  => $request->marker
            ]);
            $location->save();
    
            foreach ($request->new_images as $key => $value) {
                $value = '/storage/'.$value;
                $image = new Image;
                $image->fill(
                    [
                        'location_id' => $location->id,
                        'image_url'   => $value
                    ]
                );
                $image->save();
            }
            return $location;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Requests\AdminRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AdminRequest $request, $id)
    {
        $image = new Image;
        foreach($request->old_images as $value) {
            if($image->where('id',$value['id'])->first()) {
                Image::destroy($value['id']);
                Storage::disk('public')->delete(substr($value['image_url'],9));
            }
        }

        foreach ($request->new_images as $key => $value) {
            $image = new Image;
            $image->fill(
                [
                    'location_id' => $id,
                    'image_url'   => '/storage/'.$value
                ]);
            $image->save();
        }
        $location = Location::find($id);
        $location->title  = $request->title;
        $location->text   = $request->text;
        if($request->marker != null) {
            $location->marker = $request->marker;
        }
        $location->save();
        return $location;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $img = Location::where('id',$id)->first()->images()->select('id','image_url')->get();
        foreach ($img as $key => $value) {
            Storage::disk('public')->delete(substr($value['image_url'],9));
        }
        Location::destroy($id);
    }
    /**
     * Redirect to index fucntion
     *
     * @return \Illuminate\Http\Response
     */
    public function indexMap()
    {
        return view('layouts.admin.adminPage');
    }
    /**
    * Create review
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response 
    */
    public function createReview(Request $request,$id) {
        $review = new Review;
        $review->fill([
            'user_id'     => Auth::user()->id,
            'location_id' => $request->location_id,
            'surname'     => Auth::user()->name,
            'review'      => $request->review
        ]);
        $review->save();
        return $review;
    }
    /**
     * Delete review
     * @param  int  $id
     * @return \Illuminate\Http\Response 
     */
    public function deleteReview($id) {
        Review::destroy($id);
    }
}
