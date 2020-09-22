package com.example.configuration;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    int miVariable;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        if (savedInstanceState == null)
            miVariable = 0;

        Log.d("MIVARIABLE", "onCreate");

        Log.d("MIVARIABLE", String.valueOf(miVariable));
    }

    @Override
    protected void onRestoreInstanceState(@NonNull Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        miVariable = savedInstanceState.getInt("MILLAVE", 0);

        Log.d("MIVARIABLE", "onRestoreInstanceState");
        Log.d("MIVARIABLE", String.valueOf(miVariable));
    }

    @Override
    public void onSaveInstanceState(@NonNull Bundle bundle){
        super.onSaveInstanceState(bundle);
        miVariable = 10;
        bundle.putInt("MILLAVE", miVariable);

        Log.d("MIVARIABLE", "onSaveInstanceState");
    }
}