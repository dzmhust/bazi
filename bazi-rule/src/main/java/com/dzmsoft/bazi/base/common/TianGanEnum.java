package com.dzmsoft.bazi.base.common;

/**
 * 十天干
 * @author dzm
 */
public enum TianGanEnum {

    JIA("甲",1,YinYangEnum.YANG,WuXingEnum.MU),
    YI("乙",2,YinYangEnum.YIN,WuXingEnum.MU),
    BING("丙",3,YinYangEnum.YANG,WuXingEnum.HUO),
    DING("丁",4,YinYangEnum.YIN,WuXingEnum.HUO),
    WU("戊",5,YinYangEnum.YANG,WuXingEnum.TU),
    JI("己",6,YinYangEnum.YIN,WuXingEnum.TU),
    GENG("庚",7,YinYangEnum.YANG,WuXingEnum.JIN),
    XIN("辛",8,YinYangEnum.YIN,WuXingEnum.JIN),
    REN("壬",9,YinYangEnum.YANG,WuXingEnum.SHUI),
    GUI("癸",10,YinYangEnum.YIN,WuXingEnum.SHUI);
    
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
    
    private TianGanEnum(String display,int value, YinYangEnum yinYang, WuXingEnum wuXing){
        this.display = display;
        this.yinYang = yinYang;
        this.wuXing = wuXing;
        this.value = value;
    }
    
    public  static TianGanEnum getTianGan(String display){
        for (TianGanEnum tiangan:TianGanEnum.values()){
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
    
    public YinYangEnum getYinYang(){
        return this.yinYang;
    }
    
    public WuXingEnum getWuXing(){
        return this.wuXing;
    }
    
}
