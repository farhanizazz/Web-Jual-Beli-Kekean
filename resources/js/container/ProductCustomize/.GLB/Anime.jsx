/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 hina_3d_anime_character_girl_for_blender.glb
Author: CGTOON (https://sketchfab.com/CGBest)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hina-3d-anime-character-girl-for-blender-a72311ac948846e185c7a6ab952d1f8d
Title: Hina 3D Anime Character Girl for Blender
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Anime(props) {
  const { nodes, materials } = useGLTF('/3dModel/anime/hina_3d_anime_character_girl_for_blender.glb')
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.N00_000_Hair_00_HAIR_Instance} skeleton={nodes.Object_7.skeleton} />
      <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.N00_000_00_FaceMouth_00_FACE_Instance} skeleton={nodes.Object_8.skeleton} />
      <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.N00_000_00_EyeIris_00_EYE_Instance} skeleton={nodes.Object_9.skeleton} />
      <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.N00_000_00_EyeHighlight_00_EYE_Instance} skeleton={nodes.Object_10.skeleton} />
      <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.N00_000_00_Face_00_SKIN_Instance} skeleton={nodes.Object_11.skeleton} />
      <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.N00_000_00_EyeWhite_00_EYE_Instance} skeleton={nodes.Object_12.skeleton} />
      <skinnedMesh geometry={nodes.Object_13.geometry} material={materials.N00_000_00_FaceBrow_00_FACE_Instance} skeleton={nodes.Object_13.skeleton} />
      <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.N00_000_00_FaceEyelash_00_FACE_Instance} skeleton={nodes.Object_14.skeleton} />
      <skinnedMesh geometry={nodes.Object_15.geometry} material={materials.N00_000_00_FaceEyeline_00_FACE_Instance} skeleton={nodes.Object_15.skeleton} />
      <skinnedMesh geometry={nodes.Object_16.geometry} material={materials.N00_000_00_Body_00_SKIN_Instance} skeleton={nodes.Object_16.skeleton} />
      <skinnedMesh geometry={nodes.Object_17.geometry} material={materials.N00_008_01_Shoes_01_CLOTH_Instance} skeleton={nodes.Object_17.skeleton} />
      <skinnedMesh geometry={nodes.Object_18.geometry} material={materials.N00_000_00_HairBack_00_HAIR_Instance} skeleton={nodes.Object_18.skeleton} />
      <skinnedMesh geometry={nodes.Object_19.geometry} material={materials.N00_002_03_Tops_01_CLOTH_Instance} skeleton={nodes.Object_19.skeleton} />
      <skinnedMesh geometry={nodes.Object_20.geometry} material={materials.N00_001_01_Bottoms_01_CLOTH_Instance} skeleton={nodes.Object_20.skeleton} />
      <skinnedMesh geometry={nodes.Object_21.geometry} material={materials.N00_002_01_Tops_01_CLOTH_Instance} skeleton={nodes.Object_21.skeleton} />
    </group>
  )
}

useGLTF.preload('/3dModel/anime/hina_3d_anime_character_girl_for_blender.glb')
