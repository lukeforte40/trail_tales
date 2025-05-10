package com.trailtales.trailtales.controller;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.security.core.Authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trailtales.trailtales.entities.Trip;
import com.trailtales.trailtales.entities.User;
import com.trailtales.trailtales.payloads.requests.TripRequest;
import com.trailtales.trailtales.repositories.tripRepo;
import com.trailtales.trailtales.repositories.user_repo;
import com.trailtales.trailtales.services.UserDetailsImpl;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/trip")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "false")
public class TripController {

    @Autowired
    private tripRepo repo;

    //@PostMapping("/startTrip")
    //public ResponseEntity<?> startTrip(@Valid @RequestBody TripRequest request) {
        // Trip trip = new Trip(request.getTitle(), request.getCreator(), request.getStartDate(),request.getEndDate());

    //}

}
