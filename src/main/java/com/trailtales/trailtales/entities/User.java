package com.trailtales.trailtales.entities;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.time.LocalDate;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    
    private String password;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    private String phone;

    private String profilePic;

    @CreatedDate
    @Column(name = "joinDate", updatable = false)
    private LocalDate joinDate;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(  name = "user_roles", 
            joinColumns = @JoinColumn(name = "user_id"), 
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    protected User() {}

    public User(String username, String phone, String profilePic, String password) {
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.profilePic = profilePic;
        this.joinDate = LocalDate.now();
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
  
    public String getUsername() {
      return username;
    }
  
    public void setUsername(String username) {
      this.username = username;
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

    public LocalDate getJoinDate(){
        return joinDate;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + this.id + ", username='" + this.username + '\'' + ", phone='" + this.phone + '\'' + '}';
    }

    public void setRoles(Set<Role> role){
        this.roles = role;
    }

    public Set<Role> getRoles() {
        return roles;
    }
}