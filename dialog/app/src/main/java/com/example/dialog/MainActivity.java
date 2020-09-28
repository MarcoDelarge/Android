package com.example.dialog;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.os.Bundle;
import android.view.Gravity;
import android.widget.ListView;
import android.widget.Toast;

import java.util.HashMap;

public class MainActivity extends AppCompatActivity {

    ListView ls;
//    HashMap<Integer,String>perros;
    Perro []perros = new Perro[500];
//    MyAdaptador adptr;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        generaPerros();
//        adptr = new MyAdaptador(this,perros);

        AlertDialog.Builder albañil = new AlertDialog.Builder(this);
        albañil.setTitle("dialogo 1");
        albañil.setMessage("");

        albañil.setPositiveButton("tex botton 1", new AlertDialog.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {

            }
        });
        albañil.setNegativeButton("tex botton 2", new AlertDialog.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {

            }
        });
        albañil.setNeutralButton("tex botton 2", new AlertDialog.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {

            }
        });

        albañil.show();

        Toast toasty = Toast.makeText(this,"hola",Toast.LENGTH_SHORT);
        toasty.setText("Toasty mdfka");
        toasty.setDuration(Toast.LENGTH_SHORT);
        toasty.setGravity(Gravity.TOP,0,0);
        toasty.show();

        ls = findViewById(R.id.ls);
//        ls.setAdapter(adptr);
        ls.setAdapter(new MyAdaptador(this,perros));

    }

    private void generaPerros(){

        for (int i = 0; i <500 ; i++) {
            perros[i] = new Perro(R.drawable.ic_launcher_background,"p"+i);
        }

//        perros[0] = new Perro(R.drawable.ic_launcher_background,"p0");
//        perros[1] = new Perro(R.drawable.ic_launcher_foreground,"p1");
//        perros[2] = new Perro(R.drawable.ic_launcher_background,"p2");
//        perros[3] = new Perro(R.drawable.ic_launcher_foreground,"p3");
//        perros[4] = new Perro(R.drawable.ic_launcher_background,"p4");
//        perros[5] = new Perro(R.drawable.ic_launcher_foreground,"p5");
//        perros[6] = new Perro(R.drawable.ic_launcher_background,"p6");
//        perros[7] = new Perro(R.drawable.ic_launcher_foreground,"p7");
//        perros[8] = new Perro(R.drawable.ic_launcher_background,"p8");
//        perros[9] = new Perro(R.drawable.ic_launcher_foreground,"p9");
    }

}