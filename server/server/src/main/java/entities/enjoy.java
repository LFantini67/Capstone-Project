package entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class enjoy {

@Id
@GeneratedValue
private Long id;
private String name;
private String address;
    
}
