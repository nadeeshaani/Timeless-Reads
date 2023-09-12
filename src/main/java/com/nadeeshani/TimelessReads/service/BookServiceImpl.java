package com.nadeeshani.TimelessReads.service;

import com.nadeeshani.TimelessReads.model.Book;
import com.nadeeshani.TimelessReads.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService{

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }


}
