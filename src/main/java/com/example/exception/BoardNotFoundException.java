package com.example.exception;

public class BoardNotFoundException extends BoardException {

	public BoardNotFoundException() {}
	public BoardNotFoundException(String message) {
		super(message);
	}
}
