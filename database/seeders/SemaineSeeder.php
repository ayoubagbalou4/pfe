<?php

namespace Database\Seeders;

use App\Models\Semaine;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SemaineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Semaine::create([
            'semaine' => 36,
            'firstDayOfWeek' => '2023-09-04',
            'lastDayOfWeek' => '2023-09-10',
            'Semaine_DRIF' => 1,
        ]);
        Semaine::create([
            'semaine' => 37,
            'firstDayOfWeek' => '2023-09-11',
            'lastDayOfWeek' => '2023-09-17',
            'Semaine_DRIF' => 2,
        ]);
        Semaine::create([
            'semaine' => 38,
            'firstDayOfWeek' => '2023-09-18',
            'lastDayOfWeek' => '2023-09-24',
            'Semaine_DRIF' => 3,
        ]);
        Semaine::create([
            'semaine' => 39,
            'firstDayOfWeek' => '2023-09-25',
            'lastDayOfWeek' => '2023-10-01',
            'Semaine_DRIF' => 4,
        ]);
        Semaine::create([
            'semaine' => 40,
            'firstDayOfWeek' => '2023-10-02',
            'lastDayOfWeek' => '2023-10-08',
            'Semaine_DRIF' => 5,
        ]);
        Semaine::create([
            'semaine' => 41,
            'firstDayOfWeek' => '2023-10-09',
            'lastDayOfWeek' => '2023-10-15',
            'Semaine_DRIF' => 6,
        ]);
        Semaine::create([
            'semaine' => 42,
            'firstDayOfWeek' => '2023-10-16',
            'lastDayOfWeek' => '2023-10-22',
            'Semaine_DRIF' => 7,
        ]);
    }
}
