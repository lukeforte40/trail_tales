package com.trailtales.trailtales.services;

import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.trailtales.trailtales.entities.Role;
import com.trailtales.trailtales.entities.User;
import com.trailtales.trailtales.repositories.RoleRepository;
import com.trailtales.trailtales.repositories.user_repo;
import com.trailtales.trailtales.entities.enums.*;

@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Bean
  CommandLineRunner initDatabase(user_repo repository, RoleRepository role_repo ) {

    return args -> {
      Role admin = new Role(ERole.ROLE_ADMIN);
      log.info("Preloading" + role_repo.save(new Role(ERole.ROLE_USER)));
      log.info("Preloading" + role_repo.save(admin));
      User userInf = new User("admin@gmail.com", "1111111111", "default.png", passwordEncoder.encode("password"));
      Set<Role> tempSet = new HashSet<Role>();
      tempSet.add(admin);
      userInf.setRoles(tempSet);
      log.info("Preloading " + repository.save(userInf));
    };
  }
}