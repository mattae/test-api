package com.mattae.snl.plugin.elastic.repositories;

import com.mattae.snl.plugin.elastic.domain.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
    List<Tutorial> findByTitleLikeIgnoreCase(String title);
}
