<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistroController as Registrar;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::group(['middleware' => 'api'], function () {
Route::get('/csrf-token', function () {$token = csrf_token(); $session = request()->cookie('laravel_session');return response()->json(['token' => $token/*, "session" => $session*/]);});
    Route::post('/register', [Registrar::class, 'register']);
});