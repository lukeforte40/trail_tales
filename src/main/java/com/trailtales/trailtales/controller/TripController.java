package com.trailtales.trailtales.controller;

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
import com.trailtales.trailtales.repositories.user_repo;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/trip")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "false")
public class TripController {

    @Autowired
    private user_repo user_repo;

    @PostMapping("/startTrip")
    public ResponseEntity<?> startTrip(@Valid @RequestBody TripRequest request) {
        User user = user_repo.findById(request.getCreatorId())
            .orElseThrow(() -> new RuntimeException("Error: User is not found."));
        Trip trip = new Trip(request.getTitle(), request.getDescription(), user , request.getStartDate(),request.getEndDate());
        return ResponseEntity.ok(trip);
    }

}
