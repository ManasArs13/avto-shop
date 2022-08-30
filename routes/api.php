<?php

use App\Http\Controllers\ApiCategoryController;
use App\Http\Controllers\ApiProductController;
use App\Http\Controllers\ApiTypeController;
use App\Http\Controllers\ApiAuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/register', [ApiAuthController::class, 'register']);
Route::post('/login', [ApiAuthController::class, 'login']);
/* Доделать!!!
Route::post('/logout', [ApiAuthController::class, 'logout']);
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/products', [ApiProductController::class, 'index']); // все продукты
Route::get('/product/{id}', [ApiProductController::class, 'show']);// продукт по id

Route::get('/categories', [ApiCategoryController::class, 'index']);// все категории
Route::get('/category/{id}', [ApiCategoryController::class, 'show']);//продукты категории id
Route::get('/category/{id}/{type}', [ApiCategoryController::class, 'showByType']);//продукты категории id и типа type

Route::get('/types', [ApiTypeController::class, 'index']); // все типы
Route::get('/type/{type}', [ApiTypeController::class, 'show']); // продукты типа type

