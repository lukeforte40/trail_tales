package com.trailtales.trailtales.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trailtales.trailtales.entities.Excursion;
import com.trailtales.trailtales.entities.Trip;
import com.trailtales.trailtales.entities.User;
import com.trailtales.trailtales.payloads.requests.MakeTripRequest;
import com.trailtales.trailtales.payloads.requests.GetTripRequest;
import com.trailtales.trailtales.payloads.requests.MakeExcursionRequest;
import com.trailtales.trailtales.repositories.user_repo;
import com.trailtales.trailtales.repositories.excursionRepo;
import com.trailtales.trailtales.repositories.tripRepo;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/trip")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "false")
public class TripController {

    @Autowired
    private user_repo user_repo;

    @Autowired
    private tripRepo trip_repo;

    @Autowired
    private excursionRepo excursion_repo;

    @PostMapping("/startTrip")
    public ResponseEntity<?> startTrip(@Valid @RequestBody MakeTripRequest request) {
        User user = user_repo.findById(request.getCreatorId())
            .orElseThrow(() -> new RuntimeException("Error: User is not found."));
        Trip trip = new Trip(request.getTitle(), request.getDescription(), user , request.getStartDate(),request.getEndDate(), request.getTripImage());
        trip_repo.save(trip);
        return ResponseEntity.ok(trip);
    }

    @GetMapping("/trips")
    public ResponseEntity<?> getTrips() {
        List<Trip> trips = trip_repo.findAll();
        return ResponseEntity.ok(trips);
    }
    
    @GetMapping("/userTrip")
    public ResponseEntity<?> getMethodName(@Valid @RequestParam Integer Id) {
        List<Trip> trips = trip_repo.findAllByCreatorId(Id)
        .orElseThrow(() -> new RuntimeException("Error: Trips not found."));
        return ResponseEntity.ok(trips);
    }

    @PostMapping("/startExcursion")
    public ResponseEntity<?> startExcursion(@Valid @RequestBody MakeExcursionRequest request) {
        Trip trip = trip_repo.findById(request.getTrip_id())
        .orElseThrow(() -> new RuntimeException("Error: Trip is not found."));
        Excursion excursion = new Excursion(request.getTitle(),request.getNotes(),request.getPicture(), trip, request.getLongitude(), request.getLatitude(), request.getExcursionDateStart(), request.getExcursionDateEnd());
        excursion_repo.save(excursion);
        return ResponseEntity.ok(excursion);
    }
    

    @GetMapping("/excursions")
    public ResponseEntity<?> getExcursionsById(@RequestParam Integer tripId) {
        List<Excursion> excursions = excursion_repo.findAllByTripId(tripId)
        .orElseThrow(() -> new RuntimeException("Error: excursion not found."));
        return ResponseEntity.ok(excursions);
    }
}
