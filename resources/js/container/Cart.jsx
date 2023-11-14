import {
    Box,
    Button,
    Divider,
    Grid,
    Skeleton,
    Typography,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";
import CartItem from "../components/CartItem";
import CartItemLoading from "../components/CartItemLoading";
import SwipeToDelete from 'react-swipe-to-delete-component';
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';

export default function Cart() {
    const queryClient = useQueryClient();
    const [size, setSize] = React.useState("S");
    const [sizes, setSizes] = React.useState({
        XS: "0",
        S: "0",
        M: "0",
        L: "0",
        XL: "0",
        XXL: "0",
    });
    const [quantity, setQuantity] = React.useState(0);
    let isMounted = true;
    const { productId } = useParams();
    const history = useNavigate();
    if (!localStorage.getItem("auth_token")) {
        history.push("/");
        swal("Warning", "Login untuk melihat keranjang belanja", "error");
    }
    const fetchData = async () => {
        const res = await axios.get(`api/cart`);
        return res.data.cart;
    };

    const {
        isLoading,
        isError,
        error,
        data: cart,
    } = useQuery({
        queryKey: ["cartItem"],
        queryFn: fetchData,
    });

    var totalPrice;
    if (!isLoading) {
        totalPrice = cart.reduce((acc, tot) => {
            return acc + tot.product.price * tot.qty;
        }, 0);
    }

    const handleQtyChange = (event, cart_id) => {
        const newQty = { newQty: event.target.value == '' ? '0' : event.target.value };
        updateMutation.mutate({ cart_id: cart_id, newQty: newQty });
    };

    const updateCartQuantity = async ({ cart_id, newQty }) => {
        return await axios.put(`api/cart-update-quantity/${cart_id}`, newQty);
    };

    const updateMutation = useMutation(updateCartQuantity, {
        onSuccess: () => {
            queryClient.invalidateQueries("cartItem");
        },
    });

    const deleteCartItem = async ({ e, cart_id }) => {
        return await axios.delete(`api/delete-cart-item/${cart_id}`);
    };

    const deleteMutation = useMutation(deleteCartItem, {
        onSuccess: () => {
            queryClient.invalidateQueries("cartItem");
        },
    });

    return (
        <Grid paddingX={{ laptop: 10, mobile: 2 }} mt={5} container spacing={2} direction={{ laptop: 'row', mobile: 'column' }}>
            <Grid item laptop={6}>
                <Box
                    sx={{
                        border: { laptop: "1px solid #cfc9c4" },
                        borderRadius: 1,
                        pt: 1,
                        pb: 2,
                        px: 2,
                    }}
                >
                    <Typography padding={0.5} mx={2} fontWeight={{ laptop: '500', mobile: '600' }} sx={{ fontSize: { laptop: 24, mobile: 18 } }} borderBottom='1px #cfc9c4 solid'>
                        Keranjang Belanja
                    </Typography>
                    {isLoading ? (
                        <>
                            <CartItemLoading />
                            <CartItemLoading />
                            <CartItemLoading />
                        </>
                    ) : cart.length > 0 ? (
                        cart.map((item) => {
                            return (
                                <SwipeToDelete onDelete={(e) =>
                                    deleteMutation.mutate({
                                        e: e,
                                        cart_id: item.id,
                                    })}>
                                    <CartItem
                                        sx={{ pb: 2, backgroundColor: '#F6EFE8' }}
                                        key={item.product_id}
                                        name={item.product.product_name}
                                        price={item.product.price}
                                        qty={Number(item.qty)}
                                        value={item.size}
                                        img={item.product.image[0].path}
                                        onQtyChange={(event) =>
                                            handleQtyChange(event, item.id)
                                        }
                                        onDeleteClick={(e) =>
                                            deleteMutation.mutate({
                                                e: e,
                                                cart_id: item.id,
                                            })
                                        }
                                    />
                                </SwipeToDelete>
                            );
                        })
                    ) : (
                        <Typography
                            textAlign={"center"}
                            color={"#BABABA"}
                            mx={2}
                            my={9.5}
                            fontWeight="500"
                            fontSize={16}
                        >
                            Keranjang anda kosong
                        </Typography>
                    )}
                </Box>
            </Grid>
            <Grid item laptop={6}>
                <Box display={'flex'} flexDirection={'column'} sx={{ border: { laptop: "1px solid #BABABA" }, borderRadius: {laptop: 1}}} px={2} pt={1}>
                    <Box pt={1} mx={2} display={{ mobile: 'flex', laptop: 'block' }} justifyContent={'space-between'} alignContent='center' borderTop={{mobile: '1px solid #BABABA', laptop: 'none' }}>
                        <Typography borderBottom={{laptop: '1px solid #BABABA' }} mx={{mobile: 2}} fontWeight={{ laptop: "500", mobile: '600' }} fontSize={{ laptop: 24, mobile: 15 }} mt={{mobile: 1, laptop: 0}}>
                            Total belanjaan
                        </Typography>
                        <Typography mx={2} fontWeight="500" fontSize={{ laptop: 36, mobile: 15 }} mt={{mobile: 1, laptop: 0}}>
                            {isLoading ? (
                                <Skeleton variant="text" />
                            ) : (
                                `RP. ${totalPrice.toLocaleString()}`
                            )}
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        sx={{ py: 1.5, px: 3, ml: 2, mt: {laptop: 5, mobile: 1}, mb: 2 }}
                        onClick={() => history("/payment")}
                    >
                        <Typography color={"white"}>
                            Lanjutkan ke pembayaran
                        </Typography>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}
