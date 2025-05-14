package com.trailtales.trailtales.payloads.requests;
import java.time.LocalDate;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter @Setter
public class MakeTripRequest {
    @NotBlank
    private String title;

    private String description;
    
    @NotBlank
    private Integer creatorId;

    @NotBlank
    private LocalDate endDate;

    @NotBlank
    private LocalDate startDate;
}