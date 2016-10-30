package com.dzmsoft.bazi.base.common;

/**
 * 八卦方位
 * @author dzm
 */
public enum BaGuaFangWeiEnum {
    JIN("金",4),
    MU("木",3),
    SHUI("水",1),
    HUO("火",2),
    TU("土",5);
    
    private final String display;
    private final int value;
    
    private BaGuaFangWeiEnum(String display , int value){
        this.value = value;
        this.display = display;
    }
    
    public String display(){
        return this.display;
    }
    
    public int value(){
        return this.value;
    }
}
