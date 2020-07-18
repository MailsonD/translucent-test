package com.mdts.translucent.gamesshelf.validators;

import com.mdts.translucent.gamesshelf.exceptions.GameNotCompletedException;
import com.mdts.translucent.gamesshelf.exceptions.InvalidDateException;
import com.mdts.translucent.gamesshelf.model.Game;

import java.time.LocalDate;

public class GameValidator {

    public static void validade(Game game) {
        if (game.getDateOfCompletion() != null && game.getDateOfCompletion().isAfter(LocalDate.now())) {
            throw new InvalidDateException();
        } else if (game.getCompleted() && game.getDateOfCompletion() == null) {
            throw new InvalidDateException();
        } else if (!game.getCompleted() && game.getDateOfCompletion() != null) {
            throw new GameNotCompletedException();
        }
    }

}
