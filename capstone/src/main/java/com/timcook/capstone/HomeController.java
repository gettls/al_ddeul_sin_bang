package com.timcook.capstone;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {

	@GetMapping("/login/success")
	public String success() {
		return "�α����� ���������� �Ϸ�Ǿ����ϴ�.";
	}
	
	@GetMapping("/login/fail")
	public String fail() {
		return "�α��ο� �����߽��ϴ�.";
	}
	
	@GetMapping("/logout/success")
	public String logout() {
		return "�α׾ƿ� �Ǿ����ϴ�.";
	}
}
