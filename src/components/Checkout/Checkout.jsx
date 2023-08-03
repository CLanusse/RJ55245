import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, addDoc, updateDoc, doc, getDoc, documentId, writeBatch, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link, Navigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(3, "El nombre es demasiado corto")
                .max(20, "Máximo 20 caracteres")
                .required("Este campo es obligatorio"),
    direccion: Yup.string()
                .min(6, "La direccion es demasiado corta")
                .max(20, "Máximo 20 caracteres")
                .required("Este campo es obligatorio"),
    email: Yup.string()
                .required("Este campo es obligatorio")
                .email("El email es inválido")
})

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const handleSubmit = async (values) => {
        setLoading(true)
        // validaciones de formulario
        // if (!validaciones) return

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre})),
            total: totalCompra(),
            fyh: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where( documentId(), "in", cart.map(item => item.id) ))

        const productos = await getDocs(q)
        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id )
            const stock = doc.data().stock
                
            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(ordersRef, orden)

            vaciarCarrito()
            setOrderId(doc.id)
        } else {
            alert("Hay items sin stock")
            console.log(outOfStock)
        }
        
        // addDoc(ordersRef, orden)
        //     .then((doc) => {
        //         console.log(doc.id)
        //         vaciarCarrito()
        //         setOrderId(doc.id)
        //     })
        setLoading(false)
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2 className="text-4xl">Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0 ) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <Field placeholder="Tu nombre" className="form-control my-2" type="text" name="nombre"/>
                        <ErrorMessage name="nombre" component="p"/>
                        <Field placeholder="Tu direccion" className="form-control my-2" type="text" name="direccion"/>
                        <ErrorMessage name="direccion" component="p"/>
                        <Field placeholder="Tu email" className="form-control my-2" type="email" name="email"/>
                        <ErrorMessage name="email" component="p"/>
                        <button className="btn btn-success" disabled={loading}>Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Checkout