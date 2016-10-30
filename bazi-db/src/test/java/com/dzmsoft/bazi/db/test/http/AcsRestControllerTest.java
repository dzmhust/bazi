package com.dzmsoft.bazi.db.test.http;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

import com.dzmsoft.framework.base.util.HttpUtil;

public class AcsRestControllerTest {

    @Test
    public void push01_test(){
        StringBuilder url = new StringBuilder("http://localhost:8096/acs/rest/jpush/");
        url.append("push01");
        Map<String, String> params = new HashMap<String, String>();
        params.put("title", "新的单据");
        params.put("msgContent", "您有一个单据需要查收");
        params.put("tag", "10");
        params.put("appKey", "f21610792b1e1d38243da8d5");
        params.put("masterSecret", "d0c91e0cb2f42d889c1e3b90");
        String result = HttpUtil.doPost(url.toString(), params);
        System.out.println(result);
    }
}
