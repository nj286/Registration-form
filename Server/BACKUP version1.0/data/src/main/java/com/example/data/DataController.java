package com.example.data;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DataController {
	
	@Autowired
	UserRepo repo;
	
	@GetMapping(value = "/data")
	@ResponseBody
	public String getData(@RequestParam String fname,@RequestParam String lname, @RequestParam String contact, @RequestParam String email )
	{
		User user = new User(fname, lname, contact, email);
		
		repo.save(user);
		
		return fname+lname;
	}
	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/sendData")
	String postData(@RequestBody User user)
	{
		System.out.println("test");
		repo.save(user);
		return "naina";
	}

}
