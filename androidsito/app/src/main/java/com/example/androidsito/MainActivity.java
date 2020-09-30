package com.example.androidsito;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import android.os.Bundle;
import android.widget.FrameLayout;

public class MainActivity extends AppCompatActivity {

    int []bodys;
    int []heads;
    int []legs;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        if (savedInstanceState==null) {

            llenaBody();
            llenaHead();
            llenaLegs();

            Framgment Fr1 = new Framgment();
            Fr1.setImagenes(heads);
            getSupportFragmentManager().beginTransaction().add(R.id.Fl1, Fr1).commit();

            Framgment Fr2 = new Framgment();
            Fr2.setImagenes(bodys);
            getSupportFragmentManager().beginTransaction().add(R.id.Fl2, Fr2).commit();

            Framgment Fr3 = new Framgment();
            Fr3.setImagenes(legs);
            getSupportFragmentManager().beginTransaction().add(R.id.Fl3, Fr3).commit();
        }

    }

    public void llenaBody(){
        bodys = new int[]{R.drawable.body1
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
    }

    public void llenaLegs(){
        heads = new int[]{R.drawable.head1
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
    }

    public void llenaHead(){
        legs = new int[]{R.drawable.legs1
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
    }

}