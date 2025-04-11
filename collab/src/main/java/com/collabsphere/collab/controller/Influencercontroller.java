package com.collabsphere.collab.controller;

import com.collabsphere.collab.model.Influencer;
import com.collabsphere.collab.repo.Influencerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/register/influencer")
@CrossOrigin(origins = "*")
public class Influencercontroller {

    @Autowired
    private Influencerrepo influencerRepo;

    @PostMapping
    public Influencer createInfluencer(@RequestBody Influencer influencer) {
        return influencerRepo.save(influencer);
    }

    @GetMapping
    public List<Influencer> getAllInfluencers() {
        return influencerRepo.findAll();
    }
}