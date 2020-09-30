package com.example.laweadelgrid;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.GridLayout;
import android.widget.GridView;

public class MainActivity extends AppCompatActivity {

//    GridView grd;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

//        grd = findViewById(R.id.gridd);
//        grd.setAdapter();

        Fragment1 frag1 = new Fragment1();
        frag1.setImagenes(dameLegs());
        getSupportFragmentManager().beginTransaction().add(R.id.cont1,frag1).commit();

        Fragment1 frag2 = new Fragment1();
        frag2.setImagenes(dameBody());
        getSupportFragmentManager().beginTransaction().add(R.id.cont2,frag2).commit();

        Fragment1 frag3 = new Fragment1();
        frag3.setImagenes(dameHead());
        getSupportFragmentManager().beginTransaction().add(R.id.cont3,frag3).commit();



    }

    public int[] dameBody(){
        int[] bodys = {R.drawable.body1
                , R.drawable.body2
                , R.drawable.body3
                , R.drawable.body4
                , R.drawable.body5
                , R.drawable.body6
                , R.drawable.body7
                , R.drawable.body8
                , R.drawable.body9
                , R.drawable.body10
                , R.drawable.body11
                , R.drawable.body12
        };
        return bodys;
    }

    public int[] dameLegs(){
        int[] heads = {R.drawable.head1
                , R.drawable.head2
                , R.drawable.head3
                , R.drawable.head4
                , R.drawable.head5
                , R.drawable.head6
                , R.drawable.head7
                , R.drawable.head8
                , R.drawable.head9
                , R.drawable.head10
                , R.drawable.head11
                , R.drawable.head12
        };
        return heads;
    }

    public int[] dameHead(){
        int[] legs = {R.drawable.legs1
                , R.drawable.legs2
                , R.drawable.legs3
                , R.drawable.legs4
                , R.drawable.legs5
                , R.drawable.legs6
                , R.drawable.legs7
                , R.drawable.legs8
                , R.drawable.legs9
                , R.drawable.legs10
                , R.drawable.legs11
                , R.drawable.legs12
        };
        return legs;
    }

}