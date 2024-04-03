<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\FiliereModule;
use Illuminate\Http\Request;

class FiliereModuleController extends Controller
{
    public function index()
    {
        $filiereModules = FiliereModule::with('module')->get();
        return response()->json([
            'filiereModules' => $filiereModules
        ], 200);
    }
}
