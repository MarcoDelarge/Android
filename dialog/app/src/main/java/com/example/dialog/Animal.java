package com.example.dialog;

import android.app.AlertDialog;
import android.util.Log;

public abstract class Animal {

    String nombre;
    String color;
    int patas;

    public void comer() {
        Log.i("DORMIR","durmiendo");
    }

    public void dormir() {
        Log.i("DORMIR","durmiendo");
    }

    public abstract void saltar();

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getpatas() {
        return patas;
    }

    public void setpatas(int patas) {
        this.patas = patas;
    }

    public Animal(String nombre, String color, int patas) {
        this.nombre = nombre;
        this.color = color;
        this.patas = patas;
    }
}
