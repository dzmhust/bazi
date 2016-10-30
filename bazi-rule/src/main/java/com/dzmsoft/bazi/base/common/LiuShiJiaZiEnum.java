package com.dzmsoft.bazi.base.common;

/**
 * 六十甲子
 * @author dzm
 */
public enum LiuShiJiaZiEnum {

    JIAZI("甲子",1,TianGanEnum.JIA,DiZhiEnum.ZI),
    YICHOU("乙丑",2,TianGanEnum.YI,DiZhiEnum.CHOU),
    BINGYIN("丙寅",3,TianGanEnum.BING,DiZhiEnum.YIN),
    DINGMAO("丁卯",4,TianGanEnum.DING,DiZhiEnum.MAO),
    WUCHEN("戊辰",5,TianGanEnum.WU,DiZhiEnum.CHEN),
    JISI("己巳",6,TianGanEnum.JI,DiZhiEnum.SI),
    GENGSWU("庚午",7,TianGanEnum.GENG,DiZhiEnum.WU),
    XINWEI("辛未",8,TianGanEnum.XIN,DiZhiEnum.WEI),
    RENSHEN("壬申",9,TianGanEnum.REN,DiZhiEnum.SHEN),
    GUIYOU("癸酉",10,TianGanEnum.GUI,DiZhiEnum.YOU),
    JIAXU("甲戌",11,TianGanEnum.JIA,DiZhiEnum.XU),
    YIHAI("乙亥",12,TianGanEnum.YI,DiZhiEnum.HAI),
    BINGZI("丙子",13,TianGanEnum.BING,DiZhiEnum.ZI),
    DINGCHOU("丁丑",14,TianGanEnum.DING,DiZhiEnum.CHOU),
    WUYIN("戊寅",15,TianGanEnum.WU,DiZhiEnum.YIN),
    JIMAO("己卯",16,TianGanEnum.JI,DiZhiEnum.MAO),
    GENCHEN("庚辰",17,TianGanEnum.GENG,DiZhiEnum.CHEN),
    XINSI("辛巳",18,TianGanEnum.XIN,DiZhiEnum.SI),
    RENWU("壬午",19,TianGanEnum.REN,DiZhiEnum.WU),
    GUIWEI("癸未",20,TianGanEnum.GUI,DiZhiEnum.WEI),
    JIASHEN("甲申",21,TianGanEnum.JIA,DiZhiEnum.SHEN),
    YIYOU("乙酉",22,TianGanEnum.YI,DiZhiEnum.YOU),
    BINGXU("丙戌",23,TianGanEnum.BING,DiZhiEnum.XU),
    DINGHAI("丁亥",24,TianGanEnum.DING,DiZhiEnum.HAI),
    WUZI("戊子",25,TianGanEnum.WU,DiZhiEnum.ZI),
    JICHOU("己丑",26,TianGanEnum.JI,DiZhiEnum.CHOU),
    GENGYIN("庚寅",27,TianGanEnum.GENG,DiZhiEnum.YIN),
    XINMAO("辛卯",28,TianGanEnum.XIN,DiZhiEnum.MAO),
    RENCHEN("壬辰",29,TianGanEnum.REN,DiZhiEnum.CHEN),
    GUISI("癸巳",30,TianGanEnum.GUI,DiZhiEnum.SI),
    JIAWU("甲午",31,TianGanEnum.JIA,DiZhiEnum.WU),
    YIWEI("乙未",32,TianGanEnum.YI,DiZhiEnum.WEI),
    BINGSHEN("丙申",33,TianGanEnum.BING,DiZhiEnum.SHEN),
    DINGYOU("丁酉",34,TianGanEnum.DING,DiZhiEnum.SHEN),
    WUXU("戊戌",35,TianGanEnum.WU,DiZhiEnum.YOU),
    JIHAI("己亥",36,TianGanEnum.JI,DiZhiEnum.HAI),
    GENGZI("庚子",37,TianGanEnum.GENG,DiZhiEnum.ZI),
    XINCHOU("辛丑",38,TianGanEnum.XIN,DiZhiEnum.CHOU),
    RENYIN("壬寅",39,TianGanEnum.REN,DiZhiEnum.YIN),
    GUIMAO("癸卯",40,TianGanEnum.GUI,DiZhiEnum.MAO),
    JIACHEN("甲辰",41,TianGanEnum.JIA,DiZhiEnum.CHEN),
    YISI("乙巳",42,TianGanEnum.YI,DiZhiEnum.SI),
    BINGWU("丙午",43,TianGanEnum.BING,DiZhiEnum.WU),
    DINGWEI("丁未",44,TianGanEnum.DING,DiZhiEnum.WEI),
    WUSHEN("戊申",45,TianGanEnum.WU,DiZhiEnum.SHEN),
    JIYOU("己酉",46,TianGanEnum.JI,DiZhiEnum.YOU),
    GENGXU("庚戌",47,TianGanEnum.GENG,DiZhiEnum.XU),
    XINHAI("辛亥",48,TianGanEnum.XIN,DiZhiEnum.HAI),
    RENZI("壬子",49,TianGanEnum.REN,DiZhiEnum.ZI),
    GUICHOU("癸丑",50,TianGanEnum.GUI,DiZhiEnum.CHOU),
    JIAYIN("甲寅",51,TianGanEnum.JIA,DiZhiEnum.YIN),
    YIMAO("乙卯",52,TianGanEnum.YI,DiZhiEnum.MAO),
    BINGCHEN("丙辰",53,TianGanEnum.BING,DiZhiEnum.CHEN),
    DINGSI("丁巳",54,TianGanEnum.DING,DiZhiEnum.SI),
    WUWU("戊午",55,TianGanEnum.WU,DiZhiEnum.WU),
    JIWEI("己未",56,TianGanEnum.JI,DiZhiEnum.WEI),
    GENGSHEN("庚申",57,TianGanEnum.GENG,DiZhiEnum.SHEN),
    XINYOU("辛酉",58,TianGanEnum.XIN,DiZhiEnum.YOU),
    RENXU("壬戌",59,TianGanEnum.REN,DiZhiEnum.XU),
    GUIHAI("癸亥",60,TianGanEnum.GUI,DiZhiEnum.HAI);
    
    private final String display;
    private final int value;
    private final TianGanEnum tiangan;
    private final DiZhiEnum dizhi;
    
    private LiuShiJiaZiEnum(String display , int value,TianGanEnum tianGanEnum, DiZhiEnum diZhiEnum){
        this.value = value;
        this.display = display;
        this.tiangan = tianGanEnum;
        this.dizhi = diZhiEnum;
    }
    
    public static LiuShiJiaZiEnum getLiuShiJiaZiEnum(int value){
        LiuShiJiaZiEnum current = null;
        for (LiuShiJiaZiEnum liuShiJiaZiEnum:LiuShiJiaZiEnum.values()){
            if (liuShiJiaZiEnum.value() == value){
                current = liuShiJiaZiEnum;
                break;
            }
        }
        return current;
    }
    
    public String display(){
        return this.display;
    }
    
    public int value(){
        return this.value;
    }
    
    public TianGanEnum tiangan(){
        return this.tiangan;
    }
    
    public DiZhiEnum dizhi(){
        return this.dizhi;
    }

}
