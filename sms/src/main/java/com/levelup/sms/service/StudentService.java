package com.levelup.sms.service;

import com.levelup.sms.model.Project;
import com.levelup.sms.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    //public Student getStudentById(int id);

    public Project saveProject(Project project);
    public List<Project> getAllProjects();

}
