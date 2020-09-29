package com.example.dialog;

<<<<<<< Updated upstream
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


=======
public class Pato extends Animal {

    public Pato(String nombre, String color, int patas) {
        super(nombre, color, patas);
    }

    @Override
    public void saltar() {

    }
>>>>>>> Stashed changes
}
