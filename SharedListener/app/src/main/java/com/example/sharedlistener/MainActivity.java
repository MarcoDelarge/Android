package com.example.sharedlistener;

import androidx.appcompat.app.AppCompatActivity;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.CheckBox;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    String id1="id1",id2="id2",id3="id3";
    Boolean settingChange=true;
    ImageView img1,img2,img3;
    CheckBox ch1,ch2,ch3;
    SharedPreferences pref;
    SharedPreferences.OnSharedPreferenceChangeListener prefListener;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        pref = getSharedPreferences("sharedAppContext",MODE_PRIVATE);

        ch1 = findViewById(R.id.checkBox);
        ch1.setChecked(pref.getBoolean(id1,false));
        ch1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                change();
            }
        });

        ch2 = findViewById(R.id.checkBox2);
        ch2.setChecked(pref.getBoolean(id2,false));
        ch2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                change();
            }
        });

        ch3 = findViewById(R.id.checkBox3);
        ch3.setChecked(pref.getBoolean(id3,false));
        ch3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                change();
            }
        });

        img1 = findViewById(R.id.imageView);
        img2 = findViewById(R.id.imageView2);
        img3 = findViewById(R.id.imageView3);


        prefListener = new SharedPreferences.OnSharedPreferenceChangeListener() {
            @Override
            public void onSharedPreferenceChanged(SharedPreferences sharedPreferences, String key) {
                if (ch1.isChecked()){
                    img1.setVisibility(View.VISIBLE);
                }else{
                    img1.setVisibility(View.INVISIBLE);
                }
                if (ch2.isChecked()){
                    img2.setVisibility(View.VISIBLE);
                }else{
                    img2.setVisibility(View.INVISIBLE);
                }
                if (ch3.isChecked()){
                    img3.setVisibility(View.VISIBLE);
                }else{
                    img3.setVisibility(View.INVISIBLE);
                }
            }
        };

        pref.registerOnSharedPreferenceChangeListener(prefListener);

    }

    public void change(){
//        pref.edit().putBoolean(String.valueOf(ch1.getId()),settingChange).apply();
        pref.edit().putBoolean(id1,ch1.isChecked()).apply();
        Log.i("TAG",String.valueOf(ch1.getId()));
//        pref.edit().putBoolean(String.valueOf(ch2.getId()),settingChange).apply();
        pref.edit().putBoolean(id2,ch2.isChecked()).apply();
        Log.i("TAG",String.valueOf(ch2.getId()));
//        pref.edit().putBoolean(String.valueOf(ch3.getId()),settingChange).apply();
        pref.edit().putBoolean(id3,ch1.isChecked()).apply();
        Log.i("TAG",String.valueOf(ch3.getId()));
        settingChange=!settingChange;
    }


}