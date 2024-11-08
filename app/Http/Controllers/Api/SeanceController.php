<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Seance;
use App\Models\Semaine;
use DateTime;
use Illuminate\Http\Request;

class SeanceController extends Controller
{
    public function index()
    {
        $seances = Seance::
            with('formateur', 'module')
            ->get();
        return response()->json([
            'seances' => $seances
        ], 200);
    }

    public function getSemaineNow()
    {
        $dateNow = date('Y-m-d');
        $semaineNow = Semaine::where('firstDayOfWeek', '<=', $dateNow)
            ->where('lastDayOfWeek', '>=', $dateNow)
            ->first();
        if ($semaineNow) {
            $seancesParSemaine = Seance::where('No_Semaine_Calendrier', $semaineNow->semaine)
                ->with('formateur', 'module')
                ->get();
            return response()->json($semaineNow->semaine, 200);
        } else {
            return response()->json([
                'error' => 'Aucune semaine n\'a été trouvée pour la date actuelle.'
            ], 404);
        }
    }

    public function seancesParSemaine($semaine)
    {
        $seancesParSemaine = Seance::where('No_Semaine_Calendrier', $semaine)
            ->with('formateur', 'module')
            ->where('archive', 0)
            ->get();
        return response()->json([
            'seancesParSemaine' => $seancesParSemaine
        ], 200);
    }

