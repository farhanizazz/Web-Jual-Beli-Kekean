import { OrbitControls, PerspectiveCamera, PresentationControls, Stage } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { degToRad } from "three/src/math/MathUtils";
import { environment } from "../environments/environment"

const HeroModel = (props) => {
    const gltf = useLoader(
        GLTFLoader, environment.fileUrl + '/' + props.model
    );

    const controlRef = useRef(null)

    return (
        <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-1, Math.PI / 2]}

        >
            <Stage
                environment={"city"}
                intensity={0.6}
                contactShadow={false}
                shadowBias={-0.0015}
            >
                <Suspense fallback={null}>
                    <primitive object={gltf.scene} />
                </Suspense>
                <mesh>
                    <OrbitControls makeDefault />
                </mesh>
            </Stage>
        </PresentationControls>
    );
};

export default HeroModel;
