package com.collabsphere.collab.controller;



import com.collabsphere.collab.model.Brand;
import com.collabsphere.collab.service.Brandservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;

@RestController
@CrossOrigin

public class Brandcontroller {

    @Autowired
    public Brandservice brandservice;

    @PostMapping("/register/brand")

    public ResponseEntity<String> registerBrand(@RequestBody Brand brand) {
        if (brandservice.existsByEmail(brand.getBusinessEmail())) {
            return ResponseEntity.badRequest()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body("{\"message\": \"Email already in use.\"}");
        }

        brandservice.registerbrand(brand);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body("{\"message\": \"Brand registered successfully.\"}");
    }

    @GetMapping("/brand")

    public ArrayList<Brand> getbrands(){
       return brandservice.getbrands();
    }



}

