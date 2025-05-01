package com.trailtales.trailtales.entities;

import java.time.LocalDate;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String title;

    private String description;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User creator;

    @CreatedDate
    @Column(name = "creationDate", updatable = false)
    private LocalDate creationDate;

    private LocalDate endDate;

    private LocalDate startDate;

    public Trip(String title, String description, User creator, LocalDate startDate, LocalDate endDate) {
        this.title = title;
        this.description = description;
        this.creator = creator;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
