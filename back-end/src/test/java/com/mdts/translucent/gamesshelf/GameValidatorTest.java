package com.mdts.translucent.gamesshelf;

import com.mdts.translucent.gamesshelf.exceptions.GameNotCompletedException;
import com.mdts.translucent.gamesshelf.exceptions.InvalidDateException;
import com.mdts.translucent.gamesshelf.model.Game;
import com.mdts.translucent.gamesshelf.service.GameService;
import com.mdts.translucent.gamesshelf.validators.GameValidator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class GameValidatorTest {

    private GameValidator gameValidator;

    @BeforeEach
    void initUseCase() {
        this.gameValidator = new GameValidator();
    }

    @Test
    void gameValidatedHasCompletionDateOnFuture() {
        Game game = new Game(
                1,
                "God of war",
                "2018",
                "PS4",
                true,
                 LocalDate.of(2021, 5, 11),
                "This game is awesome"
        );
        assertThrows(InvalidDateException.class, () -> {
            gameValidator.validate(game);
        });
    }

    @Test
    void gameValidatedItsCompletedWithNoDate() {
        Game game = new Game(
                1,
                "God of war",
                "2018",
                "PS4",
                true,
                null,
                "This game is awesome"
        );

        assertThrows(InvalidDateException.class, () -> {
            gameValidator.validate(game);
        });
    }

    @Test
    void gameValidatedItsNotCompletedWithCompletionDate() {
        Game game = new Game(
                1,
                "God of war",
                "2018",
                "PS4",
                false,
                 LocalDate.of(2019, 5, 11),
                "This game is awesome"
        );

        assertThrows(GameNotCompletedException.class, () -> {
            gameValidator.validate(game);
        });
    }

    @Test
    void gameValidatedSuccess() {
        Game game = new Game(
                1,
                "God of war",
                "2018",
                "PS4",
                true,
                LocalDate.of(2019, 5, 11),
                "This game is awesome"
        );
        assertDoesNotThrow(() -> gameValidator.validate(game));
    }

    @Test
    void gameValidatedWithNoTitle() {
        Game game = new Game(
                1,
                null,
                "2018",
                "PS4",
                true,
                LocalDate.of(2019, 5, 11),
                "This game is awesome"
        );

        assertDoesNotThrow(() -> gameValidator.validate(game));
    }


    @Test
    void gameValidatedWithNoYear() {
        Game game = new Game(
                1,
                "God of war",
                null,
                "PS4",
                true,
                LocalDate.of(2019, 5, 11),
                "This game is awesome"
        );

        assertDoesNotThrow(() -> gameValidator.validate(game));

    }

}
