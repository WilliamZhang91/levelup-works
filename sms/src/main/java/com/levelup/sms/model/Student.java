package com.levelup.sms.model;

import javax.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto init
    private int studentID;
    private String name;
    private String email;
    private String School;
    private String picture;
    private int teacherID;
    private long phone;
    private int role; //1: teacher, 2: student

    public Student() {}

    public int getStudentID() {
        return studentID;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getSchool() {
        return School;
    }

    public String getPicture() {
        return picture;
    }

    public int getTeacherID() {
        return teacherID;
    }

    public long getPhone() {
        return phone;
    }

    public int getRole() {
        return role;
    }
}
