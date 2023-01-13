package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.ConfirmationNote;
import com.example.angular_spring_boot_java.repo.ConfirmationNoteRepo;
import org.springframework.stereotype.Service;

@Service
public class ConfirmationNoteService extends RepoService<ConfirmationNoteRepo, ConfirmationNote> {
    public ConfirmationNoteService(ConfirmationNoteRepo repo) {
        super(repo);
    }
}
