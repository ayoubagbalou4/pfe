<?php

namespace Database\Seeders;

use App\Models\Formateur;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormateurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Formateur::create([
            "Matricule" => "8438",
            "Nom_Formateur" => "RACHIDA ELAFIFI",
            "Abreviation" => "AFF",
            "Telephone" => "0606584774",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "RACHIDA.ELAFIFI@ofppt-edu.ma",
            "Id_Salle" => "SINFO",
            "Color" => "#FF5733",
            "Background_Color" => "#FF0000"

        ]);
        Formateur::create([
            "Matricule" => "9435",
            "Nom_Formateur" => "RIAD AMAL",
            "Abreviation" => "RIA",
            "Telephone" => "0665444216",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "AMAL.RIAD@ofppt-edu.ma",
            "Id_Salle" => "SN2",
            "Color" => "#33FF57",
            "Background_Color" => "#0000FF"

        ]);
        Formateur::create([
            "Matricule" => "10148",
            "Nom_Formateur" => "EL BEGGAR MERIEM",
            "Abreviation" => "BGM",
            "Telephone" => "0661765498",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "MERIEM.ELBEGGAR@ofppt-edu.ma",
            "Id_Salle" => "SID5",
            "Color" => "#5733FF",
            "Background_Color" => "#00FF00"

        ]);
        Formateur::create([
            "Matricule" => "10657",
            "Nom_Formateur" => "YAZIDI ALAOUI YOUSSEF",
            "Abreviation" => "YAY",
            "Telephone" => "0670700726",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "YOUSSEF.YAZIDIALAOUI@ofppt-edu.ma",
            "Id_Salle" => "SDD3",
            "Color" => "#FF3366",
            "Background_Color" => "#FFFF00"

        ]);
        Formateur::create([
            "Matricule" => "10750",
            "Nom_Formateur" => "RHAZOUANI ABDELALI",
            "Abreviation" => "RHA",
            "Telephone" => "0666646786",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "ABDELALI.RHAZOUANI@ofppt-edu.ma",
            "Id_Salle" => "SDD5",
            "Color" => "#66FF33",
            "Background_Color" => "#FFA500"

        ]);
        Formateur::create([
            "Matricule" => "10758",
            "Nom_Formateur" => "NAAMANY MOUNIA",
            "Abreviation" => "NMO",
            "Telephone" => "0675399626",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "MOUNIA.NAAMANY@ofppt-edu.ma",
            "Id_Salle" => "SDD2",
            "Color" => "#3366FF",
            "Background_Color" => "#800080"

        ]);
        Formateur::create([
            "Matricule" => "10777",
            "Nom_Formateur" => "AZEGGOUAR MOHAMED KARIM",
            "Abreviation" => "AZK",
            "Telephone" => "0678817881",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "MOHAMEDKARIM.AZEGGOUAR@ofppt-edu.ma",
            "Id_Salle" => "SDD1",
            "Color" => "#FFCC33",
            "Background_Color" => "#FFC0CB"

        ]);
        Formateur::create([
            "Matricule" => "10854",
            "Nom_Formateur" => "MOUMNI SANAE",
            "Abreviation" => "MOS",
            "Telephone" => "0678110872",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "SANAE.MOUMNI@ofppt-edu.ma",
            "Id_Salle" => "SID1",
            "Color" => "#33FFCC",
            "Background_Color" => "#964B00"

        ]);
        Formateur::create([
            "Matricule" => "10855",
            "Nom_Formateur" => "JMOULA SAFAE",
            "Abreviation" => "JMS",
            "Telephone" => "0612577444",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "SAFAE.JMOULA@ofppt-edu.ma",
            "Id_Salle" => "SID2",
            "Color" => "#CC33FF",
            "Background_Color" => "#808080"

        ]);
        Formateur::create([
            "Matricule" => "11272",
            "Nom_Formateur" => "HAJJAJ JIHANE",
            "Abreviation" => "HJJ",
            "Telephone" => "0662055736",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "JIHANE.HAJJAJ@ofppt-edu.ma",
            "Id_Salle" => "SID2",
            "Color" => "#FF9933",
            "Background_Color" => "#FFFFFF"

        ]);
        Formateur::create([
            "Matricule" => "11330",
            "Nom_Formateur" => "ZOKRI ABDELLAH",
            "Abreviation" => "ZOA",
            "Telephone" => "0660556186",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "ABDELLAH.ZOKRI@ofppt-edu.ma",
            "Id_Salle" => "SID4",
            "Color" => "#33FF99",
            "Background_Color" => "#000000"

        ]);
        Formateur::create([
            "Matricule" => "11533",
            "Nom_Formateur" => "GUEDDALI OTHMAN",
            "Abreviation" => "GUO",
            "Telephone" => "0601141524",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "OTHMAN.GUEDDALI@ofppt-edu.ma",
            "Id_Salle" => "SL1",
            "Color" => "#9933FF",
            "Background_Color" => "#40E0D0"

        ]);
        Formateur::create([
            "Matricule" => "12224",
            "Nom_Formateur" => "HARRAK LAILA",
            "Abreviation" => "HAL",
            "Telephone" => "0666014906",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "LAILA.HARRAK@ofppt-edu.ma",
            "Id_Salle" => "SN1",
            "Color" => "#FF6633",
            "Background_Color" => "#4B0082"

        ]);
        Formateur::create([
            "Matricule" => "12227",
            "Nom_Formateur" => "AKHAZZAN EL IMRANI SIHAM",
            "Abreviation" => "AKH",
            "Telephone" => "0666372290",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA IBN MARHAL TANGER",
            "Mutualise" => 1,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "SIHAM.AKHAZZANELIMRANI@ofppt-edu.ma",
            "Id_Salle" => "SL1",
            "Color" => "#33FF66",
            "Background_Color" => "#00FFFF"

        ]);
        Formateur::create([
            "Matricule" => "13053",
            "Nom_Formateur" => "ZIANE ASSIA",
            "Abreviation" => "ZIA",
            "Telephone" => "0666390390",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "ASSIA.ZIANE@ofppt-edu.ma",
            "Id_Salle" => "SL3",
            "Color" => "#6633FF",
            "Background_Color" => "#FF00FF"

        ]);
        Formateur::create([
            "Matricule" => "13199",
            "Nom_Formateur" => "BADA ABDERRAHIM",
            "Abreviation" => "BAD",
            "Telephone" => "0669340100",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "ABDERRAHIM.BADA@ofppt-edu.ma",
            "Id_Salle" => "SN1",
            "Color" => "#FF33CC",
            "Background_Color" => "#808000"

        ]);
        Formateur::create([
            "Matricule" => "13552",
            "Nom_Formateur" => "EL GHAILANI HICHAM",
            "Abreviation" => "GHA",
            "Telephone" => "0610381092",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "HICHAM.ELGHAILANI@ofppt-edu.ma",
            "Id_Salle" => "SID3",
            "Color" => "#CC33FF",
            "Background_Color" => "#FA8072"

        ]);
        Formateur::create([
            "Matricule" => "13553",
            "Nom_Formateur" => "SANDI MERYEM",
            "Abreviation" => "SAM",
            "Telephone" => "0662555535",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "MERYEM.SANDI@ofppt-edu.ma",
            "Id_Salle" => "SID3",
            "Color" => "#CCFF33",
            "Background_Color" => "#FFD700"

        ]);
        Formateur::create([
            "Matricule" => "13556",
            "Nom_Formateur" => "EL KHALOUI FERDAOUS",
            "Abreviation" => "FIR",
            "Telephone" => "0642647436",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "FIRDAOUS.ELKHALOUI@ofppt-edu.ma",
            "Id_Salle" => "SL2",
            "Color" => "#33CCFF",
            "Background_Color" => "#C0C0C0"

        ]);
        Formateur::create([
            "Matricule" => "13566",
            "Nom_Formateur" => "EL AKEL BOUCHRA",
            "Abreviation" => "AKB",
            "Telephone" => "0666940941",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "BOUCHRA.ELAKEL@ofppt-edu.ma",
            "Id_Salle" => "SDD1",
            "Color" => "#FF3333",
            "Background_Color" => "#E6E6FA"

        ]);
        Formateur::create([
            "Matricule" => "13612",
            "Nom_Formateur" => "BOUBEKRI SAFA",
            "Abreviation" => "SAF",
            "Telephone" => "0679268676",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "SAFA.BOUBEKRI@ofppt-edu.ma",
            "Id_Salle" => "SN2",
            "Color" => "#33FF33",
            "Background_Color" => "#50C878"

        ]);
        Formateur::create([
            "Matricule" => "13714",
            "Nom_Formateur" => "El MANSOURI OUSSAMA",
            "Abreviation" => "MAN",
            "Telephone" => "0645633336",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "OUSSAMA.ELMANSOURI@ofppt-edu.ma",
            "Id_Salle" => "SINFO",
            "Color" => "#3333FF",
            "Background_Color" => "#082567"

        ]);
        Formateur::create([
            "Matricule" => "13716",
            "Nom_Formateur" => "BOUYBANIN ANASS",
            "Abreviation" => "BOU",
            "Telephone" => "0670065923",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "ANASS.BOUYBANIN@ofppt-edu.ma",
            "Id_Salle" => "SID1",
            "Color" => "#FFCC99",
            "Background_Color" => "#FFC87C"

        ]);
        Formateur::create([
            "Matricule" => "14041",
            "Nom_Formateur" => "SAMADI BOUCHRA",
            "Abreviation" => "SAB",
            "Telephone" => "0664627963",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "BOUCHRA.SAMADI@ofppt-edu.ma",
            "Id_Salle" => "SID5",
            "Color" => "#99FFCC",
            "Background_Color" => "#FF7F50"

        ]);
        Formateur::create([
            "Matricule" => "15035",
            "Nom_Formateur" => "DENGUIR MOURAD",
            "Abreviation" => "DNG",
            "Telephone" => "0618969085",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "MOURAD.DENGUIR@ofppt-edu.ma",
            "Id_Salle" => "SDD5",
            "Color" => "#CC99FF",
            "Background_Color" => "#F5F5DC"

        ]);
        Formateur::create([
            "Matricule" => "16424",
            "Nom_Formateur" => "ADDARRAZI ILHAM",
            "Abreviation" => "ILH",
            "Telephone" => "0658719918",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "ILHAM.ADDARRAZI@ofppt-edu.ma",
            "Id_Salle" => "SDD2",
            "Color" => "#FF99CC",
            "Background_Color" => "#FF00FF"

        ]);
        Formateur::create([
            "Matricule" => "17534",
            "Nom_Formateur" => "BAAMEL LAILA",
            "Abreviation" => "BAM",
            "Telephone" => "0661250541",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "LAILA.BAAMEL@ofppt-edu.ma",
            "Id_Salle" => "SCC",
            "Color" => "#CCFF99",
            "Background_Color" => "#E0B0FF"

        ]);
        Formateur::create([
            "Matricule" => "17544",
            "Nom_Formateur" => "OUAFIQ MAJDA",
            "Abreviation" => "MAJ",
            "Telephone" => "0644605309",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "MAJDA.OUAFIQ@ofppt-edu.ma",
            "Id_Salle" => "SDD3",
            "Color" => "#99CCFF",
            "Background_Color" => "#00FFFF"

        ]);
        Formateur::create([
            "Matricule" => "18645",
            "Nom_Formateur" => "ELMKHARBECH HALIMA",
            "Abreviation" => "MKH",
            "Telephone" => "0601825673",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "HALIMA.ELMKHARBECH@ofppt-edu.ma",
            "Id_Salle" => "SCC",
            "Color" => "#FF6699",
            "Background_Color" => "#87CEEB"

        ]);
        Formateur::create([
            "Matricule" => "19141",
            "Nom_Formateur" => "EL ANTIR YASSINE",
            "Abreviation" => "YAS",
            "Telephone" => "0707777509",
            "MH_Statutaire" => 36,
            "Statut" => "Permanant",
            "Affectation" => "CENTRE PRINCESSE LALLA ASMAE POUR LES ENFANTS SOURDS",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "YASSINE.ELANTIR@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#99FF66",
            "Background_Color" => "#E2725B"

        ]);
        Formateur::create([
            "Matricule" => "19360",
            "Nom_Formateur" => "FADILI HAMID ILIAS",
            "Abreviation" => "IHF",
            "Telephone" => "0665393339",
            "MH_Statutaire" => 36,
            "Statut" => "Permanant",
            "Affectation" => "CMC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "HAMIDILIAS.FADILI@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#6699FF",
            "Background_Color" => "#DFFF00"

        ]);
        Formateur::create([
            "Matricule" => "19443",
            "Nom_Formateur" => "JANJARY JIHAD",
            "Abreviation" => "JIH",
            "Telephone" => "0699017593",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "CMC TANGER",
            "Mutualise" => 1,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "JIHAD.JANJARY@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#FF9966",
            "Background_Color" => "#E6E6FA"

        ]);
        Formateur::create([
            "Matricule" => "19478",
            "Nom_Formateur" => "LABIAD MOHAMMED",
            "Abreviation" => "LAB",
            "Telephone" => "0625646530",
            "MH_Statutaire" => 36,
            "Statut" => "Permanant",
            "Affectation" => "CMC TANGER",
            "Mutualise" => 1,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "MOHAMMED.LABIAD@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#66FF99",
            "Background_Color" => "#008080"

        ]);
        Formateur::create([
            "Matricule" => "19517",
            "Nom_Formateur" => "TIZNITI DOUAE",
            "Abreviation" => "TIZ",
            "Telephone" => "0648888813",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "CMC TANGER",
            "Mutualise" => 1,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "DOUAE.TIZNITI@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#9966FF",
            "Background_Color" => "#E6E6FA"

        ]);
        Formateur::create([
            "Matricule" => "19540",
            "Nom_Formateur" => "EGHLALOU SARA",
            "Abreviation" => "SAR",
            "Telephone" => "0603825203",
            "MH_Statutaire" => 36,
            "Statut" => "Permanant",
            "Affectation" => "CMC TANGER",
            "Mutualise" => 1,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "SARA.EGHLALOU@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#FF66CC",
            "Background_Color" => "#7FFFD4"

        ]);
        Formateur::create([
            "Matricule" => "19682",
            "Nom_Formateur" => "ADERDOR MERIEM",
            "Abreviation" => "ADR",
            "Telephone" => "0619454146",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "CMC TANGER",
            "Mutualise" => 1,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "MERIEM.ADERDOR@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#CC66FF",
            "Background_Color" => "#D10056"
        ]);
        Formateur::create([
            "Matricule" => "19761",
            "Nom_Formateur" => "ALIOUI ANAS",
            "Abreviation" => "ALI",
            "Telephone" => "0661866293",
            "MH_Statutaire" => 36,
            "Statut" => "Permanant",
            "Affectation" => "CMC TANGER",
            "Mutualise" => 1,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "ANAS.ALIOUI@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#CCFF66",
            "Background_Color" => "#A0522D"
        ]);
        Formateur::create([
            "Matricule" => "19826",
            "Nom_Formateur" => "COUZI HAJAR",
            "Abreviation" => "COH",
            "Telephone" => "0688498198",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "CMC TANGER",
            "Mutualise" => 1,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "HAJAR.COUZI@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#66CCFF",
            "Background_Color" => "#483C32"

        ]);
        Formateur::create([
            "Matricule" => "19974",
            "Nom_Formateur" => "LAHBABI MOHAMMED AMINE",
            "Abreviation" => "LMA",
            "Telephone" => "0669900121",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA ROUTE AEROPOR TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "MOHAMMEDAMINE.LAHBABI@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "",
            "Background_Color" => "#6A0DAD"
          ]);
        Formateur::create([
            "Matricule" => "19977",
            "Nom_Formateur" => "MHADI OUAMMI HAFSA",
            "Abreviation" => "HMA",
            "Telephone" => "0659376845",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "HAFSA.MHADIOUAMMI@ofppt-edu.ma",
            "Id_Salle" => "SDD4",
            "Color" => "#FF6666",
            "Background_Color" => "#9F2B68"

        ]);
        Formateur::create([
            "Matricule" => "20414",
            "Nom_Formateur" => "YAHYANI ISSAM",
            "Abreviation" => "YAH",
            "Telephone" => "0707017418",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "SyncAD",
            "Id_Salle" => "",
            "Color" => "#6666FF",
            "Background_Color" => "#000080"

        ]);
        Formateur::create([
            "Matricule" => "20550",
            "Nom_Formateur" => "EL HAMMOUTI ISSAM",
            "Abreviation" => "HAI",
            "Telephone" => "0672382723",
            "MH_Statutaire" => 26,
            "Statut" => "Permanant",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "ISSAM.ELHAMMOUTI@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#CC33FF",
            "Background_Color" => "#8B3E2F"

        ]);
        Formateur::create([
            "Matricule" => "A229937",
            "Nom_Formateur" => "BOUFARES AICHA",
            "Abreviation" => "BAI",
            "Telephone" => "",
            "MH_Statutaire" => 7.5,
            "Statut" => "Vacataire",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "AICHA.BOUFARES@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#CC33FF",
            "Background_Color" => "#4169E1"

        ]);
        Formateur::create([
            "Matricule" => "C446708",
            "Nom_Formateur" => "RGUIOUI RACHIDA",
            "Abreviation" => "RGR",
            "Telephone" => "",
            "MH_Statutaire" => 7.5,
            "Statut" => "Vacataire",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "RACHIDA.RGUIOUI@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "",
            "Background_Color" => "#50C878"

        ]);
        Formateur::create([
            "Matricule" => "L52029",
            "Nom_Formateur" => "NOUINOU CHAHID",
            "Abreviation" => "NCH",
            "Telephone" => "0653561499",
            "MH_Statutaire" => 7.5,
            "Statut" => "Vacataire",
            "Affectation" => "ISTA ROUTE AEROPOR TANGER",
            "Mutualise" => 1,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "CHAHID.NOUINOU@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "#CC33FF",
            "Background_Color" => "#CD5C5C"

        ]);
        Formateur::create([
            "Matricule" => "R222610",
            "Nom_Formateur" => "ALLACH SAMIR",
            "Abreviation" => "ALL",
            "Telephone" => "0615571400",
            "MH_Statutaire" => 7.5,
            "Statut" => "Vacataire",
            "Affectation" => "ISTA NTIC TANGER",
            "Mutualise" => 0,
            "EFP_mutualise" => "ISTA NTIC TANGER",
            "Email" => "SAMIR.ALLACH@ofppt-edu.ma",
            "Id_Salle" => "",
            "Color" => "",
            "Background_Color" => "#708090"

        ]);
    }
}










































