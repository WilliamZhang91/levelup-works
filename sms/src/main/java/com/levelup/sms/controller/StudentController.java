package com.levelup.sms.controller;

import com.levelup.sms.model.Student;
import com.levelup.sms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add_student")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New Student has been added";
    }

    @GetMapping("/all_students")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{studentId}")
    public Student getStudent(@PathVariable("studentId") Integer studentId) {
        List<Student> aStudent = getAllStudents();
        for (Student student : aStudent) {
            if (student.getStudentID() == studentId.intValue()) {
                return student;
            }
        }
        return null;
    }
}
