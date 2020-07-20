package com.mdts.translucent.gamesshelf.service;

import com.mdts.translucent.gamesshelf.exceptions.GameNotCompletedException;
import com.mdts.translucent.gamesshelf.exceptions.InvalidDateException;
import com.mdts.translucent.gamesshelf.model.Game;
import com.mdts.translucent.gamesshelf.repositories.GameRepository;
import com.mdts.translucent.gamesshelf.validators.GameValidator;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class GameService {

    private final GameRepository gameRepository;

    private final GameValidator gameValidator;

    public void registerGame(Game game) {
        gameValidator.validate(game);
        this.gameRepository.save(game);
    }

    public List<Game> listGames(String query, Boolean completed) {
        if (query != null && !query.isEmpty()) {
            if (completed != null && completed) {
               return this.gameRepository.findAllCompletedGamesAndFilterByTitle(query.toUpperCase());
            }
            return this.gameRepository.findAllGamesFilteredByTitle(query.toUpperCase());
        }
        return this.gameRepository.findAllByOrderByDateOfCompletionDesc();
    }

}
