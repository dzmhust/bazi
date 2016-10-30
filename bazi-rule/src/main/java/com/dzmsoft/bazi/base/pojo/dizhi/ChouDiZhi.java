package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 丑
 * @author dzm
 */
public class ChouDiZhi extends AbstractDiZhi {

    public ChouDiZhi(){
        this.dizhi = DiZhiEnum.CHOU;
        // 丑中藏干：己、癸、辛
        this.tiangans = Arrays.asList(TianGanEnum.JI,TianGanEnum.GUI,TianGanEnum.XIN );
    }
}
