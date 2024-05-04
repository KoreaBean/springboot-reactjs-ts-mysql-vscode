package com.jiraynor.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jiraynor.boardback.entity.FavoriteEntity;
import com.jiraynor.boardback.entity.primary.FavoritePk;

@Repository
public interface FavoriteRepository extends JpaRepository<FavoriteEntity,FavoritePk>{

    
}
