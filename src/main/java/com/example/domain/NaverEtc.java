package com.example.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class NaverEtc {
	
	
	private String nm;
	private String phone_no;
	private String birth_day;
	private String mobile_cd;
	private String foreignYn;
	private String birth_month;
	@Id
	private String auth_no;
	

}
