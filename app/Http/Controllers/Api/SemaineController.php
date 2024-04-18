<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Semaine;
use Illuminate\Http\Request;

class SemaineController extends Controller
{
    public function index()
    {
        $semaines = Semaine::all();
        return response()->json([
            'semaines' => $semaines
        ], 200);
    }
}
