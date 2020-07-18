package com.mdts.translucent.gamesshelf.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Game {

    @Id
    @GeneratedValue
    private Integer id;

    private String title;
    private String year;
    private String console;
    private Boolean completed;
    private LocalDate dateOfCompletion;
    private String personalNotes;

}
