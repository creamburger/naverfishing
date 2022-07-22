package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.domain.NaverEtc;
import com.example.dao.NaverEtcRepasitory;


@Service
public class NaverEtcServiceImpl implements NaverEtcService{
	
	@Autowired
	private NaverEtcRepasitory naveretcRepo;
	
	public void insertNaverEtc(NaverEtc naveretc) {
		System.out.println(naveretc);
		naveretcRepo.save(naveretc);
		
	}
	
	public List<NaverEtc> getNaverEtcList(NaverEtc naveretc){
		return (List<NaverEtc>) naveretcRepo.findAll();
		
		
	}

	

}
