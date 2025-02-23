package com.example.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DataApplication implements CommandLineRunner{
	
	@Autowired
	private UserRepo repository;

	public static void main(String[] args) {
		SpringApplication.run(DataApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
//		repository.deleteAll();
//
//	    // save a couple of customers
//	    repository.save(new User("Alice", "Smith"));
//	    repository.save(new User("Bob", "Smith"));
//
//	    // fetch all customers
//	    System.out.println("Customers found with findAll():");
//	    System.out.println("-------------------------------");
//	    for (User user : repository.findAll()) {
//	      System.out.println(user);
//	    }
//	    System.out.println();
//
//	    // fetch an individual customer
//	    System.out.println("Customer found with findByFirstName('Alice'):");
//	    System.out.println("--------------------------------");
//	    System.out.println(repository.findByFirstName("Alice"));
//
//	    System.out.println("Customers found with findByLastName('Smith'):");
//	    System.out.println("--------------------------------");
//	    for (User user : repository.findByLastName("Smith")) {
//	      System.out.println(user);
//		
//	}
	}

}
