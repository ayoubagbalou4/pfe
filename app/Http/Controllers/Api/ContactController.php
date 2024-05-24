<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return response()->json([
            'contacts' => $contacts
        ], 200);
    }
    public function store(Request $request)
    {
        Contact::create($request->all());
        return response()->json([], 200);
    }
    public function destroy($id)
    {
        Contact::where('id', $id)->delete();
        return response('', 200);
    }

    public function Updatecontacts()
    {
        $contacts = Contact::where('read',0);
        $contacts->update([
            'read' => 1,
        ]);
        return response()->json([], 200);
    }
}
