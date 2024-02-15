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
public class OnlineOrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double quantity;

    // ONLINE ORDER DETAIL MANY TO ONE ONLINE ORDER
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "onlineOrder_id")
    private OnlineOrder onlineOrder;
    @Column(name = "onlineOrder_id", insertable = false, updatable = false)
    private Long onlineOrderId;

    // ONLINE ORDER DETAIL ONE TO MANY PRODUCT
    @JsonIgnore
    @OneToMany(mappedBy = "onlineOrderDetail", fetch = FetchType.LAZY)
    private List<Product> productList = new ArrayList<>();
    @Transient
    private List<Product> productListSerde = new ArrayList<>();

    public OnlineOrderDetail(Long id) {
        this.id = id;
    }

}
