package com.timcook.capstone.device.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.timcook.capstone.device.domain.Disabled;

public interface DisabledRepository extends JpaRepository<Disabled, Long>{

}
