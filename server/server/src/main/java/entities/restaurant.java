package entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class restaurant {

@Id
@GeneratedValue
private Long id;
private String name;
private Number vote_average;
private String[] cuisine;
private String address;
    
}
