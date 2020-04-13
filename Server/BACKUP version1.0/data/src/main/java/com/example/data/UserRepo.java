package com.example.data;

import java.util.List;



import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
	
	public User findByFirstName(String fname);
	public List<User> findByLastName(String lname);
	
}
