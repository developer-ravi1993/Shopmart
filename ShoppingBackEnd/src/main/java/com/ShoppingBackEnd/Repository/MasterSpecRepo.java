package com.ShoppingBackEnd.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ShoppingBackEnd.Model.MasterSpecification;

@Repository
public interface MasterSpecRepo extends JpaRepository<MasterSpecification, Long> {

}
