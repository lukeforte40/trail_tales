package com.trailtales.trailtales.entities;

import org.springframework.data.annotation.CreatedDate;
import jakarta.persistence.*;
import java.sql.Date;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    private String password;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = false)
    private String phone;

    private String profilePic;

    @CreatedDate
    @Column(name = "joinDate", updatable = false)
    private Date joinDate;

    protected User() {}

    public User(String email, String password, String phone, String profilePic) {
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.profilePic = profilePic;
    }

    public Integer getId() {
      return id;
    }
  
    public void setId(Integer id) {
      this.id = id;
    }
  
    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
  
    public String getEmail() {
      return email;
    }
  
    public void setEmail(String email) {
      this.email = email;
    }
  
    public String getPhone(){
        return phone;
    }

    public void setPhone(String phone){
        this.phone = phone;
    }

    public String getProfilePic(){
        return profilePic;
    }

    public void setProfilePic(String profilePic){
        this.profilePic = profilePic;
    }

    public Date getJoinDate(){
        return joinDate;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + this.id + ", email='" + this.email + '\'' + ", phone='" + this.phone + '\'' + '}';
    }
}