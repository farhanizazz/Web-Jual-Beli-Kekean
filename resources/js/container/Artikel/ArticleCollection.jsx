import React from 'react'
import { Grid, Typography } from "@mui/material";
import ArticleItem from "../../components/ArticleItem";
import { Link } from 'react-router-dom'
import moment from 'moment';
import striptags from 'striptags';


export default function ArticleCollection() {
    const [article, setArticle] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    let isMounted = true;



    React.useEffect(() => {
        const fetchData = async () => {
            axios.get(`api/article`).then((res) => {
                if (res.data.status === 200) {
                    setArticle(res.data.data);
                    setLoading(false);
                }
            });
        };
        fetchData();
        isMounted = false;
    }, []);

    const articles = article.slice(0, 3).map((item, id) =>
        <ArticleItem
            key={id}
            id={item.id}
            image={item.image}
            tanggal={moment(
                item.date,
                "YYYY-MM-DD HH:mm:ss"
            ).format("DD MMMM YYYY")}
            nama={item.title}
            deskripsi={striptags(item.isi)}
        />
    )
    return (
        <Grid item>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item mobile={6}>
                    <Typography
                        display={{ mobile: "block", laptop: "none" }}
                        fontWeight={"light"}
                        fontSize={18}
                        py={2}
                    >
                        Article
                    </Typography>
                </Grid>

                <Grid item mobile={6}>
                    <Typography
                        display={{ mobile: "block", laptop: "none" }}
                        fontWeight={"regular"}
                        fontSize={12}
                        py={2}
                        textAlign={"right"}
                        color={"#989898"}
                    >
                        Lihat Selengkapnya
                    </Typography>
                </Grid>
                <Grid item mobile={12}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            display: { mobile: "flex", laptop: "none" },
                        }}
                    >
                        {articles}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}