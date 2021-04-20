package gr.codehub.pfizer.hibernate.model;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String FullName;
    private String Password;
    private String Email;
    private String Speciality;
    private boolean Active;
    private String role;

    @OneToMany(mappedBy = "Doctor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Consultation> Consultations;

    @OneToMany(mappedBy = "Doctor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Patient> Patients;

}
