package com.example.dialog;

import android.util.Log;

public class Pato extends Animal {



    @Override
    public boolean saltar(boolean puede) {
        return puede;
    }

    public Pato(String nombre, String color, int patas) {
        super(nombre,color,patas);

    }

    public Pato(){
        super();
    }



}
