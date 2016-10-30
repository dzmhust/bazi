package com.dzmsoft.bazi.base.pojo.dizhi;

import java.util.List;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

public abstract class AbstractDiZhi implements IDiZhi{
    
    protected DiZhiEnum dizhi;
    
    protected List<TianGanEnum> tiangans; 
    
    @Override
    public DiZhiEnum getDiZhi() {
        return this.dizhi;
    }
    
    @Override
    public List<TianGanEnum> getTiangans() {
        return this.tiangans;
    }
    
    @Override
    public TianGanEnum getBenQi() {
        return this.tiangans.get(0);
    }
    
    @Override
    public TianGanEnum getZhongQi() {
        return this.tiangans.size()>2?this.tiangans.get(1):null;
    }
    
    @Override
    public TianGanEnum getYuQi() {
        return this.tiangans.size()>3?this.tiangans.get(2):null;
    }
}
