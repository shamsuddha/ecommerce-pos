package personal.rajit.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EmployeeRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // EMPLOYEE ROLE MANY TO ONE EMPLOYEE
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id")
    private Employee employee;
    @Column(name = "employee_id", insertable = false, updatable = false)
    private Long employeeId;

    // EMPLOYEE ROLE MANY TO ONE ROLE
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")
    private Role role;
    @Column(name = "role_id", insertable = false, updatable = false)
    private Long roleId;

    public EmployeeRole(Long id){
        this.id = id;
    }
}
