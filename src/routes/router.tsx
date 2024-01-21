import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { ProductDetail } from "../pages/detail";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/product/:id",
                element: <ProductDetail />
            }
        ]
    }
])

export { router };