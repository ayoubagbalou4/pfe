<?php

namespace Database\Seeders;

use App\Models\Salle;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SalleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Salle::create(
            [
                "Id_Salle" => "SDD1",
                "Nom_Salle" => "Salle de développement digital 1",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 1
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SDD2",
                "Nom_Salle" => "Salle de développement digital 2",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 1
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SDD3",
                "Nom_Salle" => "Salle de développement digital 3",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 1
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SID4",
                "Nom_Salle" => "Salle d'infrastructure digitale 4",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 1
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SID5",
                "Nom_Salle" => "Salle d'infrastructure digitale 4",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 1
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SINFO",
                "Nom_Salle" => "Salle d'infographie",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 1
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SDD4",
                "Nom_Salle" => "Salle de développement digital 4",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 1
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "COURS5",
                "Nom_Salle" => "Cours 5",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SN1",
                "Nom_Salle" => "Salle numérique 1",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SN2",
                "Nom_Salle" => "Salle numérique 2",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SID1",
                "Nom_Salle" => "Salle d'infrastructure digitale 1",
                "Etage" => "1ere_Etage",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SID2",
                "Nom_Salle" => "Salle d'infrastructure digitale 2",
                "Etage" => "1ere_Etage",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SID3",
                "Nom_Salle" => "Salle d'infrastructure digitale 3",
                "Etage" => "1ere_Etage",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SDD5",
                "Nom_Salle" => "Salle de développement digital 5",
                "Etage" => "1ere_Etage",
                "Capacite" => "25",
                "Spesialisee" => 1
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SCC",
                "Nom_Salle" => "Salle de compétances comportementale",
                "Etage" => "1ere_Etage",
                "Capacite" => "48",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "AMPHI",
                "Nom_Salle" => "Amphi théatre",
                "Etage" => "1ere_Etage",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SL1",
                "Nom_Salle" => "Salle de langue 1",
                "Etage" => "1ere_Etage",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SL2",
                "Nom_Salle" => "Salle de langue 2",
                "Etage" => "1ere_Etage",
                "Capacite" => "25",
                "Spesialisee" => 1
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "SL3",
                "Nom_Salle" => "Salle de langue 3",
                "Etage" => "1ere_Etage",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
        Salle::create(
            [
                "Id_Salle" => "CC",
                "Nom_Salle" => "Career Center",
                "Etage" => "RDC",
                "Capacite" => "25",
                "Spesialisee" => 0
            ]
        );
    }
}

