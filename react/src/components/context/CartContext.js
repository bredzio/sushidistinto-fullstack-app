import { createContext } from "react";
import {useState} from "react";

export const CartContext = createContext()


export const CartProvider =({children})=>{
    
  const [cart, setCart]=useState([])

  const [idPago, setIdPago] = useState('')
  const [token, setToken] = useState('')

  const agregarAlCarrito=(item)=>{
      setCart( [...cart, item] )
    }

    const [comprador, setComprador] = useState({
      nombre:'',
      apellido:'',
      email:''
  })

  const agregarComprador=(e)=>{
    setComprador(e)
  }
  
    const isInCart = (id)=>{
      return cart.some((prod)=>prod.id===id)
    }
  
    const cantidadCart=()=>{
      return cart.reduce((acc, prod)=>acc+prod.cantidad,0)
    }

    const verificarToken=()=>{      
      if(token){
        return true
      }else{
        return false
      }
    }

    const valorTotal=()=>{
      return cart.reduce((acc,prod)=>acc+prod.cantidad * prod.price,0)
    }

    const vaciarCarrito=()=>{
      return setCart([])
    }

    const eliminarItem=(item)=>{
      return setCart(cart.filter(el=>el.id !== item.id))
    }
    
    return(
        <CartContext.Provider value={{cart,idPago, setIdPago, agregarAlCarrito,agregarComprador, isInCart, cantidadCart,valorTotal, vaciarCarrito, eliminarItem, comprador, setToken, verificarToken}}>
        {children}
        </CartContext.Provider>

    );
}