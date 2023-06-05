import {
    Avatar,
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router";
import AdminHeader from "../../../components/AdminHeader";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { LoadingButton } from "@mui/lab";

function AdminTexture() {
    const history = useNavigate();
    const queryClient = useQueryClient();
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "nama", headerName: "nama", width: 100 },
        {
            field: "image", headerName: "image", width: 200, renderCell: (params) => {
                console.log(params.row.image)
                return (
                    <Box mx={'auto'} height={100} component={'img'} src={`../storage/${params.row.image}`}>

                    </Box>
                )
            }
        },
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            width: 160,
            renderCell: (params) => {
                const handleEdit = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    const api = params.api;
                    const thisRow = {};

                    api.getAllColumns()
                        .filter((c) => c.field !== "__check__" && !!c)
                        .forEach(
                            (c) =>
                            (thisRow[c.field] = params.getValue(
                                params.id,
                                c.field
                            ))
                        );
                    history(`/admin/editPayment/${thisRow.id}`);
                };
                const handleDelete = async (e) => {

                    const api = params.api;
                    const thisRow = {};

                    api.getAllColumns()
                        .filter((c) => c.field !== "__check__" && !!c)
                        .forEach(
                            (c) =>
                            (thisRow[c.field] = params.getValue(
                                params.id,
                                c.field
                            ))
                        );
                    return await axios.delete(
                        `/api/texture/${thisRow.id}`
                    );
                };

                const deleteMutationPayment = useMutation(handleDelete, {
                    onSuccess: () => {
                        queryClient.invalidateQueries("article");
                    },
                });

                return (
                    <>
                        <Button onClick={handleEdit}>Edit</Button>
                        <LoadingButton
                            loading={
                                deleteMutationPayment.isLoading ? true : false
                            }
                            onClick={() => deleteMutationPayment.mutate()}
                        >
                            Delete
                        </LoadingButton>
                    </>
                );
            },
        },
    ];

    const fetchTexture = async () => {
        const res = await axios.get("/api/texture");
        return res.data.data
    };


    const texture = useQuery({
        queryKey: ["texture"],
        queryFn: fetchTexture,
    });

    return (
        <Container sx={{ px: 10, my: 5 }}>
            <Paper elevation={3}>
                <Container sx={{ px: 6, pt: 6, pb: 4 }}>
                    <AdminHeader
                        daftar="Texture"
                        tambahkan="Texture"
                        adminPage="addTexture"
                    />
                    <Box sx={{ height: 400, width: "100%" }}>
                        {texture.isLoading ? (
                            <Skeleton
                                variant="rectangular"
                                width={"100%"}
                                height={"100%"}
                                animation={"wave"}
                                sx={{ borderRadius: 1 }}
                            />
                        ) : (
                            <DataGrid
                                rows={texture.data}
                                columns={columns}
                                pageSize={15}
                                rowsPerPageOptions={[5]}
                                disableSelectionOnClick
                                getRowHeight={() => 'auto'}
                            />
                        )}
                    </Box>
                </Container>
            </Paper>
        </Container>
    );
}

export default AdminTexture;