    public function seanceParDate()
    {
        $seances = Seance::selectRaw('No_Semaine_Calendrier as semaine,
                                  MIN(Date) AS firstDayOfWeek,
                                  MAX(Date) AS lastDayOfWeek')
            ->groupBy('No_Semaine_Calendrier')
            ->get();

        return response()->json([
            'seanceParDate' => $seances
        ], 200);
    }
    public function realisationModulesParGrp()
    {
        $seances = Seance::selectRaw('SUM(MH) as somme ,Code_Groupe,Id_module,
        SUM(CASE WHEN Type_seance = "PRESENTIEL" THEN MH ELSE 0 END) as sommeP,
        SUM(CASE WHEN Type_seance = "A DISTANCE" THEN MH ELSE 0 END) as sommeD')
            ->groupBy('Code_Groupe', 'Id_module')
            ->get();
        return response()->json([
            'realisationModulesParGrp' => $seances
        ], 200);
    }
    public function semaineNumber()
    {
        $semaine = Seance::selectRaw('No_Semaine_Calendrier as number')
            ->groupBy('No_Semaine_Calendrier')
            ->get();
        return response()->json([
            'semaineNumber' => $semaine
        ], 200);
    }


    public function remplacer(Request $request)
    {
        $seance1 = Seance::where('Id_Salle', $request->Id_Salle)
            ->where('Code_Groupe', $request->Code_Groupe)
            ->where('formateur_Matricule', $request->formateur_Matricule)
            ->where('Id_module', $request->Id_module)
            ->where('code_seance', $request->code_seance)
            ->where('Date', $request->Date)->first();

        $seance2 = Seance::where('Id_Salle', $request->Id_Salle1)
            ->where('Code_Groupe', $request->Code_Groupe1)
            ->where('formateur_Matricule', $request->formateur_Matricule1)
            ->where('Id_module', $request->Id_module1)
            ->where('code_seance', $request->code_seance1)
            ->where('Date', $request->Date1)->first();


        if (!$seance1) {
            return response()->json(['message' => 'seance1 not found'], 404);
        }
        if (!$seance2) {
            $seance1->update([
                'code_seance' => $request->code_seance1,
                'Date' => $request->Date1,
                'Jour_de_semaine' => $request->Jour_de_semaine,
                'Horaire_debut' => $request->Horaire_debut,
                'Horaire_fin' => $request->Horaire_fin,
                'Type_seance' => $request->Type_seance,
                'Code_Groupe' => $request->Code_Groupe1,
            ]);
            return response()->json(['message' => 'Sessions replaced successfully']);
        }

        $tempSeance = $seance1->toArray();

        $seance1->update([
            'code_seance' => $seance2->code_seance,
            'Date' => $seance2->Date,
            'Jour_de_semaine' => $seance2->Jour_de_semaine,
            'Horaire_debut' => $seance2->Horaire_debut,
            'Horaire_fin' => $seance2->Horaire_fin,
            'Type_seance' => $seance2->Type_seance,
            'Code_Groupe' => $seance2->Code_Groupe,
        ]);

        $seance2->update([
            'code_seance' => $tempSeance['code_seance'],
            'Date' => $tempSeance['Date'],
            'Jour_de_semaine' => $tempSeance['Jour_de_semaine'],
            'Horaire_debut' => $tempSeance['Horaire_debut'],
            'Horaire_fin' => $tempSeance['Horaire_fin'],
            'Type_seance' => $tempSeance['Type_seance'],
            'Code_Groupe' => $tempSeance['Code_Groupe'],
        ]);

        return response()->json(['message' => 'Sessions replaced successfully']);
    }


    public function dupliquer(Request $request)
    {
        Seance::create([
            "Id_Salle" => $request->Id_Salle,
            "Code_Groupe" => $request->Code_Groupe,
            "formateur_Matricule" => $request->formateur_Matricule,
            "Id_module" => $request->Id_module,
            "code_seance" => $request->code_seance,
            "Date" => $request->Date,
            "Jour_de_semaine" => $request->Jour_de_semaine,
            "No_Semaine_Calendrier" => $request->No_Semaine_Calendrier,
            "No_Semaine_DRIF" => $request->No_Semaine_DRIF,
            "MH" => $request->MH,
            "Horaire_debut" => $request->Horaire_debut,
            "Horaire_fin" => $request->Horaire_fin,
            "Type_seance" => $request->Id_Salle == 'A distance' ? "A DISTANCE" : "PRESENTIEL",
        ]);
        return response()->json([], 200);
    }


    public function supprimer($Code_Groupe, $formateur_Matricule, $code_seance, $No_Semaine_Calendrier)
    {
        Seance::where('Code_Groupe', $Code_Groupe)
            ->where('formateur_Matricule', $formateur_Matricule)
            ->where('code_seance', $code_seance)
            ->where('No_Semaine_Calendrier', $No_Semaine_Calendrier)
            ->delete();
        return response()->json([], 200);
    }

    public function getAnneeScolaires()
    {
        $dates = Seance::select('Date')->pluck('Date');

        $anneesScolaires = [];

        foreach ($dates as $date) {
            $year = date('Y', strtotime($date));
            $month = date('m', strtotime($date));

            if ($month >= 9) {
                $startYear = $year;
                $endYear = $year + 1;
                $academicYear = $startYear . ' - ' . $endYear;
            } else {
                $startYear = $year - 1;
                $endYear = $year;
                $academicYear = $startYear . ' - ' . $endYear;
            }

            if (!in_array($academicYear, $anneesScolaires)) {
                $anneesScolaires[] = $academicYear;
            }
        }

        // Retourner les années scolaires en JSON
        return response()->json([
            'annees' => $anneesScolaires
        ], 200);
    }


    public function storeFromSemaineBase($semaine, $semaineBase)
    {
        // Fetch seances from the base week
        $seancesSemaineBase = Seance::where('No_Semaine_Calendrier', $semaineBase)->get();
        // Fetch the semaineNow object
        $semaineNow = Semaine::where('semaine', $semaine)->first();

        // Check if $semaineNow is found
        if (!$semaineNow) {
            return response()->json(['message' => 'Semaine not found'], 404);
        }

        // Initialize the date with the first day of the week
        $date = new DateTime($semaineNow->firstDayOfWeek);

        // Loop through each seance and create a new one for the target week
        foreach ($seancesSemaineBase as $seance) {
            // Clone the date object to avoid modifying the original
            $seanceDate = clone $date;

            // Modify the date based on the code_seance prefix
            if (str_starts_with($seance->code_seance, "1")) {
                // No modification needed, already set to the first day
            } elseif (str_starts_with($seance->code_seance, "2")) {
                $seanceDate->modify('+1 day');
            } elseif (str_starts_with($seance->code_seance, "3")) {
                $seanceDate->modify('+2 days');
            } elseif (str_starts_with($seance->code_seance, "4")) {
                $seanceDate->modify('+3 days');
            } elseif (str_starts_with($seance->code_seance, "5")) {
                $seanceDate->modify('+4 days');
            } elseif (str_starts_with($seance->code_seance, "6")) {
                $seanceDate->modify('+5 days');
            }

            // Create new seance with the modified date
            Seance::create([
                "Id_Salle" => $seance->Id_Salle,
                "Code_Groupe" => $seance->Code_Groupe,
                "formateur_Matricule" => $seance->formateur_Matricule,
                "Id_module" => $seance->Id_module,
                "code_seance" => $seance->code_seance,
                "Date" => $seanceDate->format('Y-m-d'),
                "Jour_de_semaine" => $seance->Jour_de_semaine,
                "No_Semaine_Calendrier" => $semaineNow['semaine'],
                "No_Semaine_DRIF" => $semaineNow['Semaine_DRIF'],
                "MH" => $seance->MH,
                "Horaire_debut" => $seance->Horaire_debut,
                "Horaire_fin" => $seance->Horaire_fin,
                "Type_seance" => $seance->Type_seance,
            ]);
        }

        return response()->json(['message' => 'Seances successfully copied'], 200);
    }


}
