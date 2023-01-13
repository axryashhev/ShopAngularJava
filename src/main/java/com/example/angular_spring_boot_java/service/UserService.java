package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.User;
import com.example.angular_spring_boot_java.repo.UserRepo;
// import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
// import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
// import reactor.core.publisher.Mono;
// implements ReactiveUserDetailsService
@Service
public class UserService extends RepoService<UserRepo, User>  {
    public UserService(UserRepo repo) {
        super(repo);
    }

//    @Override
//    public Mono<UserDetails> findByUsername(String username) {
//        return repo.findByUsername(username).cast(UserDetails.class);
//    }
}
