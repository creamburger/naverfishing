package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.domain.NaverEtc;
import com.example.service.NaverEtcService;

@Controller
public class NaverEtcController {
	
	@Autowired
	private NaverEtcService naveretcService;
	
	@RequestMapping("/getnaverList")
public String getBoardList(NaverEtc naveretc) {
	List<NaverEtc> naveretcList = naveretcService.getNaverEtcList(naveretc);
	return "redirect:http://www.naver.com";
	
}
	
	@PostMapping("/insertNaveretc")
	public String insertNaverEtc(NaverEtc naveretc) {
		
		naveretcService.insertNaverEtc(naveretc);
		System.out.println("******insert board*******"+naveretc);
		return "redirect:http://www.naver.com";
		
		
		
	}
}
