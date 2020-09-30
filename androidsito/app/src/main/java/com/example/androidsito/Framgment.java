package com.example.androidsito;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class Framgment extends Fragment {

    private int index=0;
    private int[] imagenes;

    public void setIndex(int index) {
        this.index = index;
    }

    public void setImagenes(int[] imagenes) {
        this.imagenes = imagenes;
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        if (savedInstanceState!=null){
            index = savedInstanceState.getInt("index");
            imagenes = savedInstanceState.getIntArray("array");
        }

        View v = inflater.inflate(R.layout.fragment_l1,container,false);

        final ImageView img = v.findViewById(R.id.imageView);
        img.setImageResource(imagenes[index]);

        v.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (index>=11){
                    index = 0;
                }
                img.setImageResource(imagenes[index]);
                index++;
            }
        });

        return v;
    }

    @Override
    public void onSaveInstanceState(@NonNull Bundle outState) {
        outState.putIntArray("array",imagenes);
        outState.putInt("index",index);
    }
}
