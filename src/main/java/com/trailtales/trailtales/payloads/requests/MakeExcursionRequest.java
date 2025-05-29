package com.trailtales.trailtales.payloads.requests;

import java.time.LocalDate;

import lombok.*;

@Getter @Setter
public class MakeExcursionRequest {

    private String title;

    private String notes;

    private String picture;

    private Integer trip_id;

    private double longitude;

    private double latitude;

    private LocalDate ExcursionDateStart;

    private LocalDate ExcursionDateEnd;
}
