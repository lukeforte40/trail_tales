package com.trailtales.trailtales.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.trailtales.trailtales.entities.User;
 
public interface user_repo extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByPhone(String phone);
}