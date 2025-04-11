package com.collabsphere.collab.service;

import com.collabsphere.collab.model.Brand;
import com.collabsphere.collab.repo.Brandrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class Brandservice {

    @Autowired
    public Brandrepo brandrepo;

    public void registerbrand(Brand brand){
        brandrepo.save(brand);
    }


    public boolean existsByEmail(String email) {
        return brandrepo.existsByBusinessEmail(email);
    }

    public ArrayList<Brand> getbrands(){
        ArrayList<Brand> br = (ArrayList<Brand>) brandrepo.findAll();
        return br;
        }
    }


