package com.timcook.capstone.message.factory;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.timcook.capstone.message.domain.AbstractMessage;
import com.timcook.capstone.message.domain.DetectMessage;
import com.timcook.capstone.message.domain.UrgentMessage;
import com.timcook.capstone.message.dto.subscribe.DetectMessageCreateRequest;
import com.timcook.capstone.message.dto.subscribe.MessageCreateRequsetInterface;
import com.timcook.capstone.message.dto.subscribe.UrgentMessageCreateRequest;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MessageCreateRequestFactory extends AbstractMessageCreateRequestFactory{

	@Override
	public MessageCreateRequsetInterface create(MessageType messageType, List<String> payload) {
		log.info("MESSAGE_TYPE : {}",messageType.name());
		
		switch(messageType) {
		case DETECT: 
			return createDetectMessageCreateRequest(payload);
		case URGENT: 
			return createUrgentMessageCreateRequest(payload);
		default:
			throw new IllegalArgumentException("�߸��� ������ �����Դϴ�.");
		}
	}
	
	private DetectMessageCreateRequest createDetectMessageCreateRequest(List<String> payload) {
		DetectMessageCreateRequest detectMessageCreateRequest = new DetectMessageCreateRequest(payload);
		return detectMessageCreateRequest;
	}
	
	private UrgentMessageCreateRequest createUrgentMessageCreateRequest(List<String> payload) {
		UrgentMessageCreateRequest urgentMessageCreateRequest = new UrgentMessageCreateRequest();
		return urgentMessageCreateRequest;
	}

}
