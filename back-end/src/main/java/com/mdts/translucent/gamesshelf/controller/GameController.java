package com.mdts.translucent.gamesshelf.controller;

import com.mdts.translucent.gamesshelf.model.Game;
import com.mdts.translucent.gamesshelf.service.GameService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("games")
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Game>> listGames() {
        return ResponseEntity.ok(this.gameService.listAll());
    }

    public ResponseEntity registerGame(@RequestBody Game game) {
        this.gameService.registerGame(game);
        return ResponseEntity.ok().build();
    }

}
