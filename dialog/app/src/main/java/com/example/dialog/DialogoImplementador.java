package com.example.dialog;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;

public class DialogoImplementador implements Dialog.OnClickListener {

    Context ctx;

    public DialogoImplementador(Context ctx) {
        this.ctx = ctx;
    }

    @Override
    public void onClick(DialogInterface dialog, int which) {

    }
}
