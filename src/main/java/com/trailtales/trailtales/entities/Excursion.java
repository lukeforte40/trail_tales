package com.trailtales.trailtales.entities;

import java.time.LocalDate;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor
public class Excursion {
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

    private LocalDate excursionDateStart;

    private LocalDate excursionDateEnd;

    public Excursion(String title, String notes, String picture, Trip trip, double longitude, double latitude, LocalDate excursionDateStart, LocalDate excursionDateEnd) {
        this.title = title;
        this.notes = notes;
        this.picture = picture;
        this.trip = trip;
        this.longitude = longitude;
        this.latitude = latitude;
        this.excursionDateStart = excursionDateStart;
        this.excursionDateEnd = excursionDateEnd;
        this.creationDate = LocalDate.now();
    }
  
}