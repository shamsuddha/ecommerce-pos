package personal.rajit.entity;

import java.util.ArrayList;
import java.util.Date;
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
public class OnlineOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private Double total_price;
    private Double discount;
    private String shipping_address;

    // ONLINE ORDER MANY TO ONE CUSTOMER
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;
    @Column(name = "customer_id", insertable = false, updatable = false)
    private Long customerId;

    // ONLINE ORDER ONE TO MANY ONLINE ORDER DETAIL
    @JsonIgnore
    @OneToMany(mappedBy = "onlineOrder", fetch = FetchType.LAZY)
    private List<OnlineOrderDetail> onlineOrderDetailList = new ArrayList<>();
    @Transient
    private List<OnlineOrderDetail> onlineOrderDetailListSerde = new ArrayList<>();

    public OnlineOrder(Long id) {
        this.id = id;
    }

}
