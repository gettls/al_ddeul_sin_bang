package com.timcook.capstone.village.dto;

import javax.validation.constraints.Size;

import com.sun.istack.NotNull;
import com.timcook.capstone.village.domain.Address;
import com.timcook.capstone.village.domain.Village;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VillageCreateRequest {
	
	@NotNull
	@Size(max = 20)
	private String nickname;
	
	@NotNull
	@Size(max=30)
	private String state; // ��,�� e.g) ��⵵, ����Ư����, ...
	
	@NotNull
	@Size(max = 30)
	private String city; // ��,��,��,��,�� e.g) �ϳ���, ������, ... 
 	
	@NotNull
	@Size(max = 30)
	private String town; // �� e.g) �ϳ���, �Ｚ��, ...  
	
	public VillageCreateRequest(String nickname, String state,
			String city, String town) {
		this.nickname = nickname;
		this.state = state;
		this.city = city;
		this.town = town;
	}	
	
	public Village toEntity() {
		Address address = new Address(state, city, town);
		
		return Village.builder()
					.nickname(nickname)
					.address(address)
					.build();
	}
}
