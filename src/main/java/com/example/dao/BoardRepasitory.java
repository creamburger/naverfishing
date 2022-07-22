package com.example.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.domain.Board;

public interface BoardRepasitory extends CrudRepository <Board,String> {

}
