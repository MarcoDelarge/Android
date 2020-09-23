package com.example.forresolve2.clases;

import android.os.Parcel;
import android.os.Parcelable;

public class parcero implements Parcelable {

    String value1;

    public parcero(String in) {
        value1 = in;
    }

    /*
    * This method is the constructor, called on the receiving activity,
    *  where you will be collecting values
    */
    public parcero(Parcel in) {
        value1 = in.readString();
    }


    public static final Creator<parcero> CREATOR = new Creator<parcero>() {
        @Override
        public parcero createFromParcel(Parcel in) {
            return new parcero(in);
        }

        @Override
        public parcero[] newArray(int size) {
            return new parcero[size];
        }
    };

    @Override
    public int describeContents() {
        return 0;
    }


    /*In this method you add all your class properties to
     the parcel in preparation for transfer. You use each
     of the write methods to add each of your properties.*/
    @Override
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeString(value1);
    }


    public String getValue1() {
        return value1;
    }

    public void setValue1(String value1) {
        this.value1 = value1;
    }
}
