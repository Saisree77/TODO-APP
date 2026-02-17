package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class todoService {
    @Autowired
    private  todoRepository todoRepository;

    // public todoService(todoRepository todoRepository) {
    //     this.todoRepository = todoRepository;

    // }

    public List<todo> findAll() {
        return todoRepository.findAll();

    }
    public todo save(todo todo) {
        return todoRepository.save(todo);

    }

    public void deleteById(long id) {
        todoRepository.deleteById(id);
    }
    
}
