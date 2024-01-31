<?php

namespace Database\Seeders;

use App\Models\Filiere;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FiliereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Filiere::create([
            "Code_Filiere" => "NTIC_MIR_BP",
            "Libelle_Filiere" => "Maintenance Informatique et Réseaux",
            "Lib_Filiere_Arabe" => "صيانة الحاسوب و الشبكات",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "BP",
            "Type_de_formation" => "PP",
            "Code_Filiere_Tronc_Commun" => "",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_CMOSE_FQ",
            "Libelle_Filiere" => "Certification Microsoft Office Specialist en Excel",
            "Lib_Filiere_Arabe" => "Ms Excel شهادة أخصائي مايكروسوفت أوفيس",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "FQ",
            "Type_de_formation" => "Qualifiante",
            "Code_Filiere_Tronc_Commun" => "",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_CMOSW_FQ",
            "Libelle_Filiere" => "Certification Microsoft Office Specialist en Word",
            "Lib_Filiere_Arabe" => "Ms Word شهادة أخصائي مايكروسوفت أوفيس ",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "FQ",
            "Type_de_formation" => "Qualifiante",
            "Code_Filiere_Tronc_Commun" => "",
        ]);
        Filiere::create([
            "Code_Filiere" => "GC_PIE_FQ",
            "Libelle_Filiere" => "Programme d'Innovation Entrepreneuriale : de l'idée au projet viable",
            "Lib_Filiere_Arabe" => "برنامج الابتكار المقاولاتيي: من فكرة إلى مشروع قابل للحياة",
            "Creneau" => "CDJ",
            "Code_Secteur" => "CG",
            "Secteur" => "Gestion et Commerce",
            "Niveau_de_formation" => "FQ",
            "Type_de_formation" => "Qualifiante",
            "Code_Filiere_Tronc_Commun" => "",
        ]);
        Filiere::create([
            "Code_Filiere" => "NTIC_TDI_TS_RCDS",
            "Libelle_Filiere" => "(CDS)Techniques de Développement Informatique",
            "Lib_Filiere_Arabe" => "تقنيات تطوير تكنولوجيا المعلومات",
            "Creneau" => "CDS",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_DEV_TS",
            "Libelle_Filiere" => "Développement Digital",
            "Lib_Filiere_Arabe" => "التطوير الرقمي",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_DEVOAM_TS",
            "Libelle_Filiere" => "Développement Digital option Applications Mobiles",
            "Lib_Filiere_Arabe" => "التطوير الرقمي تخصص تطبيقات المحمول",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "DIA_DEV_TS",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_DEVOWFS_TS",
            "Libelle_Filiere" => "Développement Digital option Web Full Stack",
            "Lib_Filiere_Arabe" => "Full stack التطوير الرقمي تخصص الويب المتكامل",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "DIA_DEV_TS",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_DEVOWFS_TS_RCDS",
            "Libelle_Filiere" => "Développement Digital option Web Full Stack",
            "Lib_Filiere_Arabe" => "التطوير الرقمي تخصص الويب المتكامل",
            "Creneau" => "CDS",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "",
        ]);
        Filiere::create([
            "Code_Filiere" => "AIG_INFO_TS",
            "Libelle_Filiere" => "Infographie",
            "Lib_Filiere_Arabe" => "الطبع المعلوماتي",
            "Creneau" => "CDJ",
            "Code_Secteur" => "AIG",
            "Secteur" => "Arts et industrie Graphiques",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_ID_TS",
            "Libelle_Filiere" => "Infrastructure Digitale",
            "Lib_Filiere_Arabe" => "البنية التحتية الرقمية",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_IDOCC_TS",
            "Libelle_Filiere" => "Infrastructure Digitale option  Cloud Computing",
            "Lib_Filiere_Arabe" => "البنية التحتية الرقمية تخصص الحوسبة السحابية",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "DIA_IDOCC_TS",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_IDOCS_TS",
            "Libelle_Filiere" => "Infrastructure Digitale option Cyber sécurité",
            "Lib_Filiere_Arabe" => "البنية التحتية الرقمية تخصص الأمن السبراني",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "DIA_IDOCC_TS",
        ]);
        Filiere::create([
            "Code_Filiere" => "DIA_IDOSR_TS",
            "Libelle_Filiere" => "Infrastructure Digitale option Systèmes et Réseaux",
            "Lib_Filiere_Arabe" => "البنية التحتية الرقمية تخصص النظم والشبكات",
            "Creneau" => "CDJ",
            "Code_Secteur" => "DIA",
            "Secteur" => "Digital et Intelligence Artificielle",
            "Niveau_de_formation" => "TS",
            "Type_de_formation" => "Diplômante",
            "Code_Filiere_Tronc_Commun" => "DIA_IDOCC_TS",
        ]);
    }
}
