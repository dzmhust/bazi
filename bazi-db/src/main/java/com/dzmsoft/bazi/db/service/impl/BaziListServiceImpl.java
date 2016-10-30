package com.dzmsoft.bazi.db.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dzmsoft.bazi.base.common.LiuShiJiaZiEnum;
import com.dzmsoft.bazi.base.handler.IPaipanHandler;
import com.dzmsoft.bazi.base.handler.impl.PaipanHandler;
import com.dzmsoft.bazi.db.dao.BaziListMapper;
import com.dzmsoft.bazi.db.pojo.BaziList;
import com.dzmsoft.bazi.db.pojo.BaziListExample;
import com.dzmsoft.bazi.db.service.BaziListService;
import com.dzmsoft.framework.base.util.CheckEmptyUtil;
import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
import com.github.miemiedev.mybatis.paginator.domain.PageList;
/**
 * Copyright (C), dzmsoft Co., Ltd
 * @author 
 * @date 
 *
 * @version 
 */
@Service
@Transactional(readOnly = true)
public class BaziListServiceImpl implements BaziListService{

	@Autowired
	private BaziListMapper baziListMapper;
	
	private IPaipanHandler iPaipanHandler = new PaipanHandler();
	
	@Transactional(readOnly = false)
	@Override
	public void genAllBazi() {
	    BaziList baziList = null;
	    for (LiuShiJiaZiEnum year:LiuShiJiaZiEnum.values()){
	        baziList  = new BaziList();
	        baziList.setYear(year.display());// 年柱
	        List<LiuShiJiaZiEnum> months = iPaipanHandler.getMonths(year);
	        if (!CheckEmptyUtil.isEmpty(months)){
	            for (LiuShiJiaZiEnum month:months){
	                baziList.setMonth(month.display());// 月柱
	                for (LiuShiJiaZiEnum day:LiuShiJiaZiEnum.values()){
	                    baziList.setDay(day.display());
	                    List<LiuShiJiaZiEnum> hours = iPaipanHandler.getHours(day);
	                    for (LiuShiJiaZiEnum hour:hours){
	                        baziList.setHour(hour.display());
	                        insertSelective(baziList);
//	                        System.out.println(baziList.getYear() + " " + baziList.getMonth() + " " + baziList.getDay() + " " + baziList.getHour());
	                    }
	                }
	            }
	        }
	    }
	}
	
	@Override
	public String selectTopIndex() {
	    BaziListExample example = new BaziListExample();
	    return baziListMapper.selectTopIndex(example);
	}
		
	/**
     * 根据主键判断记录是否存在
     * @dzmsoftgenerated 
     */
	@Override
	public boolean isExist(Integer id) {
	    BaziListExample example = new BaziListExample();
	    BaziListExample.Criteria criteria = example.createCriteria();
	    criteria.andIdEqualTo(id);
	    int count = countByExample(example);
	    return count>0?true:false;
	}
	
	/**
     * 查询符合条件的记录数量
     * @dzmsoftgenerated 
     */
    @Override
	public int countByExample(BaziListExample example){
		return baziListMapper.countByExample(example);
	}

	/**
     * 根据条件插入记录
     * @dzmsoftgenerated 
     */
    @Transactional(readOnly = false)
    @Override
	public int insertSelective(BaziList record){
				return baziListMapper.insertSelective(record);
	}
	
	/**
     * 根据主键查询记录
     * @dzmsoftgenerated 
     */
    @Override
	public BaziList selectByPrimaryKey(Integer id){
		return baziListMapper.selectByPrimaryKey(id);
	}
	
	/**
     * 分页查询记录
     * @dzmsoftgenerated 
     */
    @Override
	public PageList<BaziList> selectByExample(BaziListExample example,PageBounds pageBounds){
		return baziListMapper.selectByExample(example, pageBounds);
	}
	
	/**
     * 根据条件查询记录
     * @dzmsoftgenerated 
     */
    @Override
	public List<BaziList> selectByExample(BaziListExample example){
		return baziListMapper.selectByExample(example);
	}
	
	/**
     * 根据主键更新记录
     * @dzmsoftgenerated 
     */
    @Transactional(readOnly = false)
    @Override
	public int updateByPrimaryKeySelective(BaziList record){
		return baziListMapper.updateByPrimaryKeySelective(record);
	}
	
	/**
     * 根据查询条件更新记录
     * @dzmsoftgenerated 
     */
    @Transactional(readOnly = false)
    @Override
	public int updateByExampleSelective(BaziList record,
			BaziListExample example){
		return baziListMapper.updateByExampleSelective(record, example);
	}
	
	/**
     * 根据主键生成记录
     * @dzmsoftgenerated 
     */
    @Transactional(readOnly = false)
    @Override
	public int deleteByPrimaryKey(Integer id){
		return baziListMapper.deleteByPrimaryKey(id);
	}
	
	/**
	 * 根据条件删除字段信息
	 * @dzmsoftgenerated 
	 * @param example
	 * @return
	 */
	@Transactional(readOnly = false)
	@Override
	public int deleteByExample(BaziListExample example){
		return baziListMapper.deleteByExample(example);
	}
	
	}