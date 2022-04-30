package com.timcook.capstone.admin.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.timcook.capstone.admin.domain.Admin;
import com.timcook.capstone.admin.dto.AdminResponse;
import com.timcook.capstone.admin.repository.AdminRepository;
import com.timcook.capstone.user.domain.User;
import com.timcook.capstone.user.dto.UserResponse;
import com.timcook.capstone.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class AdminService {
	
	private final AdminRepository adminRepository;
	private final UserRepository userRepository;
	
	public List<AdminResponse> findAll(){
		return adminRepository.findAll().stream()
				.map(admin -> AdminResponse.from(admin))
				.collect(Collectors.toList());
	}
	
	public AdminResponse findById(Long id) {
		Admin admin = adminRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("���� ȸ���Դϴ�."));
		return AdminResponse.from(admin);
	}
	
	@Transactional
	public void delete(Long id) {
		Admin admin = adminRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("���� ȸ���Դϴ�."));
		
		adminRepository.delete(admin);
	}
	
	@Transactional
	public UserResponse changeToUser(Long id) {
		Admin admin = adminRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("���� ȸ���Դϴ�."));
		
		User user = Admin.toUser(admin);
		
		userRepository.save(user);
		adminRepository.delete(admin);
		
		return UserResponse.from(user);
	}
	
	
}