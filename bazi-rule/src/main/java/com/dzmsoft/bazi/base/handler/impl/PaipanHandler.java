package com.dzmsoft.bazi.base.handler.impl;

import java.util.ArrayList;
import java.util.List;

import com.dzmsoft.bazi.base.common.LiuShiJiaZiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;
import com.dzmsoft.bazi.base.handler.IPaipanHandler;

public class PaipanHandler implements IPaipanHandler {

    @Override
    public List<LiuShiJiaZiEnum> getMonths(LiuShiJiaZiEnum year) {
        List<LiuShiJiaZiEnum> months = null;
        if (year.tiangan().compareTo(TianGanEnum.JIA)==0 || year.tiangan().compareTo(TianGanEnum.JI)==0){
            // 甲己之年丙作首
            months = calculateMonths(LiuShiJiaZiEnum.BINGYIN);
        } else if (year.tiangan().compareTo(TianGanEnum.YI)==0 || year.tiangan().compareTo(TianGanEnum.GENG)==0){
            // 乙庚之岁戊为头
            months = calculateMonths(LiuShiJiaZiEnum.WUYIN);
        } else if (year.tiangan().compareTo(TianGanEnum.BING)==0 || year.tiangan().compareTo(TianGanEnum.XIN)==0){
            // 丙辛之岁寻庚起
            months = calculateMonths(LiuShiJiaZiEnum.GENGYIN);
        } else if (year.tiangan().compareTo(TianGanEnum.DING)==0 || year.tiangan().compareTo(TianGanEnum.REN)==0){
            // 丁壬壬位顺行流
            months = calculateMonths(LiuShiJiaZiEnum.RENYIN);
        } else if (year.tiangan().compareTo(TianGanEnum.WU)==0 || year.tiangan().compareTo(TianGanEnum.GUI)==0){
            // 若问戊癸何方发，甲寅之上好追求
            months = calculateMonths(LiuShiJiaZiEnum.JIAYIN);
        }
        return months;
    }
    
    /**
     * 推算月柱
     * @param start
     * @return
     */
    private List<LiuShiJiaZiEnum> calculateMonths(LiuShiJiaZiEnum start){
        List<LiuShiJiaZiEnum> months = new ArrayList<LiuShiJiaZiEnum>();
        LiuShiJiaZiEnum month = null;
        int end = 0;
        for (int i=0; i<12; i++){
            end = start.value()+i;
            end = end>60?end%60:end;
            month = LiuShiJiaZiEnum.getLiuShiJiaZiEnum(end);
            months.add(month);
        }
        return months;
    }
    
    @Override
    public List<LiuShiJiaZiEnum> getHours(LiuShiJiaZiEnum day) {
        List<LiuShiJiaZiEnum> hours = null;
        if (day.tiangan().compareTo(TianGanEnum.JIA)==0 || day.tiangan().compareTo(TianGanEnum.JI)==0){
            // 甲己起甲子
            hours = calculateHours(LiuShiJiaZiEnum.JIAZI);
        } else if (day.tiangan().compareTo(TianGanEnum.YI)==0 || day.tiangan().compareTo(TianGanEnum.GENG)==0){
            // 乙庚丙作初
            hours = calculateHours(LiuShiJiaZiEnum.BINGZI);
        } else if (day.tiangan().compareTo(TianGanEnum.BING)==0 || day.tiangan().compareTo(TianGanEnum.XIN)==0){
            // 丙辛从戊子
            hours = calculateHours(LiuShiJiaZiEnum.WUZI);
        } else if (day.tiangan().compareTo(TianGanEnum.DING)==0 || day.tiangan().compareTo(TianGanEnum.REN)==0){
            // 丁壬庚子居
            hours = calculateHours(LiuShiJiaZiEnum.GENGZI);
        } else if (day.tiangan().compareTo(TianGanEnum.WU)==0 || day.tiangan().compareTo(TianGanEnum.GUI)==0){
            // 戊癸排壬子
            hours = calculateHours(LiuShiJiaZiEnum.RENZI);
        }
        return hours;
    }
    
    private List<LiuShiJiaZiEnum> calculateHours(LiuShiJiaZiEnum start){
        List<LiuShiJiaZiEnum> hours = new ArrayList<LiuShiJiaZiEnum>();
        LiuShiJiaZiEnum hour = null;
        int end = 0;
        for (int i=0; i<12; i++){
            end = start.value()+i;
            end = end>60?end%60:end;
            hour = LiuShiJiaZiEnum.getLiuShiJiaZiEnum(end);
            hours.add(hour);
        }
        return hours;
    }
}
