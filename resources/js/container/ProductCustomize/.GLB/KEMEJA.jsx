/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\3D KEMEJA.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Kemeja(props) {
  const leatherTextureProps = useTexture({
    map: "/3dModel/.GLB/Textures/Leather_008_SD/Leather_008_Base Color.jpg",
    normalMap: "/3dModel/.GLB/Textures/Leather_008_SD/Leather_008_Normal.jpg",
    roughnessMap: "/3dModel/.GLB/Textures/Leather_008_SD/Leather_008_Roughness.jpg",
    aoMap: "/3dModel/.GLB/Textures/Leather_008_SD/Leather_008_Ambient Occlusion.jpg",
  })


  const { nodes, materials } = useGLTF('/3dModel/.GLB/3D KEMEJA.glb')
  return (
    <group position={[0, -1, 0]} {...props} dispose={null}>
      <mesh geometry={nodes.Belakang.geometry} material={nodes.Belakang.material} position={[-0.01, 1.38, -0.32]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Depan_Kanan.geometry} position={[-0.35, 1.45, 0.4]} rotation={[Math.PI / 2, 0, 0]} >
        <meshStandardMaterial {...leatherTextureProps} />
      </mesh>
      <mesh geometry={nodes.Kancing.geometry} material={nodes.Kancing.material} position={[0, 1.81, 0.5]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Kera.geometry} material={nodes.Kera.material} position={[0, 2.77, 0.04]} rotation={[Math.PI / 2, 0, 0]} />
      {/* <mesh geometry={nodes.Lengan_Kanan.geometry} material={nodes.Lengan_Kanan.material} position={[0.95, 1.88, -0.15]} rotation={[Math.PI / 2, 0, 0]} scale={1.01} /> */}
      <mesh geometry={nodes.Lengan_Kiri.geometry} material={nodes.Lengan_Kiri.material} position={[-0.97, 1.87, -0.15]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Depan_Kiri.geometry} material={nodes.Depan_Kiri.material} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/3dModel/.GLB/3D KEMEJA.glb')
