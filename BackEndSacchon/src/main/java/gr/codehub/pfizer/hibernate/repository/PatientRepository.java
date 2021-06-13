package gr.codehub.pfizer.hibernate.repository;

import gr.codehub.pfizer.hibernate.model.Patient;

import javax.persistence.EntityManager;

public class PatientRepository extends Repository<Patient, Integer> {
    private EntityManager entityManager;
    public PatientRepository(EntityManager entityManager) {
        super(entityManager);
        this.entityManager=entityManager;
    }

    @Override
    public Class getEntityClass() {
        return Patient.class;
    }

    @Override
    public String getClassName() {
        return Patient.class.getName();
    }

    public Patient getByUsername(String username) {
       try{

        return entityManager.createQuery("SELECT b FROM Patient b " +
                "WHERE b.Email = :username", Patient.class)
                .setParameter("username", username)
                .getSingleResult();
       }catch (Exception e){return null;}

    }

}
