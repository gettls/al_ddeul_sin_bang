package com.timcook.capstone.village.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor
public class Address {

	@NotNull
	@Column(length=30)
	@Size(max=30)
	private String state; // ��,�� e.g) ��⵵, ����Ư����, ...
	
	@NotNull
	@Column(length = 30)
	@Size(max = 30)
	private String city; // ��,��,��,��,�� e.g) �ϳ���, ������, ... 
 	
	@NotNull
	@Column(length = 30)
	@Size(max = 30)
	private String town; // �� e.g) �ϳ���, �Ｚ��, ...  
	
}
