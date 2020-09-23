package com.example.forresolve2;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.example.forresolve2.clases.parcero;

public class MainActivity extends AppCompatActivity {

//    String aux = "textoooooooooo";
//    parcero parcela = new parcero(aux);

    static final String EXTRA_MESSAGE = "mensaje extra";
    static final String EXTRA_SAVED = "mensaje SAVED";
    static final int TEXT_REQUEST = 1;


    TextView msg;
    EditText input;
    Button btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        msg = findViewById(R.id.textView);
        input = findViewById(R.id.editTextTextPersonName);
        btn = findViewById(R.id.button);

        if (savedInstanceState != null){
            String msg2 = savedInstanceState.getString(EXTRA_SAVED);
            Log.i("tagtest",""+msg2+" "+msg);
            msg.setText(msg2);
        }


        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                launchS();
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == TEXT_REQUEST){
            String str = data.getStringExtra(MainActivity2.EXTRA_REPLY);
            msg.setText(str);
        }
    }

    @Override
    public void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);

        String str = msg.getText().toString();
        outState.putString(EXTRA_SAVED,str);

    }

    public void launchS(){
            Log.d("tag","log D");
            Intent intent = new Intent(this, MainActivity2.class);
            String str = input.getText().toString();
            parcero parcela = new parcero(str);
            intent.putExtra(EXTRA_MESSAGE, str);
            intent.putExtra("parce", parcela);
            startActivityForResult(intent, TEXT_REQUEST);
        }

}
