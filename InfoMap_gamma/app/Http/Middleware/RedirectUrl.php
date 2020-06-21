<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Closure;

class RedirectUrl
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // return $next($request);
        if(Auth::user() and Auth::user()->is_admin == 1)
        {
            return redirect()->route('admin.map');

        }else if(Auth::user() and Auth::user()->is_admin == 0){
            // dd(1);
            return redirect()->route('user.map');
        }
        return $next($request);
    }
}
