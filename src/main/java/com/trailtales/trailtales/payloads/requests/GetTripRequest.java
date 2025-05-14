package com.trailtales.trailtales.payloads.requests;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter @Setter
public class GetTripRequest {
    @NotBlank
    private Integer id;
}
