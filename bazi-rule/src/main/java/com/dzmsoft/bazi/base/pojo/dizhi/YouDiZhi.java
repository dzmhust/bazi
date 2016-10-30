package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 酉
 * @author dzm
 */
public class YouDiZhi extends AbstractDiZhi {

    public YouDiZhi(){
        this.dizhi = DiZhiEnum.YOU;
        // 酉中藏干：辛
        this.tiangans = Arrays.asList(TianGanEnum.XIN );
    }
}
