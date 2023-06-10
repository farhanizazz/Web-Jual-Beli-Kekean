import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Main from "./container/Main";
import CatalogPage from "./container/CatalogPage";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductPage from "./container/ProductPage";
import Payment from "./container/Payment";
import LoginPage from "./container/LoginPage";
import RegisterPage from "./container/RegisterPage";
import axios from "axios";
import Admin from "./container/Admin/Admin";
import AddProduct from "./container/Admin/Product/AddProduct";
import AdminPayment from "./container/Admin/Payment/AdminPayment";
import EditProduct from "./container/Admin/Product/EditProduct";
import NavAdmin from "./components/NavAdmin";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Cart from "./container/Cart";
import AddPayment from "./container/Admin/Payment/AddPayment";
import ArticlePage from "./container/Artikel/ArticlePage";
import ArticleDetailPage from "./container/Artikel/ArticleDetailPage";
import AboutUs from "./container/AboutUs";
import Footer from "./container/Footer";
import EditPayment from "./container/Admin/Payment/EditPayment";
import AdminArtikel from "./container/Admin/Artikel/AdminArtikel";
import AddArtikel from "./container/Admin/Artikel/AddArtikel";
import EditArtikel from "./container/Admin/Artikel/EditArtikel";
import ScrollToTop from "./ScrollToTop";
import CaraPengembalian from "./container/Bantuan/CaraPengembalian";
import Bantuan from "./container/Bantuan/Bantuan";
import KonfirmasiTransfer from "./container/Bantuan/KonfirmasiTransfer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { grey } from "@mui/material/colors";
import SplashScreen from "./container/SplashScreen";
import Customize from "./container/Customize";
import { environment } from "./environments/environment.js"
import { CustomizationProvider } from "./container/ProductCustomize/Customization";
import AddTexture from "./container/Admin/Texture/AddTexture";
import AdminTexture from "./container/Admin/Texture/AdminTexture";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const LoadingContext = React.createContext();

const translationEN = { navArticle: 'Article', navAbout: 'About Us', navCustomize: 'Customize your own product', hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit English.', sideMotif: 'Motive Type', sideUkuran: 'Size' }
const translationID = { navArticle: 'Artikel', navAbout: 'Tentang Perusahaan', navCustomize: 'Buat produkmu sendiri', hero: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', sideMotif: 'Tipe Motif', sideUkuran: 'Ukuran' }

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            id: { translation: translationID }
        },
        lng: 'id',
        fallbackLng: 'id',
        interpolation: { escapeValue: false },
    })

function Navs() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#862C22",
                background: {
                    default: "#F6EFE8",
                },
            },
            secondary: {
                main: "#253C5B",
            },
            subtitle: "rgb(0, 0, 0, 31%)",
            background: {
                default: "#F6EFE8",
            },
        },
        typography: {
            fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            button: {
                textTransform: "none",
            },
        },
        shape: {
            borderRadius: 12,
        },
        breakpoints: {
            values: {
                mobile: 0,
                tablet: 640,
                laptop: 1023,
                desktop: 1200,
            },
        },
    });

    // axios.defaults.baseURL = "https://kekean.id/";
    axios.defaults.baseURL = environment.url;
    axios.defaults.headers.post["Accept"] = "application/json";
    axios.defaults.headers.post["Content-Type"] = "application/json";

    axios.defaults.withCredentials = true;
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("auth_token");
        config.headers.Authorization = token ? `Bearer ${token}` : "";
        return config;
    });

    const queryClient = new QueryClient();

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return (
        <React.StrictMode>
            <Suspense fallback='Loading...'>
                <CustomizationProvider>
                    <QueryClientProvider client={queryClient}>
                        <ReactQueryDevtools />
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Router basename={"/"}>
                                <LoadingContext.Provider
                                    value={{ loading, setLoading }}
                                >
                                    {loading ? (
                                        <SplashScreen />
                                    ) : (
                                        <>
                                            <Navbar />
                                            <ScrollToTop />
                                            <Routes>
                                                <Route
                                                    path="/"
                                                    exact
                                                    element={<Main />}
                                                />
                                                <Route
                                                    path="/catalog"
                                                    element={<CatalogPage />}
                                                />
                                                <Route
                                                    path="/products/:productId"
                                                    element={<ProductPage />}
                                                />
                                                <Route
                                                    path="/products/"
                                                    element={<CatalogPage />}
                                                />
                                                <Route
                                                    path="/payment"
                                                    element={<Payment />}
                                                />
                                                <Route
                                                    path="/login"
                                                    element={<LoginPage />}
                                                />
                                                <Route
                                                    path="/register"
                                                    element={<RegisterPage />}
                                                />
                                                <Route
                                                    path="/cart"
                                                    element={<Cart />}
                                                />
                                                <Route
                                                    path="/artikel"
                                                    element={<ArticlePage />}
                                                />
                                                <Route
                                                    path="/artikel/:id"
                                                    element={<ArticleDetailPage />}
                                                />
                                                <Route
                                                    path="/about"
                                                    element={<AboutUs />}
                                                />
                                                <Route
                                                    path="/cara-pengembalian"
                                                    element={<CaraPengembalian />}
                                                />
                                                <Route
                                                    path="/bantuan"
                                                    element={<Bantuan />}
                                                />
                                                <Route
                                                    path="/konfirmasi-transfer"
                                                    element={<KonfirmasiTransfer />}
                                                />
                                                <Route
                                                    path="/customize"
                                                    element={<Customize />}
                                                />
                                                {/* Admin Routes */}
                                                <Route
                                                    path="/admin"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={Admin}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/addProduct"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={AddProduct}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/editProduct/:id"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={EditProduct}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/payment"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={AdminPayment}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/addPayment"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={AddPayment}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/editPayment/:id"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={EditPayment}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/artikel"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={AdminArtikel}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/addArtikel"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={AddArtikel}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/editArtikel/:id"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={EditArtikel}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/addTexture"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={AddTexture}
                                                        />
                                                    }
                                                />
                                                <Route
                                                    path="/admin/Texture"
                                                    name="Admin"
                                                    element={
                                                        <AdminPrivateRoute
                                                            comp={AdminTexture}
                                                        />
                                                    }
                                                />
                                            </Routes>
                                            <Footer />
                                        </>
                                    )}
                                </LoadingContext.Provider>
                            </Router>
                        </ThemeProvider>
                    </QueryClientProvider>
                </CustomizationProvider>
            </Suspense>
        </React.StrictMode>
    );
}

export default Navs;

if (document.getElementById("app")) {
    ReactDOM.render(<Navs />, document.getElementById("app"));
}

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<Navs />);
