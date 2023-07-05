import { Container } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Product from "./ProductCustomize/Product";
import "../../css/ProductCustomize.css";
import { useCustomization } from "./ProductCustomize/Customization";

export default function Customize(props) {
    const [texture, setTexture] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [selection, setSelection] = React.useState('motif')
    const { materialDKa, setMaterialDKa } = useCustomization()
    const { materialKe, setMaterialKe } = useCustomization()
    const { materialDKi, setMaterialDKi } = useCustomization()
    const { materialKa, setMaterialKa } = useCustomization()
    const [seleksi, setSeleksi] = React.useState('dadaKanan')
    const {model, setModel} = useCustomization()
    console.log('material', materialDKa)
    console.log('seleksi', seleksi)

    React.useEffect(() => {
        const fetchData = async () => {
            axios.get(`api/texture`).then((res) => {
                if (res.data.status === 200) {
                    setTexture(res.data.data);
                    setLoading(false);
                }
            });
        };
        fetchData();
    }, []);

    const models = [
        {
            namaModel: 'Model 1',
            gambar: 'model1.png',
            file: 'model1.glb'
        },
        {
            namaModel: 'Model 2',
            gambar: 'model2.png',
            file: 'model2.glb'
        },
    ]

    const pilihan = (param) => {
        if (!loading) {
            switch (param) {
                case 'motif':
                    return texture.map((item, id) => (<div className="col-6">
                        <div onClick={() => {
                            switch (seleksi) {
                                case 'dadaKanan':
                                    setMaterialDKa(`${item.image}`)
                                    break;
                                case 'dadaKiri':
                                    setMaterialDKi(`${item.image}`)
                                    break;
                                case 'kerah':
                                    setMaterialKe(`${item.image}`)
                                    break;
                                case 'kancing':
                                    setMaterialKa(`${item.image}`)
                                    break;
                                default:
                                    break;
                            }
                        }} className="motif mx-auto text-center" style={{ width: 'auto', height: 'auto', cursor: 'pointer' }}>
                            <div style={{ paddingTop: '100%', position: 'relative' }}>
                                <img src={`../storage/${item.image}`} className="py-1 px-1" style={{ borderRadius: '50%', objectFit: 'cover', position: 'absolute', height: '100%', width: '100%', top: 0, left: 0, right: 0, bottom: 0 }}></img>
                            </div>
                            <p className="text-center mt-1" style={{ fontSize: 12 }}>{item.nama}</p>
                        </div>
                    </div>))

                case 'model':
                    return models.map((item, id) => (
                        <div className="col-6" onClick={() => setModel(item.file)}>
                            <div className="motif mx-auto text-center" style={{ width: 'auto', height: 'auto', cursor: 'pointer' }}>
                                <div style={{ paddingTop: '100%', position: 'relative' }}>
                                    <img src={`/3dModel/.GLB/modelKustom/img/${item.gambar}`} className="py-1 px-1" style={{ borderRadius: '50%', objectFit: 'cover', position: 'absolute', height: '100%', width: '100%', top: 0, left: 0, right: 0, bottom: 0 }}></img>
                                </div>
                                <p className="text-center mt-1" style={{ fontSize: 12 }}>{item.namaModel}</p>
                            </div>
                        </div>
                    ))

                default:
                    break;
            }
        } else {
            return <p>Loading</p>
        }
    }
    return (
        <Container sx={{ px: 10, mt: 5 }}>
            <div className="card rounded border " style={{ border: '1px solid rgba(0, 0, 0, 0.32)', borderRadius: 20 }}>
                <div className="row m-4 pb-3">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-10 pe-0" style={{ position: 'relative' }}>
                                <Canvas style={{ height: '30rem' }} shadows>
                                    <Suspense fallback={null}>
                                        <Product />
                                    </Suspense>
                                </Canvas>
                                <div className="row justify-content-center text-center m-auto" style={{ position: 'absolute', width: '60%', bottom: 0, left: 0, right: 0, fontWeight: 500, fontSize: 12 }}>
                                    {/* <div className="row m-auto" style={{width : '100%'}}> */}
                                    <div onClick={() => setSeleksi('kerah')} className="col" style={{ cursor: 'pointer' }}>
                                        <p style={{ opacity: seleksi == 'kerah' ? 1 : 0.8 }}>Kerah</p>
                                    </div>
                                    <div onClick={() => setSeleksi('dadaKanan')} className="col" style={{ cursor: 'pointer' }}>
                                        <p style={{ opacity: seleksi == 'dadaKanan' ? 1 : 0.8 }} className="text-truncate">Dada Kanan</p>
                                    </div>
                                    <div onClick={() => setSeleksi('dadaKiri')} className="col" style={{ cursor: 'pointer' }}>
                                        <p style={{ opacity: seleksi == 'dadaKiri' ? 1 : 0.8 }} className="text-truncate">Dada Kiri</p>
                                    </div>
                                    <div onClick={() => setSeleksi('kancing')} className="col" style={{ cursor: 'pointer' }}>
                                        <p style={{ opacity: seleksi == 'kancing' ? 1 : 0.8 }}>Kancing</p>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="col-lg-2 ps-0 mx-auto">
                                <div style={{ width: 'auto', height: 526, backgroundColor: '#F7F7F7', overflowY: 'scroll', overflowX: 'hidden' }}>
                                    <div className="mx-auto title-color text-center pt-2" style={{ fontWeight: 500 }}>
                                        <p className="text-truncate" style={{ fontSize: 15 }}> Categories</p>
                                        <hr className="mx-3 mt-0" style={{ border: '2px solid #EBE4E4' }} />
                                    </div>
                                    <div className="mx-auto p-1 color" style={{ cursor: 'pointer', width: 108, height: 89 }}>
                                        <div className="fill-color mx-auto" style={{ marginTop: 13, height: 46, width: 46, borderRadius: '50%', backgroundColor: 'green' }}>
                                        </div>
                                        <p className="text-center mt-1" style={{ fontSize: 12 }}>Color</p>
                                    </div>
                                    <div className="mx-auto p-1 color" style={{ cursor: 'pointer', width: 108, height: 89 }} onClick={() => setSelection('motif')}>
                                        <div className="mx-auto" style={{ marginTop: 13, height: 46, width: 46, borderRadius: '50%', backgroundColor: 'green' }}>
                                            <img src="../images/motif-batik-dummy/parang.webp" className="mx-auto" style={{ borderRadius: '50%', objectFit: 'cover', width: 46, height: 46 }}></img>
                                        </div>
                                        <p className="text-center mt-1" style={{ fontSize: 12 }}>Motif</p>
                                    </div>
                                    <div className="mx-auto p-1 color" style={{ cursor: 'pointer', width: 108, height: 89 }}>
                                        <div className="fill-color mx-auto" style={{ marginTop: 13, height: 46, width: 46, borderRadius: '50%', backgroundColor: '#EAB3E8' }}>
                                            <img src="../images/logoUkuran.png" className="mx-auto" style={{ borderRadius: '50%', objectFit: 'cover', width: 46, height: 46 }}></img>
                                        </div>
                                        <p className="text-center mt-1" style={{ fontSize: 12 }}>Size</p>
                                    </div>
                                    <div className="mx-auto p-1 color" style={{ cursor: 'pointer', width: 108, height: 89 }} onClick={() => setSelection('model')}>
                                        <div className="fill-color mx-auto" style={{ marginTop: 13, height: 46, width: 46, borderRadius: '50%', backgroundColor: '#FF7D7D' }}>
                                        </div>
                                        <p className="text-center mt-1" style={{ fontSize: 12 }}>Model</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="ps-0 col-lg-3">
                        <div style={{ backgroundColor: '#F7F7F7', width: 'auto', height: 466, overflowY: 'scroll', overflowX: 'hidden' }}>
                            <div className="title-color pt-2 px-3" style={{ fontWeight: 500 }}>
                                <span className="mx-3 ">MOTIF</span>
                                <hr className="mx-3 mt-0" style={{ border: '2px solid #EBE4E4' }} />
                            </div>
                            <div className="row mx-3">
                                {pilihan(selection)}
                            </div>
                        </div>
                        <div className="w-100">
                            <button className="btn text-white mt-4 button-cart" style={{ backgroundColor: '#FF8D24', borderRadius: 20, width: '100%', }}>Add To Chart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    )
}