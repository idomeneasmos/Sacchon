package gr.codehub.pfizer.hibernate.repository;

import gr.codehub.pfizer.hibernate.model.Consultation;
import gr.codehub.pfizer.hibernate.model.Patient;

import javax.persistence.EntityManager;
import java.util.Date;
import java.util.List;

public class ConsultationRepository extends Repository<Consultation, Integer> {
    private EntityManager entityManager;

    public ConsultationRepository(EntityManager entityManager) {
        super(entityManager);
        this.entityManager = entityManager;
    }

    @Override
    public Class getEntityClass() {
        return Consultation.class;
    }

    @Override
    public String getClassName() {
        return Consultation.class.getName();
    }

    public List<Consultation> getConsultationByDate(Patient patient, Date from1, Date to) {
        return entityManager.createQuery("SELECT c FROM Consultation c WHERE c.patient=:patient " +
                        "AND c.date>=:from1 AND c.date<=:to",
                Consultation.class)
                .setParameter("patient", patient)
                .setParameter("from1", from1)
                .setParameter("to", to)
                .getResultList();
    }


}
