package com.dzmsoft.bazi.base.test;

import org.junit.Test;

import com.dzmsoft.bazi.base.factory.TianGanFactory;
import com.dzmsoft.bazi.base.pojo.tiangan.ITiangan;

public class TianGanTest {

    @Test
    public void tiangan_test(){
        TianGanFactory tianGanFactory = TianGanFactory.getInstance(); 
        ITiangan bing = tianGanFactory.getTiangan("丙");
        System.out.println(" 天干：" + bing.getTianGan().display() + " 五行：" + bing.getTianGan().getWuXing().display() + " 阴阳：" + bing.getTianGan().getYinYang().display());
    }
}
