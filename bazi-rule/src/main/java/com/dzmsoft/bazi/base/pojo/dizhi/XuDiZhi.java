package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 戌
 * @author dzm
 */
public class XuDiZhi extends AbstractDiZhi {

    public XuDiZhi(){
        this.dizhi = DiZhiEnum.XU;
        // 戌中藏干：戊、辛、丁
        this.tiangans = Arrays.asList(TianGanEnum.WU,TianGanEnum.XIN,TianGanEnum.DING );
    }
}
