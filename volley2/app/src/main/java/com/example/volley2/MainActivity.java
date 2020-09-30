package com.example.volley2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.Response.ErrorListener;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    TextView txt;
    ListView lista;
    ArrayList<User>usuarios = new ArrayList<>();
//    Adapt usuarioAdaptador;
    Adapter2 adapter2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        txt = findViewById(R.id.txt1);
        lista = findViewById(R.id.lista);
//        usuarioAdaptador = new Adapt(this,usuarios);
        adapter2 = new Adapter2(this,usuarios);

//        peticion1();
        peticionArray();


    }

    public void peticion1(){
        String url = "https://jsonplaceholder.typicode.com/todos/1";
        RequestQueue queue = Volley.newRequestQueue(this);

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET,url, null, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                User usr = new User(response);
                txt.setText(usr.toString());
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(MainActivity.this,error.toString(),Toast.LENGTH_LONG);
            }
        });

        queue.add(jsonObjectRequest);
    }

    public void peticionArray(){
        RequestQueue queue = Volley.newRequestQueue(this);
        String url2 = "https://jsonplaceholder.typicode.com/todos";

        JsonArrayRequest jsonArrayRequest = new JsonArrayRequest(Request.Method.GET,
            url2,
            null,
            new Response.Listener<JSONArray>() {
                @Override
                public void onResponse(JSONArray response) {
                    for (int i = 0; i < response.length(); i++) {
                        try {
                            JSONObject jsonObject = response.getJSONObject(i);
                            User usuario = new User(jsonObject);
                            usuarios.add(usuario);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
//                    lista.setAdapter(usuarioAdaptador);
                    lista.setAdapter(adapter2);
                }
            }, new Response.ErrorListener(){
        @Override
        public void onErrorResponse(VolleyError error) {
            Toast.makeText(MainActivity.this, error.toString(),Toast.LENGTH_LONG).show();
        }
    });

        queue.add(jsonArrayRequest);}


}