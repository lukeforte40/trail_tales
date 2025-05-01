package com.trailtales.trailtales.payloads.requests;
import java.time.LocalDate;

import com.trailtales.trailtales.entities.User;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter @Setter
public class TripRequest {
    @NotBlank
    private String title;

    private String description;
    
    @NotBlank
    private User creator;

    @NotBlank
    private LocalDate endDate;

    @NotBlank
    private LocalDate startDate;
}