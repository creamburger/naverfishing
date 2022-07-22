package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.domain.Board;
import com.example.service.BoardService;

@Controller
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	@RequestMapping("/getBoardList")
public String getBoardList(Board board) {
	List<Board> boardList = boardService.getBoardList(board);
	return "redirect:naveretc.html";
	
}
	
	@PostMapping("/insertBoard")
	public String insertBoard(Board board) {
		boardService.insertBoard(board);
		System.out.println("******insert board*******"+board);
		return "redirect:naveretc.html";
		//return "redirect:getBoardList";
		
		
	}
}
