package com.example.volley2;

import org.json.JSONException;
import org.json.JSONObject;

public class User {

    int Uid;
    int id;
    String title;
    boolean completado;


    public User(JSONObject jsonObject){
        try {
            this.Uid = jsonObject.getInt("userId");
            this.id = jsonObject.getInt("Id");
            this.title = jsonObject.getString("title");
            this.completado = jsonObject.getBoolean("completado");
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }


    public int getUid() {
        return Uid;
    }

    public void setUid(int uid) {
        Uid = uid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isCompletado() {
        return completado;
    }

    public void setCompletado(boolean completado) {
        this.completado = completado;
    }

    @Override
    public String toString() {
        return "User{" +
                "Uid=" + Uid +
                ", id=" + id +
                ", title='" + title + '\'' +
                ", completado=" + completado +
                '}';
    }
}
