package com.jiraynor.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jiraynor.boardback.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,String> {

  boolean existsByEmail(String Email);
  boolean existsByNickname(String Nickname);
  boolean existsByTelNumber(String TelNumber);

} 
