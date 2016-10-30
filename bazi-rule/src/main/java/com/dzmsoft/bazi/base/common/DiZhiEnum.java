package com.dzmsoft.bazi.base.common;

/**
 * 十二地支
 * @author dzm
 */
public enum DiZhiEnum {

    ZI("子",1,YinYangEnum.YANG,WuXingEnum.SHUI,11),
    CHOU("丑",2,YinYangEnum.YIN,WuXingEnum.TU ,12),
    YIN("寅",3,YinYangEnum.YANG,WuXingEnum.MU,1),
    MAO("卯",4,YinYangEnum.YIN,WuXingEnum.MU,2),
    CHEN("辰",5,YinYangEnum.YANG,WuXingEnum.TU,3),
    SI("巳",6,YinYangEnum.YIN,WuXingEnum.HUO ,4),
    WU("午",7,YinYangEnum.YANG,WuXingEnum.HUO,5),
    WEI("未",8,YinYangEnum.YIN,WuXingEnum.TU,6),
    SHEN("申",9,YinYangEnum.YANG,WuXingEnum.JIN,7),
    YOU("酉",10,YinYangEnum.YIN,WuXingEnum.JIN,8),
    XU("戌",10,YinYangEnum.YIN,WuXingEnum.TU,9),
    HAI("亥",10,YinYangEnum.YIN,WuXingEnum.SHUI,10);
    
    /**
     * 显示
     */
    private final String display;
    /**
     * 数
     */
    private final int value;
    /**
     * 阴阳
     */
    private final YinYangEnum yinYang;
    /**
     * 五行
     */
    private final WuXingEnum wuXing;
    /**
     * 月份
     */
    private final int month;
    
    private DiZhiEnum(String display,int value, YinYangEnum yinYang, WuXingEnum wuXing, int month){
        this.display = display;
        this.yinYang = yinYang;
        this.wuXing = wuXing;
        this.value = value;
        this.month = month;
    }
    
    public static DiZhiEnum getDiZhi(String display){
        for (DiZhiEnum tiangan:DiZhiEnum.values()){
            if (tiangan.display.equals(display)){
                return tiangan;
            }
        }
        return null;
    }
    
    public String display(){
        return this.display;
    }
    
    public int value(){
        return value;
    }
    
    public int month(){
        return month;
    }
    
    public YinYangEnum getYinYang(){
        return this.yinYang;
    }
    
    public WuXingEnum getWuXing(){
        return this.wuXing;
    }
}
