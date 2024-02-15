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
public class OnlineCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double quantity;
    private double price;

     // ONLINE CART ONE TO MANY PRODUCT
    @JsonIgnore
    @OneToMany(mappedBy = "onlineCart", fetch = FetchType.LAZY)
    private List<Product> productList = new ArrayList<>();
    @Transient
    private List<Product> productListSerde = new ArrayList<>();

    public OnlineCart(Long id){
        this.id = id;
    }


}
