package com.dzmsoft.bazi.base.handler;

import java.util.List;

import com.dzmsoft.bazi.base.common.LiuShiJiaZiEnum;

public interface IPaipanHandler {
    /**
     * 根据年柱，推算月柱
     * @return
     */
    List<LiuShiJiaZiEnum> getMonths(LiuShiJiaZiEnum year);
    /**
     * 根据日柱，推算时柱
     * @param day
     * @return
     */
    List<LiuShiJiaZiEnum> getHours(LiuShiJiaZiEnum day);
}
