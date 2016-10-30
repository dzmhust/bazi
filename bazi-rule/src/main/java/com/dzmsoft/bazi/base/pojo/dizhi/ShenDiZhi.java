package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.Arrays;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

/**
 * 申
 * @author dzm
 */
public class ShenDiZhi extends AbstractDiZhi {

    public ShenDiZhi(){
        this.dizhi = DiZhiEnum.SHEN;
        // 申中藏干庚、壬、戊
        this.tiangans = Arrays.asList(TianGanEnum.GENG,TianGanEnum.REN,TianGanEnum.WU );
    }
}
