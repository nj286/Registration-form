package com.example.data;


import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.data.exception.AddressNotFoundException;
import com.example.data.exception.UserNotFoundException;

@RestController
public class DataController {
	
	@Autowired
	UserRepo repo;
	
	@GetMapping(value = "/getDataByName")
	@CrossOrigin(origins = "*")
	@ResponseBody
	public List<User> getDataByName(@RequestParam String fname )
	{
		List<User> list = new ArrayList<User>();
		if(fname == null || fname.isEmpty())
		{
			
			throw new UserNotFoundException("Please enter a valid user name.");
		}
		
		User user = repo.findByFirstName(fname);
		
		
		if(user == null)
		{
			throw new UserNotFoundException("User with name " + fname + " does not exist.");
		}
		list.add(user);
		return list;
	}
	
	@GetMapping(value = "/getDataByAddress")
	@CrossOrigin(origins = "*")
	@ResponseBody
	public List<User> getDataByAddress(@RequestParam String address )
	{
		List<User> list = new ArrayList<User>();
		
		if(address == null || address.isEmpty())
		{
			throw new AddressNotFoundException("Please enter a valid address.");
		}
		
		list = repo.findByAddress(address);
		if(list.size() == 0)
		{
			throw new AddressNotFoundException("No user stays at this address.");
		}		
		return list;
	}
	
	
	@CrossOrigin(origins = "*")
	@PostMapping("/sendData")
	ResponseEntity<String> postData(@RequestBody User user)
	{
		System.out.println("test");
		repo.save(user);
		
		return new ResponseEntity<String>("Successfully inserted data", HttpStatus.OK);
	}

}
