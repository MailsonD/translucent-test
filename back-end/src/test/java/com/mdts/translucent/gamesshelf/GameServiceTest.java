package com.mdts.translucent.gamesshelf;

import com.mdts.translucent.gamesshelf.exceptions.InvalidDateException;
import com.mdts.translucent.gamesshelf.model.Game;
import com.mdts.translucent.gamesshelf.repositories.GameRepository;
import com.mdts.translucent.gamesshelf.service.GameService;
import com.mdts.translucent.gamesshelf.validators.GameValidator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.stubbing.OngoingStubbing;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.AdditionalAnswers.returnsFirstArg;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class GameServiceTest {

    private final GameRepository gameRepository = Mockito.mock(GameRepository.class);

    private final GameValidator gameValidator = Mockito.mock(GameValidator.class);

    private GameService gameService;

    @BeforeEach
    void initUseCase() {
        this.gameService = new GameService(gameRepository, gameValidator);
    }

    @Test
    void saveGameSuccess() {
        Game game = new Game(
                1,
                "God of war",
                "2018",
                "PS4",
                true,
                LocalDate.of(2019, 5, 11),
                "This game is awesome"
        );

        when(gameRepository.save(any(Game.class))).then(returnsFirstArg());
        doNothing().when(gameValidator).validate(any(Game.class));

        assertDoesNotThrow(() -> {
            this.gameService.registerGame(game);
        });
    }

    @Test
    void saveGameWithFutureCompletionDate() {
        Game game = new Game(
                1,
                "God of war",
                "2018",
                "PS4",
                true,
                LocalDate.of(2021, 5, 11),
                "This game is awesome"
        );

        when(gameRepository.save(any(Game.class))).then(returnsFirstArg());
        doThrow(new InvalidDateException()).when(gameValidator).validate(any(Game.class));

        assertThrows(InvalidDateException.class, () -> {
            this.gameService.registerGame(game);
        });
    }

    @Test
    void saveGameCompletedWithNoDate() {
        Game game = new Game(
                1,
                "God of war",
                "2018",
                "PS4",
                true,
                null,
                "This game is awesome"
        );

        when(gameRepository.save(any(Game.class))).then(returnsFirstArg());
        doThrow(new InvalidDateException()).when(gameValidator).validate(any(Game.class));

        assertThrows(InvalidDateException.class, () -> {
            this.gameService.registerGame(game);
        });
    }



}
