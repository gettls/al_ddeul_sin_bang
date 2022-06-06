package com.timcook.capstone.device.repository;

import java.util.List;

import static com.timcook.capstone.device.domain.QDisabled.disabled;
import static com.timcook.capstone.device.domain.QUnconfirm.unconfirm;
import static com.timcook.capstone.device.domain.QConfirm.confirm;

import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.timcook.capstone.device.dto.ConfirmResponse;
import com.timcook.capstone.device.dto.DisabledResponse;
import com.timcook.capstone.device.dto.QConfirmResponse;
import com.timcook.capstone.device.dto.QDisabledResponse;
import com.timcook.capstone.device.dto.QUnconfirmResponse;
import com.timcook.capstone.device.dto.UnconfirmResponse;
import com.timcook.capstone.file.repository.FileRepository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class DeviceRepositoryImpl implements CustomDeviceRepository{
	
	private final JPAQueryFactory jpaQueryFactory;
	private final FileRepository fileRepository;
	
	@Override
	public List<DisabledResponse> getDisabled(Long deviceId) {
		return jpaQueryFactory.select(new QDisabledResponse(disabled.createdTime))
						.from(disabled)
						.where(disabled.device.id.eq(deviceId))
						.fetch();
	}

	@Override
	public List<UnconfirmResponse> getUnconfirm(Long deviceId) {
		return jpaQueryFactory.select(new QUnconfirmResponse(
					unconfirm.file.id, unconfirm.file.title, unconfirm.createdTime))
				.from(unconfirm)
				.where(unconfirm.device.id.eq(deviceId))
				.fetch();
	}

	@Override
	public List<ConfirmResponse> getconfirm(Long deviceId) {
		return jpaQueryFactory.select(new QConfirmResponse
					(confirm.file.id, confirm.file.title, confirm.createdTime))
				.from(confirm)
				.where(confirm.device.id.eq(deviceId))
				.fetch();
	}

}
