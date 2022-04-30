package com.timcook.capstone.device.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.timcook.capstone.device.domain.Device;

public interface DeviceRepository extends JpaRepository<Device, Long>{

}