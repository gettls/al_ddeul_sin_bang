package com.timcook.capstone.message.dto;

import com.timcook.capstone.message.domain.MessageType;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BroadcastMessage {
	
	private MessageType type;
	private String title;
	private String contents;
	private String fileId;
	
	@Builder
	public BroadcastMessage(MessageType type, String title, String contents, String fileId) {
		this.type = type;
		this.title = title;
		this.contents = contents;
		this.fileId = fileId;
	}
	
	public String toPayload() {
		return  type.name() + "/" + title + "/" + contents + "/" + fileId;
	}
}
