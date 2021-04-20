package gr.codehub.pfizer.hibernate.repository;

import gr.codehub.pfizer.hibernate.model.PatientsData;

import javax.persistence.EntityManager;

public class PatientsDataRepository extends Repository<PatientsData, Integer> {

    public PatientsDataRepository(EntityManager entityManager) {
        super(entityManager);
    }

    @Override
    public Class getEntityClass() {
        return PatientsData.class;
    }

    @Override
    public String getClassName() {
        return PatientsData.class.getName();
    }
}
