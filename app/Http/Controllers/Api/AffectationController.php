<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Affectation;
use Illuminate\Http\Request;

class AffectationController extends Controller
{
    public function index()
    {
        $affectations = Affectation::with('formateur','module')->get();
        return response()->json([
            'affectations' => $affectations
        ],200);
    }
}
