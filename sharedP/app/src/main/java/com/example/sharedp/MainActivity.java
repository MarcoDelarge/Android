package com.example.sharedp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    int contador=0;
    Button btn1,btn2,btn3,btn4,count,reset;
    TextView numerote;
    SharedPreferences pref;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        pref = getSharedPreferences("shared2",MODE_PRIVATE);
//        pref.getInt("valor",0);

        numerote = findViewById(R.id.textView);
//        numerote.setText(String.valueOf(contador));
        numerote.setText(String.valueOf(pref.getInt("valor",0)));

        count = findViewById(R.id.button);
        count.setText("Count");
        count.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                cuenta();
            }
        });

        reset = findViewById(R.id.button2);
        reset.setText("Reset");
        reset.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                reset();
            }
        });

        btn1= findViewById(R.id.button3);
        btn1.setText("Verde");
        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                numerote.setBackgroundColor(getColor(R.color.verde));
            }
        });
        btn2 = findViewById(R.id.button4);
        btn2.setText("Amarillo");
        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                numerote.setBackgroundColor(getColor(R.color.amarillo));
            }
        });
        btn3 = findViewById(R.id.button5);
        btn3.setText("Azul");
        btn3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                numerote.setBackgroundColor(getColor(R.color.azul));
            }
        });
        btn4 = findViewById(R.id.button6);
        btn4.setText("Rojo");
        btn4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                numerote.setBackgroundColor(getColor(R.color.rojo));
            }
        });


    }

    @Override
    protected void onPause() {
        super.onPause();
        pref.edit().putInt("valor",Integer.valueOf(numerote.getText().toString())).apply();
    }

    public void cuenta(){
        contador++;
        numerote.setText(String.valueOf(contador));
    }

    public void reset(){
        contador=0;
        numerote.setText(String.valueOf(contador));
    }

}