package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 巳
 * @author dzm
 */
public class SiDiZhi extends AbstractDiZhi {

    public SiDiZhi(){
        this.dizhi = DiZhiEnum.SI;
        // 巳中藏干：丙、庚、戊
        this.tiangans = Arrays.asList(TianGanEnum.BING,TianGanEnum.GENG,TianGanEnum.WU );
    }
}
