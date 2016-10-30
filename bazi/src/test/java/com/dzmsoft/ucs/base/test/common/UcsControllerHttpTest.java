package com.dzmsoft.ucs.base.test.common;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

import com.dzmsoft.framework.base.util.HttpUtil;
import com.dzmsoft.framework.base.util.StringUtil;
import com.dzmsoft.framework.base.util.security.DigestsUtil;

public class UcsControllerHttpTest {

    @Test
    public void appLogin_test(){
        String uri = "http://192.168.4.187:8091/ucs/rest/ucs02";
        Map<String, String> params = new HashMap<String, String>();
        params.put("username", "admin");
        params.put("password", DigestsUtil.md5Hex(DigestsUtil.md5Hex("123456")));
        params.put("grant_type", "password");
//        params.put("client_id", "75da5da7431045fe98a96468d143ee28");
        params.put("client_id", "75da5da7431045fe98a96468d143ee27");
        params.put("client_secret", "26965b1c8404430bb8e969e2a33b81b1");
        String result = HttpUtil.doPost(uri, params);
        System.out.println(result);
    }
    
    @Test
    public void test_guid(){
        System.out.println(StringUtil.getUuidString());
        System.out.println(StringUtil.getUuidString());
    }
    
    public void ucs14_test(){
        String uri = "http://localhost/ucs/rest/ucs14";
        Map<String, String> params = new HashMap<String, String>();
        params.put("username", "admin");
        params.put("password", DigestsUtil.md5Hex(DigestsUtil.md5Hex("123456")));
        params.put("grant_type", "password");
//        params.put("client_id", "75da5da7431045fe98a96468d143ee28");
        params.put("client_id", "75da5da7431045fe98a96468d143ee27");
        params.put("client_secret", "26965b1c8404430bb8e969e2a33b81b1");
        String result = HttpUtil.doPost(uri, params);
        System.out.println(result);
    }
    
    @Test
    public void test01_test(){
        String uri = "http://localhost:8091/ucs/rest/test/test01";
        Map<String, String> params = new HashMap<String, String>();
        String result = HttpUtil.doGet(uri, params);
        System.out.println(result);
    }
}
