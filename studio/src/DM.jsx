import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/DM.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials.SVGMat} rotation={[Math.PI / 2, 0, 0]} scale={12.549} />
    </group>
  )
}

useGLTF.preload('/DM.glb')
