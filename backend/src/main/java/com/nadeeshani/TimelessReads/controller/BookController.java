package com.nadeeshani.TimelessReads.controller;

import com.nadeeshani.TimelessReads.model.Book;
import com.nadeeshani.TimelessReads.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
@CrossOrigin
public class BookController {
    @Autowired
    private BookService bookService;

    @PostMapping("/add")
    public String add(@RequestBody Book book){
        bookService.saveBook(book);
        return "New book is added";
    }

    @GetMapping("/getAll")
    public List<Book> getAll(){
        return bookService.getAllBooks();
    }




}
