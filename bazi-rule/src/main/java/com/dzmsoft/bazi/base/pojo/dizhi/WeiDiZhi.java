package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 未
 * @author dzm
 */
public class WeiDiZhi extends AbstractDiZhi {

    public WeiDiZhi(){
        this.dizhi = DiZhiEnum.WEI;
        // 未中藏干：己、丁、乙
        this.tiangans = Arrays.asList(TianGanEnum.JI,TianGanEnum.DING,TianGanEnum.YI );
    }
}
