package com.timcook.capstone;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.timcook.capstone.admin.domain.Admin;
import com.timcook.capstone.device.domain.Device;
import com.timcook.capstone.device.domain.Status;
import com.timcook.capstone.user.domain.Role;
import com.timcook.capstone.user.domain.User;
import com.timcook.capstone.village.domain.Address;
import com.timcook.capstone.village.domain.Location;
import com.timcook.capstone.village.domain.Village;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class InitData {

	private final InitService initService;
	
	@PostConstruct
	public void init() {
		initService.init();
	}
	
	@Component
	public static class InitService{
		
		@PersistenceContext
		EntityManager em;
		
		@Autowired private BCryptPasswordEncoder bCryptPasswordEncoder;
		
		@Transactional
		public void init() {
			
			Village village = Village.builder()
					.address(Address.builder().city("서울시").state("광진구").town("화양동").build())
					.nickname("화양동사무소")
					.location(Location.builder().longitude(37.542914462924).latitude(127.06868274185).build())
					.build();
			
			String password = bCryptPasswordEncoder.encode("password");
			
			Admin admin = new Admin("test", password,"test", Role.ROLE_ADMIN, null, null, null, "01012341234", null);
			admin.registerVillage(village);
			
			Admin admin2 = new Admin("test2", password,"test2", Role.ROLE_ADMIN, null, null, null, "01012341234", null);
			em.persist(admin);
			em.persist(admin2);
			em.persist(village);
			
			for (int i=0;i<3;i++) {
				Device device = Device.builder()
									.village(village)
									.build();
				
				User user = User.builder()
						.username("user" + Integer.toString(i+1))
						.password(password)
						.email("user" + Integer.toString(i+1))
						.role(Role.ROLE_USER)
						.device(device)
						.build();
				
				device.changeInfo(user, village);
				
				em.persist(user);
				em.persist(device);
			}
			 
			em.persist(village);
			em.flush();
		}
		
	}
	
}
