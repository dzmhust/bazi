package com.dzmsoft.bazi.base.common;

/**
 * 阴阳
 * @author dzm
 */
public enum YinYangEnum {
    YIN("阴",0),
    YANG("阳",1);
    
    private final String display;
    private final int value;
    
    private YinYangEnum(String display , int value){
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
