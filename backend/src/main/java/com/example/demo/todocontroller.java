package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173")

public class todocontroller {
    @Autowired
    private todoService todoService;

    @GetMapping
    public List<todo> getAllTools() {
        return todoService.findAll();
    }

    @PostMapping
    public todo createTodo(@RequestBody todo todo)  {
        return todoService.save(todo);
    }

    @DeleteMapping("/{id}")
    public void deletetodo(@PathVariable long id) {
        todoService.deleteById(id);
    }
    
    

    
}
