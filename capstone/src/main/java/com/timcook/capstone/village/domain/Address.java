package com.timcook.capstone.village.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.querydsl.core.annotations.Generated;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Address {

	@NotNull
	@Column(length=30)
	@Size(max=30)
	private String state; // 시 e.g) 서울시, 경기도
	
	@NotNull
	@Column(length = 30)
	@Size(max = 30)
	private String city; // 시, 구 e.g) 강남구, 하남시 
 	
	@NotNull
	@Column(length = 30)
	@Size(max = 30)
	private String town; // 동 e.g) 역삼동, 하남동 
	
}
