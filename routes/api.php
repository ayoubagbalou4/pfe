<?php

use App\Http\Controllers\Api\AffectationController;
use App\Http\Controllers\Api\FiliereController;
use App\Http\Controllers\Api\FiliereModuleController;
use App\Http\Controllers\Api\FormateurController;
use App\Http\Controllers\Api\GroupeController;
use App\Http\Controllers\Api\SalleController;
use App\Http\Controllers\Api\SeanceController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('salles', SalleController::class);
Route::apiResource('formateurs',FormateurController::class);
Route::apiResource('affectations', AffectationController::class);
Route::apiResource('filieres', FiliereController::class);
Route::apiResource('groupes', GroupeController::class);
Route::apiResource('filiereModules', FiliereModuleController::class);
Route::apiResource('seances', SeanceController::class);
