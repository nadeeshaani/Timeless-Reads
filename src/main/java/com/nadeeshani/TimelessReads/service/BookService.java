package com.nadeeshani.TimelessReads.service;

import com.nadeeshani.TimelessReads.model.Book;

import java.util.List;

public interface BookService {
    public Book saveBook(Book book);

    public List<Book> getAllBooks();

}
