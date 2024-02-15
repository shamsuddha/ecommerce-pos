package personal.rajit.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String title;
    private LocalDate dateOfBirth;
    private LocalDate hireDate;
    private String address;
    private String city;
    private String region;
    private String postalCode;
    private String country;
    private String phone;
    private String photo;
    private String notes;
   // private Integer reports_to;

    @JsonIgnore
    @OneToMany(mappedBy = "employee", fetch = FetchType.LAZY)
    private List<OnlineOrder> onlineOrderList = new ArrayList<>();
    @Transient
    private List<OnlineOrder> onlineOrderListSerde = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "employee", fetch = FetchType.LAZY)
    private List<PosOrder> posOrderList = new ArrayList<>();
    @Transient
    private List<PosOrder> posOrderListSerde = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "employee", fetch = FetchType.LAZY)
    private List<EmployeeRole> employeeRoleList = new ArrayList<>();
    @Transient
    private List<EmployeeRole> employeeRoleListSerde = new ArrayList<>();

    public Employee(Long id) {
        this.id = id;
    }
}
