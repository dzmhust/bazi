package com.dzmsoft.bazi.base.factory;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.pojo.dizhi.ChenDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.ChouDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.IDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.MaoDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.ShenDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.SiDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.WeiDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.WuDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.XuDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.YinDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.YouDiZhi;
import com.dzmsoft.bazi.base.pojo.dizhi.ZiDiZhi;

public class DiZhiFactory {
    private DiZhiFactory() {

    }

    private volatile static DiZhiFactory instance = null;

    public static DiZhiFactory getInstance() {
        if (null == instance) {
            synchronized (DiZhiFactory.class) {
                if (null == instance) {
                    instance = new DiZhiFactory();
                }
            }
        }
        return instance;
    }
    
    public IDiZhi getDiZhi(String display){
        IDiZhi iDiZhi = null;
        if (display.equals(DiZhiEnum.ZI.display())){
            iDiZhi = new ZiDiZhi();
        } else if (display.equals(DiZhiEnum.CHOU.display())){
            iDiZhi = new ChouDiZhi();
        } else if (display.equals(DiZhiEnum.YIN.display())){
            iDiZhi = new YinDiZhi();
        } else if (display.equals(DiZhiEnum.MAO.display())){
            iDiZhi = new MaoDiZhi();
        } else if (display.equals(DiZhiEnum.CHEN.display())){
            iDiZhi = new ChenDiZhi();
        } else if (display.equals(DiZhiEnum.SI.display())){
            iDiZhi = new SiDiZhi();
        } else if (display.equals(DiZhiEnum.WU.display())){
            iDiZhi = new WuDiZhi();
        } else if (display.equals(DiZhiEnum.WEI.display())){
            iDiZhi = new WeiDiZhi();
        } else if (display.equals(DiZhiEnum.SHEN.display())){
            iDiZhi = new ShenDiZhi();
        } else if (display.equals(DiZhiEnum.YOU.display())){
            iDiZhi = new YouDiZhi();
        } else if (display.equals(DiZhiEnum.XU.display())){
            iDiZhi = new XuDiZhi();
        } 
        return iDiZhi;
    }
}
