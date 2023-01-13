package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.ConfirmationNote;
import com.example.angular_spring_boot_java.service.ConfirmationNoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/confirmation_note")
public class ConfirmationNoteController extends BaseController<ConfirmationNoteService, ConfirmationNote> {
@Autowired
public ConfirmationNoteController(ConfirmationNoteService service) {
super(service);
}
}
