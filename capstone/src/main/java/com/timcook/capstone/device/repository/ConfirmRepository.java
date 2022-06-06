package com.timcook.capstone.device.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.timcook.capstone.device.domain.Confirm;

public interface ConfirmRepository extends JpaRepository<Confirm, Long>{

}
