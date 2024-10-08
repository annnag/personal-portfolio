import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

export const Computer = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const computer = useGLTF("../assets/about/apple_desktop/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor={"black"} />
      <pointLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={3.5 + offset / 1000}
        position={[-4, -4, -1]}
        rotation={[0, 46.4 - offset / 800, 0]}
      />
    </mesh>
  );
};

export const ComputerCanvas = () => {
  return (
    <Canvas
      style={{ height: "400px", maxWidth: "700px", width: "500px" }}
      frameloop="demand"
      shadows
      camera={{ position: [30, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>
    </Canvas>
  );
};
