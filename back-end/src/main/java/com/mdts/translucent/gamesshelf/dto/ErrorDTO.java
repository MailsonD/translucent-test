package com.mdts.translucent.gamesshelf.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorDTO {

    private String message;
    private Integer status;

}
