# al_ddeul_sin_bang
스마트 마을 방송 시스템



# API 

### 로그인 관련

<details>
<summary>로그인 관련 API 보기</summary>
<div markdown="1">
  
  #### 적용 방법
  
  `com.timcook.capstone.common.config.SecurityConfig`
  ![image](https://user-images.githubusercontent.com/80764368/167449910-340e7ea8-9e56-4591-b305-053ba1cd10a3.png)
  - 1. 51~65 주석 해제
  - 2. 66~68 코드 주석 처리
  
  ```
  웹 관리자 계정
  email: 관리자
  password: 1234
  ```
  
  |METHOD|URI|설명|REQUEST DATA|비고|
  |--|--|--|--|--|
  |POST|api/login|로그인|email, password|form-data|
  |GET|api/logout||||
  
</div>
</details>

### FCM 토큰 관련

<details>
<summary>토큰 등록 API 보기</summary>
<div markdown="1">

  |METHOD|URI|REQUEST DATA|비고|
  |--|--|--|--|
  |POST|/notification/token|token|form-data|
  #### 설명 : 모바일 APP에 로그인 한 유저의 단말기 토큰을 등록합니다.
  
  |METHOD|URI|REQUEST DATA|비고|
  |--|--|--|--|
  |POST|/test|token|form-data|
  #### 설명 : 전달되는 토큰 값으로 지진감지 메세지와 가스 누출 메세지를 푸쉬 알림합니다
  
</div>
</details>

### 엔티티 관련 

<details>
<summary>엔티티 API 보기</summary>
<div markdown="1">

  #### uri prefix : /api 

  ### USER Table
  
  <details>
  <summary>유저 보기</summary>
  <div markdown="1">
  
  |METHOD|URI|설명|REQUEST DATA|비고|
  |--|--|--|--|--|
  |GET|/users|모든 유저 조회|||
  |POST|/users|유저 생성|email|form-data|
  |GET|/users/{email}|특정 유저 조회|||
  |GET|/users/phoneNumber|유저 연락처로 조회|phoneNumber|||
  |PUT|/users/{id}|유저 정보 기입|username, phoneNumber||
  |DELETE|/users/{id}|유저 삭제|||
  |PUT|/users/admins/{id}|이장으로 변경|||
  |GET|/users/{id}/devices|유저의 단말기 정보 조회|||
  |GET|/users/{id}/villages|유저의 마을 정보 조회|||
  |POST|/users/{id}/villages|유저 마을 구독|villageId|form-data|
  |GET|/users/{id}/ward|유저의 피보호자 조회||||
  |POST|/users/{id}/guardian|유저의 보호자 등록|guardianId|form-data|
  |GET|/users/search|유저 이름, 마을 기준으로 검색|username, villageId|||
  |POST|/users/device-owner|이장의 단말기 사용자 등록용|username, phoneNumber, address|||
    
  ⚠ `/users` 제외 모든 URI는 `ROLE_USER` or `ROLE_ADMIN` 권한(로그인)이 필요합니다 ⚠

  </div>
  </details>

  ### ADMIN Table
  
  <details>
  <summary>어드민 보기</summary>
  <div markdown="1">
  
  |METHOD|URI|설명|REQUEST DATA|비고|
  |--|--|--|--|--|
  |GET|/admins|모든 이장 조회|||
  |GET|/admins/{id}|특정 이장 조회|||
  |DELETE|/admins/{id}|이장 삭제|||
  |PUT|/admins/users/{id}|회원으로 변경|||
  |POST|/admins/{id}/files|방송 등록|villageId, title, contents||
  |GET|/admins/{id}/files|등록한 방송 조회|||
  |GET|/admins/{id}/villages|관리중인 마을 조회|||
    
  ⚠ 모든 URI는 `ROLE_ADMIN` 권한(로그인)이 필요합니다 ⚠
    
  </div>
  </details>

  ### VILLAGE Table

  <details>
  <summary>마을 보기</summary>
  <div markdown="1">

  |METHOD|URI|설명|REQUEST DATA|비고|
  |--|--|--|--|--|
  |GET|/villages|모든 마을 조회|||
  |POST|/villages|마을 생성|nickname, state, city, town, longitude, latitude||
  |GET|/villages/{id}|특정 마을 조회|||
  |DELETE|/villages/{id}|특정 마을 삭제|||
  |GET|/villages/{id}/devices|마을 내 단말기 조회|||
  |POST|/villages/{id}/admins|마을 이장 등록|adminId|form-data|
  |PUT|/villages/{id}/admins|마을 이장 변경|||
  |DELETE|/villages/{id}/admins|마을 이장 삭제|||
  |GET|/villages/{id}/files|마을 방송목록 조회|||
  |GET|/villages/{id}/users|마을 구독중인 회원목록 조회|||
  |GET|/villages/{id}/except/guardians|마을 보호자 제외 회원목록 조회|||
  |GET|/villages/search|마을 검색|words|nickname or address로 검색|

  ⚠ 모든 URI는 `ROLE_ADMIN` 권한(로그인)이 필요합니다 ⚠
    
  </div>
  </details>
    
  ### DEVICE Table
  
  <details>
  <summary>단말기 보기</summary>
  <div markdown="1">
  
  |METHOD|URI|설명|REQUEST DATA|비고|
  |--|--|--|--|--|
  |GET|/devices|모든 단말기 조회|||
  |POST|/devices|단말기 생성, 단말기 ID 반환|||
  |DELETE|/devices/{id}|특정 단말기 삭제|||
  |GET|/devices/{id}|특정 단말기 정보 조회|||
  |DELETE|/devices/{id}|특정 단말기 삭제|||
  |POST|/devices/{id}/users|단말기 사용 유저 등록|userId|form-data|
  |POST|/devices/{id}/villages|단말기 사용 마을 등록|villageId|form-data|
  |GET|/devices/{deviceId}/disabled|특정 단말기의 연결장애 조회|||
  |GET|/devices/{deviceId}/unconfirm|특정 단말기의 방송 미확인 조회|||
  |GET|/devices/{deviceId}/confirm|특정 단말기의 미확인 방송 확인 기록 조회|||

  ⚠ 모든 URI는 `ROLE_ADMIN` 권한(로그인)이 필요합니다 ⚠
    
  </div>
  </details>
   
   ### MESSAGE Table
  
  <details>
  <summary>상태 데이터 보기</summary>
  <div markdown="1">
  
  |METHOD|URI|설명|REQUEST DATA|비고|
  |--|--|--|--|--|
  |GET|/messages/detect/{userId}|user의 상태 데이터를 조회|||
  |GET|/messages/urgent/{userId}|user의 긴급 호출  조회|||
    
  ⚠ `/users` 제외 모든 URI는 `ROLE_USER` or `ROLE_ADMIN` 권한(로그인)이 필요합니다 ⚠

  </div>
  </details>
</div>
</details>
 

# 메세지 포맷

### DEVICE<->SERVER

<details>
<summary>펼치기/접기</summary>
<div markdown="1">
  
  ### [SERVER -> DEVICE]
  
  #### 방송 파일
  ```
  송신자/제목/내용/FILE_ID
  -> 송신자 : MASTER -> 이장
  ```
  #### 세팅 응답 메세지
  ```
  등록 실패 : LOGIN/-1
  등록 성공 : LOGIN/DEVICE_ID/USERNAME/VILLAGEID
  ```
  
  ### [DEVICE -> SERVER]
  
  #### 세팅 요청 메세지
  ```
  SETTING/DEVICE_ID/PHONE_NUMBER
  ```
  
  #### 긴급 호출
  ```
  URGENT/DEVICE_ID
  ```
  #### 감지 데이터  
  ```
  DETECT/DEVICE_ID/온도/습도/지진 감지/가스 누출 여부/이상행동 감지 여부
  ```
  #### 방송 응답 메세지
  ```
  REPLY/DEVICE_ID/방송 제목/응답 종류/FILE_ID
  -> 응답 종류 : 0 -> 방송 정상 수신
  -> 응답 종류 : 1 -> 방송 확인
  ```
  
</div>
</details>
  
