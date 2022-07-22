package com.example.util;

import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.dao.BoardRepasitory;
import com.example.dao.NaverEtcRepasitory;
import com.example.domain.Board;
import com.example.domain.NaverEtc;

@Aspect
@Configuration
public class LoadDatabase {

	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

	@Bean
	CommandLineRunner initDatabase(BoardRepasitory repository) {
		System.out.println(repository);

		return args -> {
			log.info("preloading" + repository.save(new Board("tesid", "tespw")));

		};
	}
	@Bean
	CommandLineRunner initDatabase2(NaverEtcRepasitory repository2) {
		System.out.println(repository2);

		return args -> {
			log.info("preloading" + repository2.save(new NaverEtc(null, null, null, null, null, null,"ideee")));

		};
	}
	
}
