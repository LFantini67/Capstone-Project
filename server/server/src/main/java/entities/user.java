package entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class user {

@Id
@GeneratedValue
private Long id;
private String email;
private String password;
private String name;
    
}
