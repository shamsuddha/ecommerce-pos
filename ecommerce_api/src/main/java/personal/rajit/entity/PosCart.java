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
public class PosCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // POS CART ONE TO MANY PRODUCT
    @JsonIgnore
    @OneToMany(mappedBy = "posCart", fetch = FetchType.LAZY)
    private List<Product> productList = new ArrayList<>();
    @Transient
    private List<Product> productListSerde = new ArrayList<>();

    public PosCart(Long id) {
        this.id = id;
    }
}
