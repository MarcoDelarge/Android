package com.example.fragment2;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.os.Bundle;
import android.widget.FrameLayout;

public class MainActivity2 extends AppCompatActivity {

    FrameLayout Fl;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        Fl = findViewById(R.id.Frame1);
        Fragment frag = new EjemploFragmento();

        getSupportFragmentManager().beginTransaction().add(R.id.Frame1, frag).commit();

    }
}