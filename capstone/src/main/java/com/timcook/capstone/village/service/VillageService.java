package com.timcook.capstone.village.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mysql.cj.log.Log;
import com.timcook.capstone.admin.domain.Admin;
import com.timcook.capstone.admin.repository.AdminRepository;
import com.timcook.capstone.device.dto.DeviceResponse;
import com.timcook.capstone.file.dto.FileResponse;
import com.timcook.capstone.user.dto.UserResponse;
import com.timcook.capstone.village.domain.Village;
import com.timcook.capstone.village.dto.VillageResponse;
import com.timcook.capstone.village.repository.VillageRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class VillageService {

	private final VillageRepository villageRepository;
	private final AdminRepository adminRepository;
	
	public List<VillageResponse> findAll(){
		return villageRepository.findAll().stream()
						.map(village -> VillageResponse.from(village))
						.collect(Collectors.toList());
	}
	
	public VillageResponse findById(Long id) {
		Village village = villageRepository.findById(id)
							.orElseThrow(() -> new IllegalArgumentException("�ش� ������ �����ϴ�."));
		return VillageResponse.from(village); 
	}
	
	public List<DeviceResponse> findAllDevices(Long id){
		Village village = villageRepository.findById(id)
							.orElseThrow(() -> new IllegalArgumentException("�ش� ������ �����ϴ�."));
		return village.getDevices().stream()
				.map(device -> DeviceResponse.from(device))
				.collect(Collectors.toList());
	}
	
	@Transactional
	public void setAdmin(Long villageId, Long adminId) {
		Village village = villageRepository.findById(villageId)
				.orElseThrow(() -> new IllegalArgumentException("�ش� ������ �����ϴ�."));
		
		Admin admin = adminRepository.findById(adminId)
				.orElseThrow(() -> new IllegalArgumentException("�ش� ������ �����ϴ�."));
		
		admin.registerVillage(village);
	}
	
	@Transactional
	public void changeAdmin(Long villageId, Long adminId) {
		Village village = villageRepository.findById(villageId)
				.orElseThrow(() -> new IllegalArgumentException("�ش� ������ �����ϴ�."));
		
		Admin admin = adminRepository.findById(adminId)
				.orElseThrow(() -> new IllegalArgumentException("�ش� ������ �����ϴ�."));
		
		admin.registerVillage(village);
	}
	
	@Transactional
	public void deleteAdmin(Long id) {
		Village village = villageRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("�ش� ������ �����ϴ�."));

		village.updateAdmin(null);
	}
	
	
	public List<FileResponse> getFiles(Long id){
		Village village = villageRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("�ش� ������ �����ϴ�."));
		
		return village.getFiles().stream()
						.map(file -> FileResponse.from(file))
						.collect(Collectors.toList());
	}
	
	public List<UserResponse> getUsers(Long id){
		Village village = villageRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("�ش� ������ �����ϴ�."));
		
		log.info("---[VILLAGE] GET USERS ---");
		village.getUsers().forEach(user -> log.info("{}", user.getId()));
		
		return village.getUsers().stream()
						.map(user -> UserResponse.from(user))
						.collect(Collectors.toList());
	}
}
