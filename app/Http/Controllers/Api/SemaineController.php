<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Seance;
use App\Models\Semaine;
use Illuminate\Http\Request;

class SemaineController extends Controller
{
    public function index()
    {
        $semaines = Semaine::orderBy('Semaine_DRIF')->get();
        return response()->json([
            'semaines' => $semaines
        ], 200);
    }

    public function destroy($id)
    {
        Semaine::find($id)->delete();
        return response('', 200);
    }

    public function store(Request $request)
    {
        Semaine::create($request->all());
        return response()->json([], 200);
    }

    public function show($id)
    {
        $semaine = Semaine::find($id);
        return response()->json([
            'semaine' => $semaine
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $semaine = Semaine::find($id);
        $semaine->update([
            'semaine' => $request->semaine,
            'firstDayOfWeek' => $request->firstDayOfWeek,
            'lastDayOfWeek' => $request->lastDayOfWeek,
            'Semaine_DRIF' => $request->Semaine_DRIF,
            'annee' => $request->annee,
        ]);
        return response()->json([], 200);
    }


    public function insertWeeks(Request $request)
    {
        $date = $request->date;
        $year = date('Y', strtotime($date));
        $yeaOfLastDate = $year + 1;

        $lastDateOfYear = $yeaOfLastDate . '-06-24';
        $weekNumber = date('W', strtotime($date));

        $startDateOfWeek = date('Y-m-d', strtotime('monday this week', strtotime($date)));
        $semaineDrif = 1;

        $weeks = [];
        while (strtotime($date) <= strtotime($lastDateOfYear)) {
            $weekNumber = date('W', strtotime($date));
            $startDateOfWeek = date('Y-m-d', strtotime('monday this week', strtotime($date)));
            $endDateOfWeek = date('Y-m-d', strtotime('sunday this week', strtotime($date)));

            Semaine::create([
                'semaine' => $weekNumber,
                'firstDayOfWeek' => $startDateOfWeek,
                'lastDayOfWeek' => $endDateOfWeek,
                'Semaine_DRIF' => $semaineDrif++,
                'annee' => date('Y', strtotime($startDateOfWeek)),
            ]);

            $date = date('Y-m-d', strtotime($date . ' +1 week'));
        }

        return response()->json($weeks, 200);
    }
}
