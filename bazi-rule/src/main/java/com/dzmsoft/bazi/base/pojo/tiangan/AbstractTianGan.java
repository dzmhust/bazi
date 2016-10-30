package com.dzmsoft.bazi.base.pojo.tiangan;

import com.dzmsoft.bazi.base.common.TianGanEnum;

public abstract class AbstractTianGan implements ITiangan{
    /**
     * 天干
     */
    protected TianGanEnum tianGan;
    
    @Override
    public TianGanEnum getTianGan() {
        return this.tianGan;
    }
    
}
