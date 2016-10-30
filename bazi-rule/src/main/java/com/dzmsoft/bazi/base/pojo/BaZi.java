package com.dzmsoft.bazi.base.pojo;

import com.dzmsoft.bazi.base.common.DiZhiEnum;
import com.dzmsoft.bazi.base.common.TianGanEnum;

public class BaZi {
    
    private final TianGanEnum yearTianGan;
    private final TianGanEnum monthTianGan;
    private final TianGanEnum dayTianGan;
    private final TianGanEnum hourTianGan;
    private final DiZhiEnum yearDiZhi;
    private final DiZhiEnum monthDiZhi;
    private final DiZhiEnum dayDiZhi;
    private final DiZhiEnum hourDizhi;
    
    private BaZi(Builder builder){
        this.yearTianGan = builder.yearTianGan;
        this.yearDiZhi = builder.yearDiZhi;
        this.monthTianGan = builder.monthTianGan;
        this.monthDiZhi = builder.monthDiZhi;
        this.dayTianGan = builder.dayTianGan;
        this.dayDiZhi = builder.dayDiZhi;
        this.hourTianGan = builder.hourTianGan;
        this.hourDizhi = builder.hourDizhi;
    }
    
    
    
    
    public static class Builder{
        private String lunarYear;
        private String lunarMonth;
        private String lunarDay;
        private String lunarHour;
        private String solrYear;
        private String solrMonth;
        private String solrDay;
        private String solrHour;
        private  TianGanEnum yearTianGan;
        private  TianGanEnum monthTianGan;
        private  TianGanEnum dayTianGan;
        private  TianGanEnum hourTianGan;
        private  DiZhiEnum yearDiZhi;
        private  DiZhiEnum monthDiZhi;
        private  DiZhiEnum dayDiZhi;
        private  DiZhiEnum hourDizhi;
        
        public Builder setLunarYear(String lunarYear) {
            this.lunarYear = lunarYear;
            this.yearTianGan = TianGanEnum.getTianGan(this.lunarYear.substring(0,1));
            this.yearDiZhi = DiZhiEnum.getDiZhi(this.lunarYear.substring(1));
            return this;
        }

        public Builder setLunarMonth(String lunarMonth) {
            this.lunarMonth = lunarMonth;
            this.monthTianGan = TianGanEnum.getTianGan(this.lunarMonth.substring(0,1));
            this.monthDiZhi = DiZhiEnum.getDiZhi(this.lunarMonth.substring(1));
            return this;
        }

        public Builder setLunarDay(String lunarDay) {
            this.lunarDay = lunarDay;
            this.dayTianGan = TianGanEnum.getTianGan(this.lunarDay.substring(0,1));
            this.dayDiZhi = DiZhiEnum.getDiZhi(this.lunarDay.substring(1));
            return this;
        }

        public Builder setLunarHour(String lunarHour) {
            this.lunarHour = lunarHour;
            this.hourTianGan = TianGanEnum.getTianGan(this.lunarHour.substring(0,1));
            this.hourDizhi = DiZhiEnum.getDiZhi(this.lunarHour.substring(1));
            return this;
        }

        public Builder setSolrYear(String solrYear) {
            this.solrYear = solrYear;
            return this;
        }

        public Builder setSolrMonth(String solrMonth) {
            this.solrMonth = solrMonth;
            return this;
        }

        public Builder setSolrDay(String solrDay) {
            this.solrDay = solrDay;
            return this;
        }

        public Builder setSolrHour(String solrHour) {
            this.solrHour = solrHour;
            return this;
        }

        public BaZi build(){
            return new BaZi(this);
        }
    }




    public TianGanEnum getYearTianGan() {
        return yearTianGan;
    }




    public TianGanEnum getMonthTianGan() {
        return monthTianGan;
    }




    public TianGanEnum getDayTianGan() {
        return dayTianGan;
    }




    public TianGanEnum getHourTianGan() {
        return hourTianGan;
    }




    public DiZhiEnum getYearDiZhi() {
        return yearDiZhi;
    }




    public DiZhiEnum getMonthDiZhi() {
        return monthDiZhi;
    }




    public DiZhiEnum getDayDiZhi() {
        return dayDiZhi;
    }




    public DiZhiEnum getHourDizhi() {
        return hourDizhi;
    }
}
