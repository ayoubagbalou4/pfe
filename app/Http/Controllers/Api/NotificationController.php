<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\firstNotification;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification as FacadesNotification;

class NotificationController extends Controller
{

    public function sendEmail()
    {
        $data = [
            ["name" => "ayoub", "email" => "ayoubagbalou4@gmail.com", "link" => "http://localhost:3000/emploi-formateur/19826"],
            ["name" => "aya", "email" => "ayazeggaf68@gmail.com", "link" => "http://localhost:3000/emploi-formateur/10657"],
            ["name" => "chaimae", "email" => "chaymaeelazzabi@gmail.com", "link" => "http://localhost:3000/emploi-formateur/10750"]
        ];

        foreach ($data as $clientData) {
            $detail = [
                "nomFormateur" => $clientData['name'],
                "link" => $clientData['link']
            ];

            $client = new User();
            $client->name = $clientData['name'];
            $client->email = $clientData['email'];
            $client->password = Hash::make('123');

            $client->notify(new firstNotification($detail));
        }
        return back()->with("success", "clients créés avec succès");
    }
}
