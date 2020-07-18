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

    public List<Game> listAll() {
        return this.gameRepository.findAllByOrderByDateOfCompletionDesc();
    }

    public void registerGame(Game game) {
        GameValidator.validade(game);
        this.gameRepository.save(game);
    }

}
