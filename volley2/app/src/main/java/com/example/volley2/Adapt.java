package com.example.volley2;

import android.content.Context;
import android.content.Intent;
import android.text.Layout;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.ArrayList;

public class Adapt extends BaseAdapter {

    String extra = "llave";
    Context contexto;
    ArrayList<User> usuarios;


    public Context getContexto() {
        return contexto;
    }

    public void setContexto(Context contexto) {
        this.contexto = contexto;
    }

    public ArrayList<User> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(ArrayList<User> usuarios) {
        this.usuarios = usuarios;
    }

    @Override
    public int getCount() {
        return usuarios.size();
    }

    @Override
    public Object getItem(int position) {
        return usuarios.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (convertView != null){
            LayoutInflater.from(contexto).inflate(R.layout.usuario, parent, false);
            TextView textView = convertView.findViewById(R.id.texto2);
            User usuario = usuarios.get(position);
            textView.setText(usuario.toString());
            convertView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent i = new Intent(contexto,UsuarioDetail.class);
                    i.putExtra(extra,0);
                }
            });
        }


        return convertView;
    }

    public Adapt(Context c,ArrayList<User> arr){
        contexto = c;
        usuarios = arr;
    };

}
