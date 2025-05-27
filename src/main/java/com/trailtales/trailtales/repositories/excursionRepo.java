package com.trailtales.trailtales.repositories;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trailtales.trailtales.entities.Excursion;

@Repository
public interface excursionRepo extends JpaRepository<Excursion, Integer> {
    Optional<List<Excursion>> findAllByTripId(Integer id);
}
