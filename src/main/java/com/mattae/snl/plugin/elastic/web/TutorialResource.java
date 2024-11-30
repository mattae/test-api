package com.mattae.snl.plugin.elastic.web;

import com.mattae.snl.plugin.elastic.domain.Tutorial;
import com.mattae.snl.plugin.elastic.services.TutorialService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/es/tutorials")
@RequiredArgsConstructor
public class TutorialResource {
    private final TutorialService tutorialService;

    @GetMapping("/{id}")
    public ResponseEntity<Tutorial> getTutorial(@PathVariable Long id) {
        return ResponseEntity.of(tutorialService.getTutorial(id));
    }

    @GetMapping
    public List<Tutorial> getAllTutorials() {
        return tutorialService.getAllTutorials();
    }

    @PostMapping
    public Tutorial saveTutorial(@RequestBody Tutorial tutorial) {
        return tutorialService.saveTutorial(tutorial);
    }

    @PutMapping
    public Tutorial updateTutorial(@RequestBody Tutorial tutorial) {
        return tutorialService.saveTutorial(tutorial);
    }

    @DeleteMapping("/{id}")
    public void deleteTutorial(@PathVariable Long id) {
        tutorialService.deleteTutorial(id);
    }

    @DeleteMapping
    public void deleteAll() {
        tutorialService.deleteAll();
    }

    @GetMapping("/title")
    public List<Tutorial> findByTitle(@RequestParam String title) {
        return tutorialService.findByTitle(title);
    }
}
