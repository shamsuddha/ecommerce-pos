package personal.rajit.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    // ROLE ONE TO MANY EMPLOYEE ROLE
    @JsonIgnore
    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
    private List<EmployeeRole> employeeRoleList = new ArrayList<>();
    @Transient
    private List<EmployeeRole> employeeRoleListSerde = new ArrayList<>();

    public Role(Long id){
        this.id = id;
    }
}
