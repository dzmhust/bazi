package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 午
 * @author dzm
 */
public class WuDiZhi extends AbstractDiZhi {

    public WuDiZhi(){
        this.dizhi = DiZhiEnum.WU;
        // 戊中藏干：丁、己
        this.tiangans = Arrays.asList(TianGanEnum.DING,TianGanEnum.JI );
    }
}
