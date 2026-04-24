package com.portfolio;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProfileController {

    @GetMapping("/profile")
    public Map<String, Object> getProfile() {
        Map<String, Object> profile = new HashMap<>();
        
        // --- STUDENTS: Personalize your portfolio here! ---
        profile.put("name", "Test User");
        profile.put("role", "Full Stack DevOps Engineer");
        profile.put("tagline", "Automating the future, one pipeline at a time.");
        profile.put("bio", "I am a passionate developer currently participating in the DevOps Workshop. I specialize in building scalable Java applications and modern React frontends, all while keeping the CI/CD pipeline green.");
        
        // Skills Categorized
        Map<String, String[]> skills = new HashMap<>();
        skills.put("Frontend", new String[]{"React", "JavaScript", "HTML5", "CSS3"});
        skills.put("Backend", new String[]{"Java", "Spring Boot", "REST APIs", "Maven"});
        skills.put("DevOps", new String[]{"Docker", "Jenkins", "Git", "Linux"});
        profile.put("skills", skills);

        // Projects Placeholder
        Object[] projects = {
            Map.of("title", "CI/CD Pipeline Hero", "desc", "Automated deployment of a full-stack app using Jenkins and Docker.", "tech", "Jenkins, Docker"),
            Map.of("title", "Portfolio Website", "desc", "A responsive React portfolio served by a Spring Boot backend.", "tech", "React, Java"),
            Map.of("title", "Selenium Test Suite", "desc", "Automated UI testing using Selenium and Firefox headless mode.", "tech", "Selenium, JUnit")
        };
        profile.put("projects", projects);

        // Socials
        profile.put("github", "https://github.com/yourusername");
        profile.put("linkedin", "https://linkedin.com/in/yourusername");
        profile.put("email", "student@example.com");
        
        return profile;
    }
}
