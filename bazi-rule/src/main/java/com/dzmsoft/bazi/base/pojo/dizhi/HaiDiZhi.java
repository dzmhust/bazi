package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 亥
 * @author dzm
 */
public class HaiDiZhi extends AbstractDiZhi {

    public HaiDiZhi(){
        this.dizhi = DiZhiEnum.HAI;
        // 亥中藏干：壬、甲
        this.tiangans = Arrays.asList(TianGanEnum.REN,TianGanEnum.JIA);
    }
}
