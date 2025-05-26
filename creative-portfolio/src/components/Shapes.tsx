"use client"

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Float, Environment } from "@react-three/drei"
import { Suspense, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import type { ThreeEvent } from "@react-three/fiber"

// Export default Shapes component
export default function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      {/* Adjust Canvas size and camera settings */}
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 75], // Move camera further back
          fov: 30,
          near: 1,
          far: 120, // Increase far plane to accommodate larger scene
        }}
      >
        <Suspense fallback={null}>
          <Geometries />
          {/* Adjust shadow scale to match larger objects */}
          <ContactShadows
            position={[0, -10, 0]}
            opacity={0.65}
            scale={120} // Increase shadow scale
            blur={0.5}
            far={27} // Increase far shadow distance
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Function to generate geometries
function Geometries() {
    const geometries = [
      {
        position: [0, 0, 0],
        r: 0.3,
        geometry: new THREE.IcosahedronGeometry(3), // Gem
      },
      {
        position: [2, -2, 6],
        r: 0.4,
        geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), // Pill
      },
      {
        position: [-3, 3, -4],
        r: 0.6,
        geometry: new THREE.DodecahedronGeometry(1.5), // Soccer ball
      },
      {
        position: [-2, -2, 5],
        r: 0.5,
        geometry: new THREE.TorusGeometry(0.8, 0.25, 16, 40), // Donut
      },
      {
        position: [3.5, 3, -4],
        r: 0.7,
        geometry: new THREE.OctahedronGeometry(1.5), // Diamond
      },
    ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 0.5,
      color: 0x2980b9,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 0.5,
    }),
  ];

  // Initialize sound effects
  const [soundEffects, setSoundEffects] = useState<HTMLAudioElement[]>([]);

  useEffect(() => {
    // Only set up audio in browser environment
    if (typeof window !== 'undefined') {
      setSoundEffects([
        new Audio("/sounds/hit1.ogg"),
        new Audio("/sounds/hit2.ogg"),
        new Audio("/sounds/hit3.ogg"),
        new Audio("/sounds/hit4.ogg"),
        new Audio("/sounds/hit6.ogg"),
        new Audio("/sounds/water-drop-85731.mp3"),
        new Audio("/sounds/metal-crunch-263638.mp3"),
      ]);
    }
  }, []);

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 3)} // Scale positions by 3
      soundEffects={soundEffects}
      geometry={geometry}
      materials={materials}
      r={r}
    />
  ))
}

// Function to render individual geometry
function Geometry({
  r,
  position,
  geometry,
  materials,
  soundEffects
}: {
  r: number,
  position: number[],
  geometry: THREE.BufferGeometry,
  materials: THREE.Material[],
  soundEffects: HTMLAudioElement[]
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e: ThreeEvent<MouseEvent>) {
    // Cast to THREE.Mesh to access material property
    const mesh = e.object as THREE.Mesh;

    // Only play sound if sounds are loaded and browser supports audio
    if (soundEffects.length > 0) {
      const sound = gsap.utils.random(soundEffects);
      // Reset audio to start if it's already playing
      sound.currentTime = 0;
      // Play the sound
      sound.play().catch(error => {
        // Handle any errors with audio playback
        console.log("Audio play error:", error);
      });
    }

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  }

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      setVisible(true);
      if (meshRef.current) {
        gsap.from(meshRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          delay: 0.3,
        });
      }
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <group position={position as [number, number, number]} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={7 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
          scale={[3, 3, 3]} // Scale mesh by 3 times
        />
      </Float>
    </group>
  )
}
