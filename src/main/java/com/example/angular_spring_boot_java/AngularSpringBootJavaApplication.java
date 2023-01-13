package com.example.angular_spring_boot_java;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication
//@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class AngularSpringBootJavaApplication {

    public static void main(String[] args) {
        SpringApplication.run(AngularSpringBootJavaApplication.class, args);
    }

}
