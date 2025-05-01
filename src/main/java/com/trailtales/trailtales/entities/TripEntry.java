package com.trailtales.trailtales.entities;

import java.time.LocalDate;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor
public class TripEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
  
    private String title;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @CreatedDate
    @Column(name = "creationDate", updatable = false)
    private LocalDate creationDate;

    private String picture;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "trip_id", referencedColumnName = "id")
    private Trip trip;

    private double longitude;

    private double latitude;

    private LocalDate adventureDate;

    public TripEntry(String title, String notes, String picture, Trip trip, double longitude, double latitude, LocalDate adventureDate) {
        this.title = title;
        this.notes = notes;
        this.picture = picture;
        this.trip = trip;
        this.longitude = longitude;
        this.latitude = latitude;
        this.adventureDate = adventureDate;
    }
  
}