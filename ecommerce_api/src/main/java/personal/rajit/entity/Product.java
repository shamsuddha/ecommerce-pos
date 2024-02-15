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
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String unit;
    private Integer opening_stock;
    private Double buying_price;
    private Double selling_price;
    private String short_description;
    private String description;
    private String product_image;
    // GALLEY IMAGE

    // PRODUCT MANY TO ONE CATEGORY
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productCategory_id")
    private ProductCategory productCategory;
    @Column(name = "productCategory_id", insertable = false, updatable = false)
    private Long productCategoryId;

    // PRODUCT MANY TO ONE POS ORDER DETAIL
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "posOrderDetail_id")
    private PosOrderDetail posOrderDetail;
    @Column(name = "posOrderDetail_id", insertable = false, updatable = false)
    private Long posOrderDetailId;

    // PRODUCT MANY TO ONE ONLINE ORDER DETAIL
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "onlineOrderDetail_id")
    private OnlineOrderDetail onlineOrderDetail;
    @Column(name = "onlineOrderDetail_id", insertable = false, updatable = false)
    private Long onlineOrderDetailId;

    public Product(Long id) {
        this.id = id;
    }

}
