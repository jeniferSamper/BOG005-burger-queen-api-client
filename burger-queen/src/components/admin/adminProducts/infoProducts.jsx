import React from "react";
import { deleteProduct } from "../../../petitions/productPetition";
import { BurgerContext } from "../../../context/indexContext";
import Swal from 'sweetalert2'

const ProductsItem = (props) => {
    const {products,
        setProducts,
        // editProductState,
        setEditProductState,
        setOpenModal,
        newProduct,
        setnewProduct,
    } = React.useContext(BurgerContext);

    const deleteProductBtn = () => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás recuperar la publicación!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:  'Sí, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(props.id, props)
                 // filtra el estado para volverlo a renderizar
                const arrayFilterProduct = products.filter(product => product.id !== props.id )
               setProducts(arrayFilterProduct)
              Swal.fire(
                'Eliminado!',
                            'El producto ha sido eliminada correctamente',
                            'Eliminada correctamente',
              )
            }
          })
        
    }

    const saveProductEdit = (e) => {
        setEditProductState(true)
        setOpenModal(true)
        setnewProduct({
            ...newProduct,
            name: props.name,
            price: props.price,
            image: props.image,
            dateEntry: new Date(),
            id: props.id,
            type: props.type,
        });
        return newProduct
    }



    return (
        <div className="productItem_Container">
            <img src={props.image} alt={props.name} className='imgProduct' />
            <p className="product">{props.name}</p>
            <p className="price">{props.price}</p>
            <p className="type">{props.type}</p>
            <div className="buttonProducts">
            <button className="fa-solid fa-pen-to-square" onClick={saveProductEdit} ></button>
            <button className="fa-solid fa-trash btnDelete" onClick={deleteProductBtn}></button>
            </div>
        </div>
    )
}


export { ProductsItem }