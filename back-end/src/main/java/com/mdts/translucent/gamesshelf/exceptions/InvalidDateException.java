package com.mdts.translucent.gamesshelf.exceptions;

public class InvalidDateException extends RuntimeException {

    public InvalidDateException() {
        super("The informed Date is invalid!");
    }

    public InvalidDateException(String message) {
        super(message);
    }
}
