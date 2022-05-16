package com.timcook.capstone.notification.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.timcook.capstone.notification.dto.NotificationRequest;
import com.timcook.capstone.notification.service.NotificationService;
import com.timcook.capstone.user.domain.User;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/api/notification")
@RequiredArgsConstructor
public class NotificationController {

	private final NotificationService notificationService;
	
	@PostMapping("/token")
	public ResponseEntity<String> register(@AuthenticationPrincipal User user, @RequestBody String token) {
		notificationService.register(user.getId(), token);
		
		// 토큰 등록 알림
		notificationService.sendNotification(NotificationRequest.builder()
												.token(notificationService.getToken(user.getId()))
												.title("토큰 등록 확인")
												.body("토큰이 정상적으로 등록되었습니다")
												.build());
		
		return ResponseEntity.ok("토큰이 등록되었습니다.");	
	}
	
}
