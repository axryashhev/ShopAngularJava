package com.example.angular_spring_boot_java.controller;

import com.example.angular_spring_boot_java.model.User;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.util.List;

@RestController
@RequestMapping("/api/save_user")
public class SaveUserController {
    private int index = 0;
    private List<User> user = null;


    @ResponseBody
    @GetMapping()
    public List<User> method4() {
        return this.user;
    }

}
