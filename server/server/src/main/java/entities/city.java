package entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class city {

@Id
@GeneratedValue
private Long id;
private String img;
private String location;
private String name;
private Boolean seasonality;
private Number popularity;
    
}
