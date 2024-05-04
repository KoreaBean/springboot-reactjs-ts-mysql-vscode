package com.jiraynor.boardback.service;

import org.springframework.http.ResponseEntity;

import com.jiraynor.boardback.dto.request.auth.SignUpRequestDto;
import com.jiraynor.boardback.dto.response.auth.SignUpResponseDto;

public interface AuthService {
  ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
}
