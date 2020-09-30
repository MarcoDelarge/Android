package com.example.volley2;

import android.content.Context;
import android.content.DialogInterface;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;

import java.util.ArrayList;

public class Adapter2 extends BaseAdapter {

    Context contexto;
    ArrayList<User> usuarios;

    public Adapter2(Context contexto, ArrayList<User> usuarios) {
        this.contexto = contexto;
        this.usuarios = usuarios;
    }

    @Override
    public int getCount() {
        return usuarios.size();
    }

    @Override
    public Object getItem(int i) {
        return usuarios.get(i);
    }

    @Override
    public long getItemId(int i) {
        return 0;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {

//        LayoutInflater.from(contexto);
//        LayoutInflater row = LayoutInflater.from(contexto);
//        row.inflate(R.layout.row,viewGroup,false);

        View row = LayoutInflater.from(contexto).inflate(R.layout.row,viewGroup,false);


        final TextView txt1 = row.findViewById(R.id.txt1);
        final TextView txt2 = row.findViewById(R.id.txt2);
        final TextView txt3 = row.findViewById(R.id.txt3);

        txt1.setText(String.valueOf(usuarios.get(i).id));
//        txt2.setText(usuarios.toString());
        txt2.setText(usuarios.get(i).title);
        txt3.setText(String.valueOf(usuarios.get(i).Uid));

        row.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                AlertDialog.Builder albañil = new AlertDialog.Builder(contexto);
                albañil.setTitle("dialogo 1");
                albañil.setMessage("Se llama: "+txt1.getText()+" su id es: "+txt3.getText()+" y su titulo es: "+txt2.getText());
                albañil.setPositiveButton("tex botton 1", new AlertDialog.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {

                    }
                });
                albañil.show();

            }
        });

        return row;
    }
}
