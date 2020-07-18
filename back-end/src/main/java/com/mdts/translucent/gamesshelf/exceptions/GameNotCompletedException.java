package com.mdts.translucent.gamesshelf.exceptions;

public class GameNotCompletedException extends RuntimeException {

    public GameNotCompletedException() {
        super("The game is not completed, so it's not allowed a date of completion");
    }

    public GameNotCompletedException(String message) {
        super(message);
    }
}
