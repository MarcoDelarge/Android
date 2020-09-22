package com.example.forresolve2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity2 extends AppCompatActivity {

    static final String EXTRA_REPLY = "extra reply";
    static final String LOG_TAG = "tag log act 2";


    TextView msg;
    EditText input;
    Button btn;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);


        msg = findViewById(R.id.textView2);
        input = findViewById(R.id.editTextTextPersonName2);
        btn = findViewById(R.id.button2);



    }

    public void reply(View view){
        String reply = input.getText().toString();

        Intent replyI = new Intent();
        replyI.putExtra(EXTRA_REPLY, reply);
        replyI.putExtra("extra2", "Marco");

        setResult(RESULT_OK, replyI);
        Log.d(LOG_TAG, "mensage de los act 2");
        finish();
    }



}