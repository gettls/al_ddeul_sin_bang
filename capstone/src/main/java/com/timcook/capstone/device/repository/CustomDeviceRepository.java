package com.timcook.capstone.device.repository;

import java.util.List;

import com.timcook.capstone.device.dto.DisabledResponse;
import com.timcook.capstone.device.dto.UnconfirmResponse;

public interface CustomDeviceRepository {
	
	List<DisabledResponse> getDisabled(Long deviceId);
	List<UnconfirmResponse> getUnconfirm(Long deviceId);
	
}