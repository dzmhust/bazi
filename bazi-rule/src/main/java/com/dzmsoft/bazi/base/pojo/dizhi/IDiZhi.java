package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.List;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

public interface IDiZhi {
    /**
     * 获取地址
     * @return
     */
    DiZhiEnum getDiZhi();
    /**
     * 获取地址藏干
     * @return
     */
    List<TianGanEnum> getTiangans();
    /**
     * 获取本气
     * @return
     */
    TianGanEnum getBenQi();
    /**
     * 获取中气
     * @return
     */
    TianGanEnum getZhongQi();
    /**
     * 获取余气
     * @return
     */
    TianGanEnum getYuQi();
}
