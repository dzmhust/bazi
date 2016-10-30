package com.dzmsoft.bazi.db.service;

import java.util.List;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;
import com.github.miemiedev.mybatis.paginator.domain.PageList;
import com.dzmsoft.bazi.db.pojo.BaziList;
import com.dzmsoft.bazi.db.pojo.BaziListExample;

/**
 * Copyright (C), dzmsoft Co., Ltd
 * @author 
 * @date 
 *
 * @version 
 */
public interface BaziListService {
    /**
     * 产生所有的八字
     */
    void genAllBazi();
    
    /**
     * 产生编号
     * @return
     */
    String selectTopIndex();
		
	/**
     * 根据主键判断记录是否存在
     * @dzmsoftgenerated 
     */
	boolean isExist(Integer id);

	/**
     * 查询符合条件的记录数量
     * @dzmsoftgenerated 
     */
	int countByExample(BaziListExample example);
	
	/**
     * 根据条件插入记录
     * @dzmsoftgenerated 
     */
	int insertSelective(BaziList record);
	
	/**
     * 根据主键查询记录
     * @dzmsoftgenerated 
     */
	BaziList selectByPrimaryKey(Integer id);
	
	/**
     * 分页查询记录
     * @dzmsoftgenerated 
     */
	PageList<BaziList> selectByExample(BaziListExample example,PageBounds pageBounds);
	
	/**
     * 根据条件查询记录
     * @dzmsoftgenerated 
     */
	List<BaziList> selectByExample(BaziListExample example);
	
	/**
     * 根据主键更新记录
     * @dzmsoftgenerated 
     */
	int updateByPrimaryKeySelective(BaziList record);
	
	/**
     * 根据查询条件更新记录
     * @dzmsoftgenerated 
     */
	int updateByExampleSelective(BaziList record,
			BaziListExample example);
	
	/**
     * 根据主键生成记录
     * @dzmsoftgenerated 
     */
	int deleteByPrimaryKey(Integer id);
	
	/**
	 * 根据条件删除字段信息
	 * @dzmsoftgenerated 
	 * @param example
	 * @return
	 */
	int deleteByExample(BaziListExample example);
	
		
	
}