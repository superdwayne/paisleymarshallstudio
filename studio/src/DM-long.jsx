import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/DM-long.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve001.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} scale={20} />
    </group>
  )
}

useGLTF.preload('/DM-long.glb')
