package com.dzmsoft.bazi.base.handler;

import com.dzmsoft.bazi.base.pojo.BaZi;

public interface IDiZhiHandler {

    /**
     * 判断三合
     * @param bazi
     */
    void handleSanHe(BaZi bazi);
    /**
     * 判断六合
     * @param bazi
     */
    void handleLiuHe(BaZi bazi);
    /**
     * 判断三会
     * @param bazi
     */
    void handleSanHui(BaZi bazi);
}
