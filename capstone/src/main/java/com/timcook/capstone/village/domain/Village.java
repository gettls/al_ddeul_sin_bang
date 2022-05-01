package com.timcook.capstone.village.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import com.timcook.capstone.admin.domain.Admin;
import com.timcook.capstone.device.domain.Device;
import com.timcook.capstone.file.domain.File;
import com.timcook.capstone.user.domain.User;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Entity
@Getter
@NoArgsConstructor
@Slf4j
public class Village {

	@Id @GeneratedValue
	@Column(name = "VILLAGE_ID")
	@NotNull
	private Long id;
	
	@OneToOne(mappedBy = "village",fetch = FetchType.LAZY)
	private Admin admin;
	
	@Column(length = 20)
	private String nickname;
	
	@OneToMany(mappedBy = "village")
	private List<Device> devices = new ArrayList<>();
	
	@OneToMany(mappedBy = "village")
	private List<File> files = new ArrayList<>();
	
	@OneToMany
	private List<User> users = new ArrayList<>();
	
	@Embedded
	private Address address;
	
	@Builder
	public Village(Admin admin, List<Device> devices, Address address) {
		this.admin = admin;
		this.devices = devices;
		this.address = address;
	}
	
	public void addDevice(Device device) {
		this.devices.add(device);
	}
	
	public void updateAdmin(Admin admin) {
		if(!Objects.isNull(this.admin)) {
			this.admin.removeVillage();
		}
		this.admin = admin;
	}
	
	public void addUser(User user) {
		log.info("addUser() : {}", user.getId());
		this.users.add(user);
	}
	
	public void removeUser(User user) {
		this.users.remove(user);
	}
}
