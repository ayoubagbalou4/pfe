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
    public function sendEmail(Request $request)
    {

        $client = new User();
        $client->name = 'aya';
        $client->email = "2003110600198@ofppt-edu.ma";
        $client->password = Hash::make('123');

        $detail = [
            "greeting" => $client->name,
            "body" => "test",
            "actiontext" => "thanks for subscribing",
            "actionurl" => $client->email,
            "lastline" => "this last line"
        ];

        FacadesNotification::send($client, new firstNotification($detail));
        return back()->with("success", "client creer avec succe");
    }
}
