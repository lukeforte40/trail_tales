package com.trailtales.trailtales.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.trailtales.trailtales.entities.User;
import com.trailtales.trailtales.repositories.user_repo;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class restController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private user_repo repo;
    
    @PostMapping("/signup")
    public void signup(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        repo.save(user);
    } 
}