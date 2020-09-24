package com.example.myultima;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.res.Configuration;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    int[] images = {
            R.drawable.ic_cat3,
            R.drawable.ic_gat2,
            R.drawable.ic_gat3,
            R.drawable.ic_gat4};
    int index = 0;

    ImageView img;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        int orientation = getResources().getConfiguration().orientation;

        if(orientation ==  Configuration.ORIENTATION_PORTRAIT){
            Button btnAdelante = findViewById(R.id.btn2);
            Button btnAtras = findViewById(R.id.btn1);
            img = findViewById(R.id.imageView);
            btnAdelante.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    img.setImageResource(makeMove(1));
                }
            });
            btnAtras.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    img.setImageResource(makeMove(-1));
                }
            });

        }else{
            img = findViewById(R.id.imageView2);
        }
    }

    public int makeMove(int move){
        if(move == 1){
            index = (1+index)%images.length;
            return images[index];
        }else{
            index--;
            if(index < 0) index = images.length - 1;
            return images[index];
        }
    }
    public void setIMG1(View view){
        img.setImageResource(images[0]);
    }
    public void setIMG2(View view){
        img.setImageResource(images[1]);
    }
    public void setIMG3(View view){
        img.setImageResource(images[2]);
    }
    public void setIMG4(View view){
        img.setImageResource(images[3]);
    }
}