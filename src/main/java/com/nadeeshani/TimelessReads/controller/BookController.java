package com.nadeeshani.TimelessReads.controller;

import com.nadeeshani.TimelessReads.model.Book;
import com.nadeeshani.TimelessReads.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    private BookService bookService;

    @PostMapping("/add")
    public String add(@RequestBody Book book){
        BookService.saveBook(book);
        return "New book is added";
    }




}
