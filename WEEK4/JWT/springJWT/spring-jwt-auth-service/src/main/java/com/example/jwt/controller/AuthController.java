package com.example.jwt.controller;

import com.example.jwt.model.User;
import com.example.jwt.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        // Logic to save user in the database
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        // Logic to authenticate user and generate JWT token
        String token = jwtService.generateToken(user.getUsername());
        return ResponseEntity.ok(token);
    }
}