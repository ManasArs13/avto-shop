<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Category::factory(3)
            ->has(Product::factory()->count(4))
            ->create();
        \App\Models\Type::factory(10)->create();

        for ($i = 1, $k = 1; $i <= 10; $i++, $k++) {
            DB::table('product_type')->insert([
                'product_id'=>$k,
                'type_id'=>$i
            ]);
            DB::table('product_type')->insert([
                'product_id'=>$k+1,
                'type_id'=>$i
            ]);
            DB::table('product_type')->insert([
                'product_id'=>$k+2,
                'type_id'=>$i
            ]);     
        };

        for ($i = 1; $i <=10; $i++) {
            DB::table('baskets')->insert([
                'user_id'=> $i,               
            ]); 
        }

        for ($i = 1, $k = 1; $i <= 10; $i++, $k++) {
            DB::table('product_baskets')->insert([
                'product_id'=>$k,
                'basket_id'=>$i
            ]);
            DB::table('product_baskets')->insert([
                'product_id'=>$k+1,
                'basket_id'=>$i
            ]);
            DB::table('product_baskets')->insert([
                'product_id'=>$k+2,
                'basket_id'=>$i
            ]);     
        };



        \App\Models\User::factory()->create([
            'name' => 'AdminUser',
            'email' => 'test@example.com',
            'role'  =>  'admin',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);     
    }
    
}
