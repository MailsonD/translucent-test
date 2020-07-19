package com.mdts.translucent.gamesshelf.controller;

import com.mdts.translucent.gamesshelf.model.Game;
import com.mdts.translucent.gamesshelf.service.GameService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("games")
public class GameController {

    private final GameService gameService;

    @ApiOperation("Get the list of the games, and filter it by title or completed if necessary")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Return the list of games"),
            @ApiResponse(code = 400, message = "Invalid value for the param completed")
    })
    @GetMapping
    public ResponseEntity<List<Game>> listGames(@RequestParam(required = false) String query, @RequestParam(required = false) Boolean completed) {
        return ResponseEntity.ok(this.gameService.listGames(query, completed));
    }

    @ApiOperation("Create a new register for a game")
    @ApiResponses({
            @ApiResponse(code = 201, message = "Return a empty body to represent success"),
            @ApiResponse(code = 400, message = "One of the passed values it's invalid"),
    })
    @PostMapping
    public ResponseEntity<Void> registerGame(@RequestBody Game game) {
        this.gameService.registerGame(game);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
