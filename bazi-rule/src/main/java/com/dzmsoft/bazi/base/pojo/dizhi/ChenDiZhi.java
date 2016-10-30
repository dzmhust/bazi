package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 辰
 * @author dzm
 */
public class ChenDiZhi extends AbstractDiZhi {

    public ChenDiZhi(){
        this.dizhi = DiZhiEnum.CHEN;
        // 辰中藏干：戊、乙、癸
        this.tiangans = Arrays.asList(TianGanEnum.WU,TianGanEnum.YI,TianGanEnum.GUI );
    }
}
