package com.mdts.translucent.gamesshelf.repositories;

import com.mdts.translucent.gamesshelf.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface GameRepository  extends JpaRepository<Game, Integer> {

    List<Game> findAllByOrderByDateOfCompletionDesc();

    @Query("SELECT g FROM Game g WHERE UPPER(g.title) LIKE %:filter% ORDER BY g.dateOfCompletion DESC")
    List<Game> findAllGamesFilteredByTitle(String filter);

    @Query("SELECT g FROM Game g WHERE UPPER(g.title) LIKE %:filter% AND g.completed = true ORDER BY g.dateOfCompletion DESC")
    List<Game> findAllCompletedGamesAndFilterByTitle(String filter);

}
