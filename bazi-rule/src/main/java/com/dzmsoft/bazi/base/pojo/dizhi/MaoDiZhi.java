package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 卯
 * @author dzm
 */
public class MaoDiZhi extends AbstractDiZhi {

    public MaoDiZhi(){
        this.dizhi = DiZhiEnum.MAO;
        // 卯中藏干：乙
        this.tiangans = Arrays.asList(TianGanEnum.YI );
    }
}
