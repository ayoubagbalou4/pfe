<?php

namespace Database\Seeders;

use App\Models\Groupe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GroupeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Groupe::create([
            "Code_Groupe" => "MIR201",
            "Code_Filiere" => "NTIC_MIR_BP",
            "background"=>"rgba(86, 2, 86, 0.599)",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10148",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "MIR301",
            "Code_Filiere" => "NTIC_MIR_BP",
            "background"=>"rgba(86, 2, 86, 0.599)",
            "Nombre_Inscrits" => "15",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13553",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSE101",
            "Code_Filiere" => "DIA_CMOSE_FQ",
            'background' => '#5776f2cf',
            "Nombre_Inscrits" => "22",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13199",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSE102",
            "Code_Filiere" => "DIA_CMOSE_FQ",
            'background' => '#5776f2cf',
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13199",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSE103",
            "Code_Filiere" => "DIA_CMOSE_FQ",
            'background' => '#5776f2cf',
            "Nombre_Inscrits" => "21",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13199",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSE104",
            "Code_Filiere" => "DIA_CMOSE_FQ",
            'background' => '#5776f2cf',
            "Nombre_Inscrits" => "21",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13199",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSE105",
            "Code_Filiere" => "DIA_CMOSE_FQ",
            'background' => '#5776f2cf',
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13199",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSW101",
            "Code_Filiere" => "DIA_CMOSW_FQ",
            'background'=>"rgba(40, 164, 152, 0.651)",
            "Nombre_Inscrits" => "21",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13199",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSW102",
            "Code_Filiere" => "DIA_CMOSW_FQ",
            'background'=>"rgba(40, 164, 152, 0.651)",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "12224",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSW103",
            "Code_Filiere" => "DIA_CMOSW_FQ",
            'background'=>"rgba(40, 164, 152, 0.651)",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "12224",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSW104",
            "Code_Filiere" => "DIA_CMOSW_FQ",
            'background'=>"rgba(40, 164, 152, 0.651)",
            "Nombre_Inscrits" => "25",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "12224",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSW105",
            "Code_Filiere" => "DIA_CMOSW_FQ",
            'background'=>"rgba(40, 164, 152, 0.651)",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "12224",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSW106",
            "Code_Filiere" => "DIA_CMOSW_FQ",
            'background'=>"rgba(40, 164, 152, 0.651)",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "12224",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "CMOSW107",
            "Code_Filiere" => "DIA_CMOSW_FQ",
            'background'=>"rgba(40, 164, 152, 0.651)",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "12224",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "PIE101",
            "Code_Filiere" => "GC_PIE_FQ",
            "background"=>"#FFC0CB",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "12224",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "PIE102",
            "Code_Filiere" => "GC_PIE_FQ",
            "background"=>"#FFC0CB",
            "Nombre_Inscrits" => "25",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "18645",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "PIE103",
            "Code_Filiere" => "GC_PIE_FQ",
            "background"=>"#FFC0CB",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13199",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "PIE104",
            "Code_Filiere" => "GC_PIE_FQ",
            "background"=>"#FFC0CB",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "18645",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "PIE105",
            "Code_Filiere" => "GC_PIE_FQ",
            "background"=>"#FFC0CB",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "18645",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "TDI201",
            "Code_Filiere" => "NTIC_TDI_TS_RCDS",
            "background"=>"#999",
            "Nombre_Inscrits" => "13",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13199",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "TDI301",
            "Code_Filiere" => "NTIC_TDI_TS_RCDS",
            "background"=>"#999",
            "Nombre_Inscrits" => "22",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10657",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEV101",
            "Code_Filiere" => "DIA_DEV_TS",
            "background"=>"#ebb22ece",
            "Nombre_Inscrits" => "22",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "16424",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEV102",
            "Code_Filiere" => "DIA_DEV_TS",
            "background"=>"#ebb22ece",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "16424",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEV103",
            "Code_Filiere" => "DIA_DEV_TS",
            "background"=>"#ebb22ece",
            "Nombre_Inscrits" => "21",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10758",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEV104",
            "Code_Filiere" => "DIA_DEV_TS",
            "background"=>"#ebb22ece",
            "Nombre_Inscrits" => "21",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10758",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEV105",
            "Code_Filiere" => "DIA_DEV_TS",
            "background"=>"#ebb22ece",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13612",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEVOAM201",
            "Code_Filiere" => "DIA_DEVOAM_TS",
            "background"=>"#376505aa",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10657",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEVOWFS201",
            "Code_Filiere" => "DIA_DEVOWFS_TS",
            "background"=>"#e14503d6",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13566",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEVOWFS202",
            "Code_Filiere" => "DIA_DEVOWFS_TS",
            "background"=>"#e14503d6",
            "Nombre_Inscrits" => "22",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13566",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEVOWFS203",
            "Code_Filiere" => "DIA_DEVOWFS_TS",
            "background"=>"#e14503d6",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "17544",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEVOWFS204",
            "Code_Filiere" => "DIA_DEVOWFS_TS",
            "background"=>"#e14503d6",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "17544",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEVOWFS205",
            "Code_Filiere" => "DIA_DEVOWFS_TS",
            "background"=>"#e14503d6",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10777",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEVOWFS206",
            "Code_Filiere" => "DIA_DEVOWFS_TS",
            "background"=>"#e14503d6",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10777",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "DEVOWFS101",
            "Code_Filiere" => "DIA_DEVOWFS_TS_RCDS",
            "background"=>"rgba(5, 243, 116, 0.713)",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13552",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "INFO101",
            "Code_Filiere" => "AG_INFO_TS",
            'background'=>'#856f8596',
            "Nombre_Inscrits" => "25",
            "Mode_de_Formation" => "Altérnée",
            "formateur_Matricule" => "8438",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "INFO102",
            "Code_Filiere" => "AG_INFO_TS",
            'background'=>'#856f8596',
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Altérnée",
            "formateur_Matricule" => "8438",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "INFO201",
            "Code_Filiere" => "AG_INFO_TS",
            'background'=>'#856f8596',
            "Nombre_Inscrits" => "14",
            "Mode_de_Formation" => "Altérnée",
            "formateur_Matricule" => "13714",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "INFO202",
            "Code_Filiere" => "AG_INFO_TS",
            'background'=>'#856f8596',
            "Nombre_Inscrits" => "15",
            "Mode_de_Formation" => "Altérnée",
            "formateur_Matricule" => "13714",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "ID101",
            "Code_Filiere" => "DIA_ID_TS",
            "background"=>"rgba(13, 228, 236, 0.825)",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "11272",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "ID102",
            "Code_Filiere" => "DIA_ID_TS",
            "background"=>"rgba(13, 228, 236, 0.825)",
            "Nombre_Inscrits" => "22",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "11330",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "ID103",
            "Code_Filiere" => "DIA_ID_TS",
            "background"=>"rgba(13, 228, 236, 0.825)",
            "Nombre_Inscrits" => "25",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "14041",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "ID104",
            "Code_Filiere" => "DIA_ID_TS",
            "background"=>"rgba(13, 228, 236, 0.825)",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13553",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "ID105",
            "Code_Filiere" => "DIA_ID_TS",
            "background"=>"rgba(13, 228, 236, 0.825)",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10148",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "ID106",
            "Code_Filiere" => "DIA_ID_TS",
            "background"=>"rgba(13, 228, 236, 0.825)",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10855",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "IDOCC201",
            "Code_Filiere" => "DIA_IDOCC_TS",
            "background"=>"rgba(46, 98, 92, 0.846)",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10750",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "IDOCS201",
            "Code_Filiere" => "DIA_IDOCS_TS",
            "background"=>"rgb(177, 136, 86)",
            "Nombre_Inscrits" => "25",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13716",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "IDOSR201",
            "Code_Filiere" => "DIA_IDOSR_TS",
            "background"=>"#d089c9bd",
            "Nombre_Inscrits" => "24",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10854",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "IDOSR202",
            "Code_Filiere" => "DIA_IDOSR_TS",
            "background"=>"#d089c9bd",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "10855",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "IDOSR203",
            "Code_Filiere" => "DIA_IDOSR_TS",
            "background"=>"#d089c9bd",
            "Nombre_Inscrits" => "23",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "13552",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
        Groupe::create([
            "Code_Groupe" => "IDOSR204",
            "Code_Filiere" => "DIA_IDOSR_TS",
            "background"=>"#d089c9bd",
            "Nombre_Inscrits" => "22",
            "Mode_de_Formation" => "Résidentielle",
            "formateur_Matricule" => "15035",
            "Stagiaire_Responsable" => "",
            "Telephone_responsable" => "",
            "Adjoint_Responsable" => "",
            "Telephone_Adjoint" => "",
        ]);
    }
}
