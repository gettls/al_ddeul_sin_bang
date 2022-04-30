package com.timcook.capstone.user.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.timcook.capstone.user.domain.Role;
import com.timcook.capstone.user.domain.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
	
	@NotNull
	private Long id; 
	
	@NotBlank(message = "�г����� ������� �� �����ϴ�.")
	private String username;
	private String email;
	private Role role;
	
	public static UserResponse from(User user) {
		return new UserResponse(user.getId(), user.getUsername(), user.getEmail(), user.getRole());
	}
}
