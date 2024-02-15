package personal.rajit.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String customer_name;
    private String company;
    private String membership_title;
    private String address;
    private String city;
    private String region;
    private String postal_code;
    private String country;
    private String phone;
    private String fax;
    private String profile_image;

    // CUSTOMER ONE TO MANY ONLINE ORDER
    @JsonIgnore
    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
    private List<OnlineOrder> onlineOrderList = new ArrayList<>();
    @Transient
    private List<OnlineOrder> onlineOrderListSerde = new ArrayList<>();

    // CUSTOMER ONE TO MANY POS ORDER
    @JsonIgnore
    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY)
    private List<PosOrder> posOrderList = new ArrayList<>();
    @Transient
    private List<PosOrder> posOrderListSerde = new ArrayList<>();

    public Customer(Long id) {
        this.id = id;
    }
}
