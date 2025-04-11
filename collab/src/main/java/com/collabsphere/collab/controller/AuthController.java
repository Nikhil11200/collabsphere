package com.collabsphere.collab.controller;

import com.collabsphere.collab.model.Brand;
import com.collabsphere.collab.model.Influencer;
import com.collabsphere.collab.model.LoginRequest;
import com.collabsphere.collab.repo.Brandrepo;
import com.collabsphere.collab.repo.Influencerrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private Brandrepo brandRepo;

    @Autowired
    private Influencerrepo influencerRepo;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // Check brand table
       Brand brand = brandRepo.findByBusinessEmail(loginRequest.getEmail());
        if (brand != null && brand.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("{\"message\": \"Login successful\", \"role\": \"brand\", \"id\": \"" + brand.getId() + "\"}");
        }

        // Check influencer table
        Influencer influencer = influencerRepo.findByEmail(loginRequest.getEmail());
        if (influencer != null && influencer.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok("{\"message\": \"Login successful\", \"role\": \"influencer\", \"id\": \"" + influencer.getId() + "\"}");
        }

        return ResponseEntity.status(401).body("{\"message\": \"Invalid email or password\"}");
    }
}
