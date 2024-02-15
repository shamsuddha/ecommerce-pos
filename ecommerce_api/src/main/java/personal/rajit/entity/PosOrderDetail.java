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
public class PosOrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double quantity;
        
    // POS ORDER DETAIL MANY TO ONE POS ORDER
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "posOrder_id")
    private PosOrder posOrder;
    @Column(name = "posOrder_id", insertable = false, updatable = false)
    private Long posOrderId;

    // POS ORDER DETAIL ONE TO MANY PRODUCT
    @JsonIgnore
    @OneToMany(mappedBy = "posOrderDetail", fetch = FetchType.LAZY)
    private List<Product> productList = new ArrayList<>();
    @Transient
    private List<Product> productListSerde = new ArrayList<>();

    public PosOrderDetail(Long id) {
        this.id = id;
    }

}
