package com.trailtales.trailtales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trailtales.trailtales.entities.Trip;

@Repository
public interface tripRepo  extends JpaRepository<Trip, Integer>{
    
}
