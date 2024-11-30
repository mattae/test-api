package com.mattae.snl.plugin.elastic.domain;

import lombok.Data;
import org.springframework.data.domain.Persistable;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity(name = "ESTutorial")
@Data
@Table(name = "es_tutorial")
public class Tutorial implements Serializable, Persistable<Long> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;


    @Override
    public boolean isNew() {
        return id == null;
    }
}
