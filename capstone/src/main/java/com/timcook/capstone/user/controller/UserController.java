package com.timcook.capstone.user.controller;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.timcook.capstone.admin.dto.AdminResponse;
import com.timcook.capstone.common.security.auth.PrincipalDetails;
import com.timcook.capstone.device.dto.DeviceCreateRequest;
import com.timcook.capstone.device.dto.DeviceResponse;
import com.timcook.capstone.notification.service.NotificationService;
import com.timcook.capstone.user.dto.DeviceUserCreateRequest;
import com.timcook.capstone.user.dto.UserCreateRequest;
import com.timcook.capstone.user.dto.UserResponse;
import com.timcook.capstone.user.service.UserService;
import com.timcook.capstone.village.dto.VillageResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {

	private final UserService userService;
	private final NotificationService notificationService;
	
	@ExceptionHandler(SQLIntegrityConstraintViolationException.class)
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public String duplicateAccess(Exception e) {
		log.info("????????? ?????? ??????");
		return "????????? ?????? ??????";
	}
	
	@GetMapping
	public ResponseEntity<List<UserResponse>> findAll(){
		log.info("?????? ?????? ??????");
		return ResponseEntity.ok(userService.findAll());
	}
	
	@PostMapping
	public ResponseEntity<UserResponse> register(String email) {
		log.info("?????? ??????");
		return ResponseEntity.ok(userService.register(email));
	}
	
	@GetMapping("/{email}")
	public ResponseEntity<UserResponse> findById(@PathVariable String email){
		log.info("?????? ???????????? ??????");
		return ResponseEntity.ok(userService.findByEmail(email));
	}
	
	@GetMapping("/phoneNumber")
	public ResponseEntity<UserResponse> findByPhoneNumber(String phoneNumber){
		log.info("?????? ???????????? ??????");
		return ResponseEntity.ok(userService.findByPhoneNumber(phoneNumber));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<UserResponse> registerData(@PathVariable Long id,
			@Validated @RequestBody UserCreateRequest userCreateRequest){
		log.info("?????? ?????? ??????");
		return ResponseEntity.ok(userService.registerInformation(id, userCreateRequest));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id){
		log.info("?????? ??????");
		notificationService.deleteToken(id); // delete token 
		userService.delete(id);
		return ResponseEntity.ok("????????? ?????????????????????.");
	}
	
	@PutMapping("/admins/{id}")
	public ResponseEntity<AdminResponse> changeToAdmin(@PathVariable Long id){
		log.info("???????????? ??????");
		return ResponseEntity.ok(userService.changeToAdmin(id));
	}
	
	@GetMapping("/{id}/devices")
	public ResponseEntity<DeviceResponse> findDeviceById(@PathVariable Long id){
		log.info("????????? ????????? ??????");
		return ResponseEntity.ok(userService.findDeviceById(id));
	}
	
	@GetMapping("/{id}/villages")
	public ResponseEntity<VillageResponse> findVillageById(@PathVariable Long id){
		log.info("????????? ?????? ??????");
		return ResponseEntity.ok(userService.findVillageById(id));
	}
	
	@PostMapping("/{id}/villages")
	public ResponseEntity<String> registerVillage(@PathVariable Long id, Long villageId){
		log.info("????????? ?????? ??????");
		userService.registerVillage(id, villageId);
		return ResponseEntity.ok("????????? ?????????????????????.");
	}
	
	@GetMapping("/{id}/ward")
	public ResponseEntity<UserResponse> getWard(@PathVariable Long id){
		log.info("????????? ???????????? ??????");
		return ResponseEntity.ok(userService.getWard(id));
	}
	
	@GetMapping("/{id}/guardian")
	public ResponseEntity<List<UserResponse>> getGuardians(@PathVariable Long id){
		log.info("????????? ????????? ??????");
		return ResponseEntity.ok(userService.getGaurdians(id));
	}
	
	@PostMapping("/{id}/guardian")
	public ResponseEntity<String> registerGuardian(@PathVariable Long id, Long guardianId){
		log.info("????????? ????????? ??????");
		userService.registerGaurdian(id, guardianId);
		return ResponseEntity.ok("???????????? ?????????????????????.");
	}
	
	@GetMapping("/search")
	public ResponseEntity<List<UserResponse>> search(Long villageId, String username){
		log.info("????????? = [{}]",username);
		return ResponseEntity.ok(userService.search(villageId, username));
	}
	
	@PostMapping("/device-owner")
	public ResponseEntity<UserResponse> registerDeviceUser(@RequestBody DeviceUserCreateRequest deviceUserCreateRequest){
		log.info("????????? ????????? ??????");
		return ResponseEntity.ok(userService.registerDeviceUser(deviceUserCreateRequest));
	}
}
