package com.mdts.translucent.gamesshelf.controller;

import com.mdts.translucent.gamesshelf.model.Game;
import com.mdts.translucent.gamesshelf.service.GameService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("games")
public class GameController {

    private final GameService gameService;

    @GetMapping
    public ResponseEntity<List<Game>> listGames(@RequestParam(required = false) String query, @RequestParam(required = false) Boolean completed) {
        return ResponseEntity.ok(this.gameService.listGames(query, completed));
    }

    @PostMapping
    public ResponseEntity<Void> registerGame(@RequestBody Game game) {
        this.gameService.registerGame(game);
        return ResponseEntity.ok().build();
    }

}
