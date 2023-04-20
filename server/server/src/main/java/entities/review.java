package entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class review {

@Id
@GeneratedValue
private Long id;
private String author;
private String text_body;
private String title;
private Number rating;
private Long account_id;
private Long film_id;
    
}
