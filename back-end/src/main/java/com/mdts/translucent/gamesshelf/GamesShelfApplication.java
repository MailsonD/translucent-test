package com.mdts.translucent.gamesshelf;

import com.mdts.translucent.gamesshelf.validators.GameValidator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
public class GamesShelfApplication {

    public static void main(String[] args) {
        SpringApplication.run(GamesShelfApplication.class, args);
    }

    @Bean
    public GameValidator getGameValidator() {
        return new GameValidator();
    }
}
