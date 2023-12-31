import { useEffect } from "react";

import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { styled, Box } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
padding:20px 10px;
background:#F2F2F2;
`


const Home = () => {
    const { products } = useSelector(state => state.getProducts);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);
    return (
        <>
            <Navbar />

            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection/>
                <Slide products={products} title="Discounts for you" timer={false} />
                <Slide products={products} title="Suggesting Items" timer={false} />
                <Slide products={products} title="Top selection" timer={false} />
                <Slide products={products} title="Recommended Items" timer={false} />
                <Slide products={products} title="Trending offers" timer={false} />
                <Slide products={products} title="Season's top pic" timer={false} />
                <Slide products={products} title="Top Deals on Accessories" timer={false} />
            </Component>

        </>
    )
}
export default Home;