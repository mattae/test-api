package com.mattae.snl.plugin.elastic.services;

import com.mattae.snl.plugin.elastic.domain.Tutorial;
import com.mattae.snl.plugin.elastic.repositories.TutorialRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TutorialService {

    private final TutorialRepository tutorialRepository;

    public List<Tutorial> getAllTutorials() {
        return tutorialRepository.findAll();
    }

    public Optional<Tutorial> getTutorial(Long id) {
        return tutorialRepository.findById(id);
    }

    public Tutorial saveTutorial(Tutorial tutorial) {
        return tutorialRepository.save(tutorial);
    }

    public void deleteTutorial(Long id) {
        tutorialRepository.findById(id).ifPresent(tutorialRepository::delete);
    }

    public List<Tutorial> findByTitle(String title) {
        return tutorialRepository.findByTitleLikeIgnoreCase("%" + title + "%");
    }

    public void deleteAll() {
        tutorialRepository.deleteAll();
    }
}
