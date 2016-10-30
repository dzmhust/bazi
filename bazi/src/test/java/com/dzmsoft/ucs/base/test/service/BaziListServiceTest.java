package com.dzmsoft.ucs.base.test.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.dzmsoft.bazi.db.service.BaziListService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath*:/spring.xml"})
public class BaziListServiceTest {
    
    @Autowired
    private BaziListService baziListService;
    
    @Test
    @Rollback(true)
    public void genAdminUser(){
        baziListService.genAllBazi();
    }
}
