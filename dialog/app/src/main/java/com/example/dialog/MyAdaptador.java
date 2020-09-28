package com.example.dialog;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

public class MyAdaptador extends BaseAdapter {

    Context ctx;
    Perro[] prrs;
//    TextView nombre;

    public MyAdaptador(Context ctx, Perro[] prrs) {
        this.ctx = ctx;
        this.prrs = prrs;
    }

    @Override
    public int getCount() {
        return prrs.length;
    }

    @Override
    public Object getItem(int position) {
        return prrs[position];
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        if (convertView == null){
            convertView = LayoutInflater.from(ctx).inflate(R.layout.elemento_ls,parent,false);
        }

        final TextView nombre = convertView.findViewById(R.id.txt_hijo);
        String nombrePerrito = this.prrs[position].getNombre();

//        ((TextView) convertView.findViewById(android.R.id.text1)).setText(getItem(position));

        nombre.setText(nombrePerrito);
        nombre.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(ctx, MainActivity2.class);
                i.putExtra("value",nombre.getText());
                ctx.startActivity(i);
            }
        });

        return convertView;
    }
}
