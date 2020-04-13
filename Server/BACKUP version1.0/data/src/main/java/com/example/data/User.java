package com.example.data;

import org.springframework.data.annotation.Id;

public class User {
	
	  @Id
	  public String id;

	  public String firstName;
	  public String lastName;
	  public String email;
	  public String contact;

	  public User() {}

	  public User(String firstName, String lastName, String contact, String email) {
	    this.firstName = firstName;
	    this.lastName = lastName;
	    this.contact = contact;
	    this.email = email;
	  }

	  @Override
	  public String toString() {
	    return String.format(
	        "Customer[id=%s, firstName='%s', lastName='%s', contact='%s', email='%s']",
	        id, firstName, lastName);
	  }

}
