<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(SalleSeeder::class);
        $this->call(FiliereSeeder::class);
        $this->call(FormateurSeeder::class);
        $this->call(GroupeSeeder::class);
        $this->call(ModuleSeeder::class);
        $this->call(FiliereModuleSeeder::class);
        $this->call(AffectationSeeder::class);
        // $this->call(SemaineSeeder::class);
        $this->call(SeanceSeeder::class);

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
