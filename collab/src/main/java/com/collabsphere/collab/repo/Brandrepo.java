package com.collabsphere.collab.repo;

import com.collabsphere.collab.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository

public interface Brandrepo extends JpaRepository<Brand, Long > {
    Optional<Brand> findByBusinessEmail(String businessEmail);

    boolean existsByBusinessEmail(String email);
}
