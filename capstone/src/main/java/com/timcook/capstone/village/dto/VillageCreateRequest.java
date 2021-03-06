package com.timcook.capstone.village.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.timcook.capstone.village.domain.Address;
import com.timcook.capstone.village.domain.Location;
import com.timcook.capstone.village.domain.Village;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VillageCreateRequest {
	
	@NotBlank
	@Size(max = 20)
	private String nickname;
	
	@NotBlank
	@Size(max=30)
	private String state; 
	
	@NotBlank
	@Size(max = 30)
	private String city; 
 	
	@NotBlank
	@Size(max = 30)
	private String town; 
	
	@NotNull
	private double longitude;
	
	@NotNull
	private double latitude;
	
	public Village toEntity() {
		Address address = Address.builder().city(city).state(state).town(town).build();
		Location location = Location.builder().longitude(longitude).latitude(latitude).build();
		
		return Village.builder()
					.nickname(nickname)
					.address(address)
					.location(location)
					.build();
	}
}
