package com.dzmsoft.bazi.base.factory;

import com.dzmsoft.bazi.base.common.TianGanEnum;
import com.dzmsoft.bazi.base.pojo.tiangan.BingTianGan;
import com.dzmsoft.bazi.base.pojo.tiangan.DingTianGan;
import com.dzmsoft.bazi.base.pojo.tiangan.GengTianGan;
import com.dzmsoft.bazi.base.pojo.tiangan.GuiTianGan;
import com.dzmsoft.bazi.base.pojo.tiangan.ITiangan;
import com.dzmsoft.bazi.base.pojo.tiangan.JiTianGan;
import com.dzmsoft.bazi.base.pojo.tiangan.Jia;
import com.dzmsoft.bazi.base.pojo.tiangan.RenTianGan;
import com.dzmsoft.bazi.base.pojo.tiangan.WuTianGan;
import com.dzmsoft.bazi.base.pojo.tiangan.XinTianGan;
import com.dzmsoft.bazi.base.pojo.tiangan.YiTianGan;

/**
 * 天干工厂
 * @author dzm
 */
public class TianGanFactory {
    private TianGanFactory() {

    }

    private volatile static TianGanFactory instance = null;

    public static TianGanFactory getInstance() {
        if (null == instance) {
            synchronized (TianGanFactory.class) {
                if (null == instance) {
                    instance = new TianGanFactory();
                }
            }
        }
        return instance;
    }
    
    public ITiangan getTiangan(String display){
        ITiangan iTiangan = null;
        if (display.equals(TianGanEnum.JIA.display())){
            return new Jia();
        } else if (display.equals(TianGanEnum.YI.display())){
            return new YiTianGan();
        } else if (display.equals(TianGanEnum.BING.display())){
            return new BingTianGan();
        } else if (display.equals(TianGanEnum.DING.display())){
            return new DingTianGan();
        } else if (display.equals(TianGanEnum.WU.display())){
            return new WuTianGan();
        } else if (display.equals(TianGanEnum.JI.display())){
            return new JiTianGan();
        } else if (display.equals(TianGanEnum.GENG.display())){
            return new GengTianGan();
        } else if (display.equals(TianGanEnum.XIN.display())){
            return new XinTianGan();
        } else if (display.equals(TianGanEnum.REN.display())){
            return new RenTianGan();
        } else if (display.equals(TianGanEnum.GUI.display())){
            return new GuiTianGan();
        } 
        return iTiangan;
    }
}
