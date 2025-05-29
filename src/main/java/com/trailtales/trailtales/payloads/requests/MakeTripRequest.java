package com.trailtales.trailtales.payloads.requests;
import java.time.LocalDate;

import lombok.*;

@Getter @Setter
public class MakeTripRequest {
    private String title;
    
    private Integer creatorId;

    private LocalDate startDate;

    private LocalDate endDate;

    private String tripImage;
}