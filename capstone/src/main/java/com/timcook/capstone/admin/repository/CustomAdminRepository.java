package com.timcook.capstone.admin.repository;

import java.util.List;

import com.timcook.capstone.file.dto.FileResponse;

public interface CustomAdminRepository {
	List<FileResponse> findAllFiles(Long id);
}
