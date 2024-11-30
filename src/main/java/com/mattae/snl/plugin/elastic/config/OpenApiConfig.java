package com.mattae.snl.plugin.elastic.config;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    @Bean
    public GroupedOpenApi publicOpenApi() {
        return GroupedOpenApi.builder()
                .group("Elasticsearch base Plugin")
                .displayName("Elasticsearch base Plugin REST API")
                .pathsToMatch("/api/es/**")
                .build();
    }
}
