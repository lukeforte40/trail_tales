package com.trailtales.trailtales.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trailtales.trailtales.entities.Trip;

@Repository
public interface tripRepo  extends JpaRepository<Trip, Integer>{
    Optional<List<Trip>> findAllById(Integer id);
}
