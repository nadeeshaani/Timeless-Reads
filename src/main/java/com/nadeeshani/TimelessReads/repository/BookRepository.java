package com.nadeeshani.TimelessReads.repository;

import com.nadeeshani.TimelessReads.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

}
