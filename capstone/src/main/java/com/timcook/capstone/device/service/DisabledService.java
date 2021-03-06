package com.timcook.capstone.device.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.timcook.capstone.device.domain.Device;
import com.timcook.capstone.device.domain.Disabled;
import com.timcook.capstone.device.domain.Unconfirm;
import com.timcook.capstone.device.repository.DeviceRepository;
import com.timcook.capstone.device.repository.DisabledRepository;
import com.timcook.capstone.device.repository.UnconfirmRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class DisabledService {

	private final DisabledRepository disabledRepository;
	private final DeviceRepository deviceRepository;
	
	@Transactional
	public void save(List<Long> devicesId) {
		log.info("DISABLED INFO SAVE");
		List<Device> devices = deviceRepository.findAllById(devicesId);
		
		List<Disabled> list = new ArrayList<>();
		
		for(Device device : devices){
			log.info("deviceId={}",device.getId());
			list.add(Disabled.builder().device(device).build());
		}
		
		disabledRepository.saveAll(list);
	}
	
}
