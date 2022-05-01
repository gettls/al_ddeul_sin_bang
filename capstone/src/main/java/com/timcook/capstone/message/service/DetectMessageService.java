package com.timcook.capstone.message.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.timcook.capstone.message.domain.DetectMessage;
import com.timcook.capstone.message.dto.DetectMessageCreateRequest;
import com.timcook.capstone.message.repository.DetectMessageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DetectMessageService {

	private final DetectMessageRepository detectMessageRepository;
	
	@Transactional
	public DetectMessage create(DetectMessageCreateRequest createRequest) {
		return detectMessageRepository.save(createRequest.toEntity());
	}
	
	
}