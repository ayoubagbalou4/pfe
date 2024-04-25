<?php

use App\Http\Controllers\Api\AbsenceController;
use App\Http\Controllers\Api\AffectationController;
use App\Http\Controllers\Api\FiliereController;
use App\Http\Controllers\Api\FiliereModuleController;
use App\Http\Controllers\Api\FormateurController;
use App\Http\Controllers\Api\GroupeController;
use App\Http\Controllers\Api\ModuleController;
use App\Http\Controllers\Api\SalleController;
use App\Http\Controllers\Api\SeanceController;
use App\Http\Controllers\Api\SemaineController;
use App\Models\Formateur;
use App\Models\Module;
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
Route::apiResource('filieres', FiliereController::class);
Route::apiResource('groupes', GroupeController::class);
Route::apiResource('filiereModules', FiliereModuleController::class);
Route::apiResource('seances', SeanceController::class);
Route::apiResource('modules', ModuleController::class);
Route::get('seanceParDate', [SeanceController::class,"seanceParDate"]);
Route::get('realisationModulesParGrp', [SeanceController::class,"realisationModulesParGrp"]);
Route::get('semaineNumber', [SeanceController::class,"semaineNumber"]);
Route::get('seancesParSemaine/{semaine}', [SeanceController::class,"seancesParSemaine"]);
Route::get('formateurStatistiques/{semaine}', [FormateurController::class,"formateurStatistiques"]);
Route::get('groupeStatistiques/{semaine}', [GroupeController::class,"groupeStatistiques"]);

Route::apiResource('semaines', SemaineController::class);

Route::get('affectations', [AffectationController::class,"index"]);
Route::post('affectations', [AffectationController::class,"store"]);
Route::get('affectations/{Code_Groupe}/{Id_module}/{formateur_Matricule}', [AffectationController::class,"show"]);
Route::put('affectations/{Code_Groupe}/{Id_module}/{formateur_Matricule}', [AffectationController::class,"update"]);
Route::delete('affectations/{Code_Groupe}/{Id_module}/{formateur_Matricule}', [AffectationController::class,"destroy"]);

Route::post('remplacer/{id1}', [SeanceController::class,"remplacer"]);
Route::post('dupliquer', [SeanceController::class,"dupliquer"]);
Route::delete('supprimer/{Code_Groupe}/{formateur_Matricule}/{code_seance}', [SeanceController::class,"supprimer"]);
Route::post('absences', [AbsenceController::class,"store"]);
Route::get('absences/{semaine}', [AbsenceController::class,"index"]);
