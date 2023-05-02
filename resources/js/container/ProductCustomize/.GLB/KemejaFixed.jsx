/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\KEMEJA FIXED.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useCustomization } from '../Customization'


export function KemejaFixed(props) {
  const { nodes, materials } = useGLTF('/3dModel/.GLB/KEMEJA FIXED.glb')
  const { materialDKa, setMaterialDKa } = useCustomization()
  const { materialKe, setMaterialKe } = useCustomization()
  const { materialDKi, setMaterialDKi } = useCustomization()
  const { materialKa, setMaterialKa } = useCustomization()
  const textureDadaKanan = useTexture({
    map: `/3dModel/.GLB/Textures/Fabric_035_SD/${materialDKa}.png`,
    // map: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_basecolor.jpg",
    // normalMap: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_normal.jpg",
    // roughnessMap: "/3dModel/.GLB/Textures/Fabric_035_S D/Fabric_035_roughness.jpg",
    aoMap: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_ambientOcclusion.jpg",
  })
  const textureDadaKiri = useTexture({
    map: `/3dModel/.GLB/Textures/Fabric_035_SD/${materialDKi}.png`,
    // map: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_basecolor.jpg",
    // normalMap: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_normal.jpg",
    // roughnessMap: "/3dModel/.GLB/Textures/Fabric_035_S D/Fabric_035_roughness.jpg",
    aoMap: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_ambientOcclusion.jpg",
  })
  const textureKerah = useTexture({
    map: `/3dModel/.GLB/Textures/Fabric_035_SD/${materialKe}.png`,
    // map: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_basecolor.jpg",
    // normalMap: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_normal.jpg",
    // roughnessMap: "/3dModel/.GLB/Textures/Fabric_035_S D/Fabric_035_roughness.jpg",
    aoMap: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_ambientOcclusion.jpg",
  })
  const textureKancing = useTexture({
    map: `/3dModel/.GLB/Textures/Fabric_035_SD/${materialKa}.png`,
    // map: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_basecolor.jpg",
    // normalMap: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_normal.jpg",
    // roughnessMap: "/3dModel/.GLB/Textures/Fabric_035_S D/Fabric_035_roughness.jpg",
    aoMap: "/3dModel/.GLB/Textures/Fabric_035_SD/Fabric_035_ambientOcclusion.jpg",
  })


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Lengan_Kiri.geometry} material={nodes.Lengan_Kiri.material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Belakang.geometry} material={nodes.Belakang.material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Lengan_Kanan.geometry} material={nodes.Lengan_Kanan.material} rotation={[Math.PI / 2, 0, 0]} />

      <mesh geometry={nodes.Kancing.geometry} material={nodes.Kancing.material} rotation={[Math.PI / 2, 0, 0]} >
        <meshStandardMaterial {...textureKancing} />
      </mesh>

      <mesh geometry={nodes.Depan_Kiri.geometry} material={nodes.Depan_Kiri.material} rotation={[Math.PI / 2, 0, 0]} >
        <meshStandardMaterial {...textureDadaKiri} />
      </mesh>

      <mesh geometry={nodes.Kerah.geometry} material={nodes.Kerah.material} rotation={[Math.PI / 2, 0, 0]} >
        <meshStandardMaterial {...textureKerah} />
      </mesh>

      <mesh geometry={nodes.Depan_Kanan.geometry} rotation={[Math.PI / 2, 0, 0]} >
        <meshStandardMaterial {...textureDadaKanan} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/3dModel/.GLB/KEMEJA FIXED.glb')