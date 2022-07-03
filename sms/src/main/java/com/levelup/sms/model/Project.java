package com.levelup.sms.model;

import javax.persistence.*;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int projectID;
    private String activityType;
    private String year;
    private String course;
    private String subscription;
    private String instructions;
    private String video;
    private String subjectMatter1;
    private String subjectMatter2;
    private String subjectMatter3;

    public Project() {}

    public int getProjectID() {
        return projectID;
    }

    public String getActivityType() {
        return activityType;
    }

    public String getYear() {
        return year;
    }

    public String getCourse() {
        return course;
    }

    public String getSubscription() {
        return subscription;
    }

    public String getInstructions() {
        return instructions;
    }

    public String getVideo() {
        return video;
    }

    public String getSubjectMatter1() {
        return subjectMatter1;
    }

    public String getSubjectMatter2() {
        return subjectMatter2;
    }

    public String getSubjectMatter3() {
        return subjectMatter3;
    }
}
