import React, {  useLayoutEffect , Suspense, useRef} from 'react'
import { useGLTF, MeshReflectorMaterial, Environment, Stage, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, extend, useThree, } from '@react-three/fiber'
import * as THREE from "three"

 function DPM3D(props) {
  const ref = useRef()
    const { nodes, materials, scene } = useGLTF('/untitled.gltf')
    useFrame((state, delta) => (ref.current.rotation.y += 0.01))
    useLayoutEffect(() => {
        console.log(nodes)
            Object.assign(nodes.beard.material, { roughness: 0, metalness: 1, emissive: new THREE.Color('#000000')})
            Object.assign(nodes.hair.material, { roughness: 0, metalness: 1, emissive: new THREE.Color('#000000')})
            Object.assign(nodes.eyebrows.material, { roughness: 0, metalness: 1, emissive: new THREE.Color('#000000')})
            Object.assign(nodes.lefttopline.material, { roughness: 1, metalness: 2, emissive: new THREE.Color('#FFD700')})
            Object.assign(nodes.lighterright.material, { roughness: 0, metalness: 1, emissive: new THREE.Color('#C0F0EE')})
            Object.assign(nodes.lefteyeline.material, { roughness: 0, metalness: 1, emissive: new THREE.Color('#FFD700')})
            Object.assign(nodes.nosejoinline.material, { roughness: 0.2, metalness: 1, emissive: new THREE.Color('#FFD700')})
            Object.assign(nodes.leftsideundereye.material, { roughness: 0.2, metalness: 1, emissive: new THREE.Color('#FFD700')})
            Object.assign(nodes.rightside.material, { roughness: 0.2, metalness: 1, emissive: new THREE.Color('#8AACAB')})
            Object.assign(nodes.leftside.material, { roughness: 0.2, metalness: 0, emissive: new THREE.Color('#00ced1')})
            Object.assign(nodes.body.material, { roughness: 0.2, metalness: 1, emissive: new THREE.Color('#E7E7E7')})
            Object.assign(nodes.lighterrighttop.material, { roughness: 0.2, metalness: 1, emissive: new THREE.Color('#FFD700')})
            // Object.assign(nodes.nose.material, { roughness: 0.2, metalness: 1, emissive: new THREE.Color('#00AB84')})
            
            // Object.assign(nodes.leftlinetop.material, { roughness: 0.2, metalness: 1, emissive: new THREE.Color('#00AB84')})
            // Object.assign(nodes.leftcheekline.material, { roughness: 0.2, metalness: 1, emissive: new THREE.Color('#00AB84')})
            // Object.assign(nodes.rightscar.material, { roughness: 0.2, metalness: 1, emissive: new THREE.Color('#00AB84')})
           

        }, [scene, nodes, materials])
        return (
          <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.beard.geometry} material={nodes.beard.material} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.eyebrows.geometry} material={nodes.eyebrows.material} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.body.geometry} material={materials.body} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.eyeleft.geometry} material={materials.eyeleft} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.eyeright.geometry} material={materials.eyeright} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.leftside.geometry} material={materials.leftside} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.rightside.geometry} material={materials.rightside} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.lefttopline.geometry} material={materials.lefttopline} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.lefteyeline.geometry} material={materials.lefteyeline} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.leftsideundereye.geometry} material={materials.leftsideundereye} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.nosejoinline.geometry} material={materials.Material} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.lighterright.geometry} material={materials.lighterright} position={[0.03, 0.01, 0.06]} />
      <mesh geometry={nodes.hair.geometry} material={materials.hair} position={[0.01, -0.06, 0.05]} />
      <mesh geometry={nodes.lighterrighttop.geometry} material={materials.lighterrighttop} position={[0.03, 0.01, 0.06]} />
    </group>
          )
  }



function App() {
  return (
    <Canvas gl={{ alpha: true }}
  
     style={{backgroundColor: "grey" , display: "block" , height: "100vh", width: "100vw"}}>

    {/* <ambientLight intensity={4} /> */}
   
    
      <Suspense fallback={'null'} >
      <Stage environment={null} intensity={1} contactShadow={true} shadowBias={-0.0015}>
            <DPM3D scale={1} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
            />
            </Stage>
            
        </Suspense>
  </Canvas>
  );
}

export default App;
