package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.ConfirmationNote;
import com.example.angular_spring_boot_java.model.Invoice;
import com.example.angular_spring_boot_java.repo.ConfirmationNoteRepo;
import com.example.angular_spring_boot_java.repo.InvoiceRepo;
import org.springframework.stereotype.Service;

@Service
public class InvoiceService extends RepoService<InvoiceRepo, Invoice> {
    public InvoiceService(InvoiceRepo repo) { super(repo);}
}