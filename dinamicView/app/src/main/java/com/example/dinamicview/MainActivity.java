package com.example.dinamicview;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    TableLayout table;
    Button randomize;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        table = findViewById(R.id.tabla);



        llena();

        randomize = new Button(this);
        randomize.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                random();
            }
        });

        table.addView(randomize);
    }

    public void llena(){
        for (int i = 0; i < 3; i++) {
            TableRow fila = new TableRow(this);
            Button btn = new Button(this);

            btn.setText(String.valueOf(Math.round(Math.random() * 10)));
            fila.addView(btn);

            table.addView(fila);
        }
    }

    public void random(){
        table.removeAllViews();
        llena();
        randomize = new Button(this);
        randomize.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                random();
            }
        });

        table.addView(randomize);
        }
}