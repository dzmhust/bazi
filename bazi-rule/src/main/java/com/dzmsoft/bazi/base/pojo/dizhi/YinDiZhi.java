package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 寅
 * @author dzm
 */
public class YinDiZhi extends AbstractDiZhi {

    public YinDiZhi(){
        this.dizhi = DiZhiEnum.YIN;
        // 寅中藏干：甲、丙、戊 
        this.tiangans = Arrays.asList(TianGanEnum.JIA,TianGanEnum.BING,TianGanEnum.WU );
    }
}
