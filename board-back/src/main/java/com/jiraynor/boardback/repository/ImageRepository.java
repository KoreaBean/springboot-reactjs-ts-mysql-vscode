package com.jiraynor.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jiraynor.boardback.entity.ImageEntity;

@Repository
public interface ImageRepository  extends JpaRepository<ImageEntity,Integer>{

  
}
