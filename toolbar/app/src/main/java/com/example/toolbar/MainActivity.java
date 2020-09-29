package com.example.toolbar;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.ContextMenu;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;
import android.widget.Toolbar;

public class MainActivity extends AppCompatActivity {

    androidx.appcompat.widget.Toolbar tb;

    Menu menusito;
    TextView txt;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        txt = findViewById(R.id.texto1);
        registerForContextMenu(txt);


        tb = findViewById(R.id.tulvar);
//        tb.setTitle("Titulo mamalon");
//        tb.setLogo(R.drawable.ic_launcher_foreground);
//        setActionBar(tb);
        setSupportActionBar(tb);

    }

    @Override
    public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
        super.onCreateContextMenu(menu, v, menuInfo);
        getMenuInflater().inflate(R.menu.menu2,menu);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu2, menu);
        return true;
    }

    @Override
    public boolean onContextItemSelected(@NonNull MenuItem item) {
        return super.onContextItemSelected(item);
        /*
        * 
        */

    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {

        /*
        *aqui le pones el switch para ver cual opcion selecciono
        */

        return super.onOptionsItemSelected(item);

    }
}