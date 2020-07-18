package com.mdts.translucent.gamesshelf.service;

import com.mdts.translucent.gamesshelf.model.Game;
import com.mdts.translucent.gamesshelf.repositories.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> listAll() {
        return this.gameRepository.findAll();
    }

    public void registerGame(Game game) {
        this.gameRepository.save(game);
    }

}
