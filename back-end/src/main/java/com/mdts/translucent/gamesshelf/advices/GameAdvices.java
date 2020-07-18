package com.mdts.translucent.gamesshelf.advices;

import com.mdts.translucent.gamesshelf.dto.ErrorDTO;
import com.mdts.translucent.gamesshelf.exceptions.GameNotCompletedException;
import com.mdts.translucent.gamesshelf.exceptions.InvalidDateException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class GameAdvices {

    @ResponseBody
    @ExceptionHandler({ InvalidDateException.class, GameNotCompletedException.class })
    ResponseEntity<ErrorDTO> employeeNotFoundHandler(InvalidDateException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorDTO(ex.getMessage(),400));
    }
}
