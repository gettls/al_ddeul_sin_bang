package com.timcook.capstone.device.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDevice is a Querydsl query type for Device
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDevice extends EntityPathBase<Device> {

    private static final long serialVersionUID = -1268042680L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDevice device = new QDevice("device");

    public final ListPath<com.timcook.capstone.message.domain.DetectMessage, com.timcook.capstone.message.domain.QDetectMessage> detectMessages = this.<com.timcook.capstone.message.domain.DetectMessage, com.timcook.capstone.message.domain.QDetectMessage>createList("detectMessages", com.timcook.capstone.message.domain.DetectMessage.class, com.timcook.capstone.message.domain.QDetectMessage.class, PathInits.DIRECT2);

    public final ListPath<Disabled, QDisabled> disabledInfos = this.<Disabled, QDisabled>createList("disabledInfos", Disabled.class, QDisabled.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final EnumPath<Status> status = createEnum("status", Status.class);

    public final ListPath<Unconfirm, QUnconfirm> unconfirmInfos = this.<Unconfirm, QUnconfirm>createList("unconfirmInfos", Unconfirm.class, QUnconfirm.class, PathInits.DIRECT2);

    public final ListPath<com.timcook.capstone.message.domain.UrgentMessage, com.timcook.capstone.message.domain.QUrgentMessage> urgentMessages = this.<com.timcook.capstone.message.domain.UrgentMessage, com.timcook.capstone.message.domain.QUrgentMessage>createList("urgentMessages", com.timcook.capstone.message.domain.UrgentMessage.class, com.timcook.capstone.message.domain.QUrgentMessage.class, PathInits.DIRECT2);

    public final com.timcook.capstone.user.domain.QUser user;

    public final com.timcook.capstone.village.domain.QVillage village;

    public QDevice(String variable) {
        this(Device.class, forVariable(variable), INITS);
    }

    public QDevice(Path<? extends Device> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDevice(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDevice(PathMetadata metadata, PathInits inits) {
        this(Device.class, metadata, inits);
    }

    public QDevice(Class<? extends Device> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new com.timcook.capstone.user.domain.QUser(forProperty("user"), inits.get("user")) : null;
        this.village = inits.isInitialized("village") ? new com.timcook.capstone.village.domain.QVillage(forProperty("village"), inits.get("village")) : null;
    }

}

