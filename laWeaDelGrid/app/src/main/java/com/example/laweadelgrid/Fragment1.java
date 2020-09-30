package com.example.laweadelgrid;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class Fragment1 extends Fragment {

    int[] imagenes;

    public void setImagenes(int[] imagenes) {
        this.imagenes = imagenes;
    }



    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        View v = inflater.inflate(R.layout.fragment,container,false);

        final int[] views = {
                R.id.imageView0,
                R.id.imageView1,
                R.id.imageView2,
                R.id.imageView3,
                R.id.imageView4,
                R.id.imageView5,
                R.id.imageView6,
                R.id.imageView7,
                R.id.imageView8,
                R.id.imageView9,
                R.id.imageView10,
                R.id.imageView11,
        };

        for (int i = 0; i < imagenes.length; i++) {
            final ImageView img = v.findViewById(views[i]);
            img.setImageResource(imagenes[i]);
            img.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Toast.makeText(getContext(),String.valueOf(img.getId()),Toast.LENGTH_SHORT).show();
                }
            });

        }
        return v;
    }


//    @Nullable
//    @Override
//    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
//
//        ViewGroup v = inflater.inflate(R.layout.testgrid,container,false);
//        ViewGroup v = inflater.inflate(R.layout.testgrid,container,false);
//
//        for (int i = 0; i < imagenes.length; i++) {
//
//
//            View img = inflater.inflate(R.layout.test,null,false);
//            ImageView imgt = img.findViewById(R.id.testImage);
//            imgt.setImageResource(imagenes[i]);
//            v.addView(img);
//
//        }
//
//        return container;
//    }
}
