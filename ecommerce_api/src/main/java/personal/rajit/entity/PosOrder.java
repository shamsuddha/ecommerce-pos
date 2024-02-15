package personal.rajit.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PosOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private Double total_price;
    private Double discount;
    private String shipping_address;
    
    // POS ORDER ONE TO MANY POST ORDER DETAIL
    @JsonIgnore
    @OneToMany(mappedBy = "posOrder", fetch = FetchType.LAZY)
    private List<PosOrderDetail> posOrderDetailList = new ArrayList<>();
    @Transient
    private List<PosOrderDetail> posOrderDetailListSerde = new ArrayList<>();

    // POS ORDER MANY TO ONE CUSTOMER
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @Column(name = "customer_id", insertable = false, updatable = false)
    private Long customerId;

    public PosOrder(Long id){
        this.id = id;
    }
}
