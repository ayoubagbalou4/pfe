<?php

use App\Http\Controllers\Api\AbsenceController;
use App\Http\Controllers\Api\AffectationController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\FiliereController;
use App\Http\Controllers\Api\FiliereModuleController;
use App\Http\Controllers\Api\FormateurController;
use App\Http\Controllers\Api\GroupeController;
use App\Http\Controllers\Api\ModuleController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\SalleController;
use App\Http\Controllers\Api\SeanceController;
use App\Http\Controllers\Api\SemaineController;
use App\Mail\MailWithAttachment;
use App\Models\Formateur;
use App\Models\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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
Route::apiResource('modules', ModuleController::class);
Route::apiResource('contacts', ContactController::class);
Route::get('seanceParDate', [SeanceController::class,"seanceParDate"]);
Route::get('realisationModulesParGrp', [SeanceController::class,"realisationModulesParGrp"]);
Route::get('semaineNumber', [SeanceController::class,"semaineNumber"]);
Route::get('seancesParSemaine/{semaine}', [SeanceController::class,"seancesParSemaine"]);
Route::get('formateurStatistiques/{semaine}', [FormateurController::class,"formateurStatistiques"]);
Route::get('groupeStatistiques/{semaine}', [GroupeController::class,"groupeStatistiques"]);


Route::apiResource('semaines', SemaineController::class);
Route::post('remplacer', [SeanceController::class,"remplacer"]);
Route::post('dupliquer', [SeanceController::class,"dupliquer"]);
Route::delete('supprimer/{Code_Groupe}/{formateur_Matricule}/{code_seance}/{No_Semaine_Calendrier}', [SeanceController::class,"supprimer"]);
Route::post('absences', [AbsenceController::class,"store"]);
Route::get('absences/{semaine}', [AbsenceController::class,"index"]);

Route::get('sendEmail', [NotificationController::class,"sendEmail"]);

Route::post('insertWeeks', [SemaineController::class,"insertWeeks"]);
Route::get('getSemaineNow', [SeanceController::class,"getSemaineNow"]);

Route::put('Updatecontacts', [ContactController::class,"Updatecontacts"]);

Route::get('getAnneeScolaires', [SeanceController::class,"getAnneeScolaires"]);