import axios from 'axios';

const URI = 'http://localhost:8000/ordenes/';

export const GenerarOrden = async(values, cart, valorTotal, setOrderId, vaciarCarrito)=>{
        const orden = {
          comprador: values,
          items: cart,
          total: valorTotal(),
          timeStamp: new Date()
      }

      const res = await axios.post(URI, orden)
      .then(response=>{
        setOrderId(response.data.id)
      });
      vaciarCarrito()        
    
}