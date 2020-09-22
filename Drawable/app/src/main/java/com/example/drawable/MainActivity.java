package com.example.drawable;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import com.example.drawable.datos.Imagen;
import com.example.drawable.datos.ImagenAbs;

public class MainActivity extends AppCompatActivity {

    int i = 0;
    Button btn;
    ImageView im;

    ImagenAbs []galeriaA = {
            new ImagenAbs() {
                @Override
                public int resource() {
                    return R.drawable.ic_lol;
                }
            },
            new ImagenAbs() {
                @Override
                public int resource() {
                    return R.drawable.ic_launcher_background;
                }
            },
            new ImagenAbs() {
                @Override
                public int resource() {
                    return R.drawable.ic_launcher_foreground;
                }
            },
            new ImagenAbs() {
                @Override
                public int resource() {
                    return R.drawable.ic_mono_xclipboard;
                }
            },
            new ImagenAbs() {
                @Override
                public int resource() {
                    return R.drawable.ic_mono_xclock;
                }
            },
            new ImagenAbs() {
                @Override
                public int resource() {
                    return R.drawable.ic_mono_xconsole;
                }
            },
            new ImagenAbs() {
                @Override
                public int resource() {
                    return R.drawable.ic_mono_xdays;
                }
            }};


    Imagen []galeriaI={
            new Imagen(R.drawable.ic_lol),
            new Imagen(R.drawable.ic_launcher_background),
            new Imagen(R.drawable.ic_launcher_foreground),
            new Imagen(R.drawable.ic_mono_xclipboard),
            new Imagen(R.drawable.ic_mono_xclock),
            new Imagen(R.drawable.ic_mono_xconsole),
            new Imagen(R.drawable.ic_mono_xdays)};

    int []galeria ={R.drawable.ic_lol,R.drawable.ic_launcher_background,R.drawable.ic_launcher_foreground,R.drawable.ic_mono_xclipboard
                ,R.drawable.ic_mono_xclock,R.drawable.ic_mono_xconsole,R.drawable.ic_mono_xdays};


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        im = findViewById(R.id.imageView2);
        btn = findViewById(R.id.button);


        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                siguiente();
            }
        });

    }

    void siguiente(){
        if (i>4){
            i = 0;
        }

//        im.setImageResource(galeriaI[i].getImageI());
//        im.setImageResource(galeria[i]);
        im.setImageResource(galeriaA[i].resource());
        i++;
    }


}