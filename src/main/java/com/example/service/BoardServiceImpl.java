package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.BoardRepasitory;
import com.example.domain.Board;

@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private BoardRepasitory boardRepo;
	
	public void insertBoard(Board board) {
		System.out.println(board);
		boardRepo.save(board);
		
	}
	
	public List<Board> getBoardList(Board borad){
		return (List<Board>) boardRepo.findAll();
		
		
	}
	

}
