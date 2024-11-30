package com.mattae.snl.plugin.elastic.config;

import com.mattae.snl.plugin.elastic.repositories.ElasticsearchRepositories;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackageClasses = {ElasticsearchRepositories.class})
public class DomainConfiguration {
}
