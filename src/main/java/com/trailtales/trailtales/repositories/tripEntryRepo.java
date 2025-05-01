package com.trailtales.trailtales.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trailtales.trailtales.entities.TripEntry;

@Repository
public interface tripEntryRepo extends JpaRepository<TripEntry, Integer> {
    
}
