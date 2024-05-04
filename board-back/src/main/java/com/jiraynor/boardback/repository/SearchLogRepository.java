package com.jiraynor.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jiraynor.boardback.entity.SearchEntity;

@Repository
public interface SearchLogRepository extends JpaRepository<SearchEntity,Integer>{
  
}
