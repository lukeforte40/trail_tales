package com.trailtales.trailtales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.trailtales.trailtales.entities.User;
 
public interface user_repo extends JpaRepository<User, Long> {
 
}