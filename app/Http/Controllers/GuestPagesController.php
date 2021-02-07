<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GuestPagesController extends Controller
{
    public function welcome()
    {
        return view('welcome');
    }

    public function apply()
    {
        return view('application-form');
    }
}
