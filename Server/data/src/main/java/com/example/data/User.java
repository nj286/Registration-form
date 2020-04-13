package com.example.data;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class User {
	
	  @Id
	  public String id;

	  private String firstName;
	  private String lastName;
	  private String email;
	  private String contact;
	  private String ssn;
	  private String address;
	  
	  
	  private String getSsn() {
		return ssn;
	}


	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getContact() {
		return contact;
	}



	public void setContact(String contact) {
		this.contact = contact;
	}



	public void setSsn(String ssn) {
		this.ssn = ssn;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}


	
	public User()
	{
		
	}



	  public User(String id, String firstName, String lastName, String email, String contact, String ssn,
			String address) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.contact = contact;
		this.ssn = ssn;
		this.address = address;
	}

	

	  @Override
	  public String toString() {
	    return String.format(
	        "Customer[id=%s, firstName='%s', lastName='%s', contact='%s', email='%s']",
	        id, firstName, lastName);
	  }

}
