package com.dzmsoft.bazi.base.common;

/**
 * 五行
 * 万物皆由水生，水极阴，阴极则阳生，所以冬至为阳之始，其月为子，数一
 * 阴极则阳生，所以夏至为阴之始，其月在午，数二
 * 日从东升，昼为阳，东方属木，所以数三
 * 日从西落，夜为阴，西方属金，数四
 * 土居中央，包含万物，数五
 * @author dzm
 */
public enum WuXingEnum {
    JIN("金",4),
    MU("木",3),
    SHUI("水",1),
    HUO("火",2),
    TU("土",5);
    
    private final String display;
    private final int value;
    
    private WuXingEnum(String display , int value){
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
