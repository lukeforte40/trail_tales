package com.trailtales.trailtales.payloads.requests;
import java.util.Set;

import jakarta.validation.constraints.*;

public class SignupRequest {
  @NotBlank
  private String username;

  private Set<String> role;

  @NotBlank
  private String password;

  @NotBlank
  private String phone;

  private String profilePic;

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

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }


  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<String> getRole() {
    return this.role;
  }

  public void setRole(Set<String> role) {
    this.role = role;
  }
}