package com.dzmsoft.bazi.base.common;

/**
 * 方位
 * @author dzm
 */
public enum FangWeiEnum {
    DONG("东",4),
    NAN("南",3),
    XI("西",1),
    BEI("北",2),
    ZHONG("中",5);
    
    private final String display;
    private final int value;
    
    private FangWeiEnum(String display , int value){
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
