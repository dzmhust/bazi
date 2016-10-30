package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 子
 * @author dzm
 */
public class ZiDiZhi extends AbstractDiZhi {

    public ZiDiZhi(){
        this.dizhi = DiZhiEnum.ZI;
        // 子中藏干：癸
        this.tiangans = Arrays.asList(TianGanEnum.GUI );
    }
}
