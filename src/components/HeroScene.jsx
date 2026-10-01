'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Lightformer, RoundedBox } from '@react-three/drei';
import { MathUtils } from 'three';

const ORANGE = '#ef6b3e';
const INK = '#182d36';
const CREAM = '#f2ede2';

function Glossy({ color, ...props }) {
  return <meshPhysicalMaterial color={color} roughness={0.22} metalness={0.05} clearcoat={1} clearcoatRoughness={0.12} {...props} />;
}

// The brand's ✳ mark as a chunky, extruded 3D object.
function Spark(props) {
  return (
    <group {...props}>
      {[0, 60, 120].map(angle => (
        <RoundedBox key={angle} args={[0.32, 1.7, 0.32]} radius={0.15} smoothness={4} rotation={[0, 0, MathUtils.degToRad(angle)]}>
          <Glossy color={ORANGE} />
        </RoundedBox>
      ))}
    </group>
  );
}

// A small backlit sign board, nodding to the studio's light boards.
function SignBoard(props) {
  return (
    <group {...props}>
      <RoundedBox args={[1.9, 1.15, 0.18]} radius={0.08} smoothness={4}>
        <Glossy color={INK} />
      </RoundedBox>
      <RoundedBox args={[1.4, 0.16, 0.06]} radius={0.03} position={[0, 0.2, 0.11]}>
        <meshStandardMaterial color={ORANGE} emissive={ORANGE} emissiveIntensity={1.6} toneMapped={false} />
      </RoundedBox>
      <RoundedBox args={[0.9, 0.1, 0.05]} radius={0.03} position={[-0.25, -0.15, 0.11]}>
        <meshStandardMaterial color={CREAM} emissive={CREAM} emissiveIntensity={0.6} />
      </RoundedBox>
    </group>
  );
}

// Positions are fractions of the visible viewport, kept clear of the headline column.
// `mobile` marks the shapes that still fit beside the stacked mobile layout.
const shapes = [
  { id: 'spark', at: [-0.04, 0.68, -0.5], scale: 0.62, speed: 1.4, node: <Spark /> },
  { id: 'ball', at: [-0.12, 0.05, -0.8], scale: 0.32, speed: 2, node: <mesh><sphereGeometry args={[0.7, 48, 48]} /><Glossy color={ORANGE} /></mesh> },
  { id: 'sign', at: [-0.13, -0.66, -1], scale: 0.55, speed: 1.1, rotation: [0.15, 0.45, -0.08], node: <SignBoard /> },
  { id: 'gem', at: [0.93, 0.82, -1.2], scale: 0.45, speed: 1.8, mobile: true, node: <mesh><icosahedronGeometry args={[0.8, 0]} /><Glossy color={CREAM} flatShading /></mesh> },
  { id: 'torus', at: [0.92, -0.8, -1.8], scale: 0.7, speed: 1.6, mobile: true, rotation: [1.1, 0.3, 0], node: <mesh><torusGeometry args={[0.75, 0.26, 32, 80]} /><Glossy color={INK} /></mesh> },
  { id: 'pill', at: [0.45, -0.95, -1.4], scale: 0.5, speed: 1.3, rotation: [0, 0, 1.3], node: <mesh><capsuleGeometry args={[0.32, 0.9, 12, 32]} /><Glossy color={CREAM} /></mesh> },
];

function Shapes({ animate }) {
  const group = useRef();
  const { viewport, pointer } = useThree();
  const compact = viewport.aspect < 1;

  useFrame((_, delta) => {
    if (!group.current) return;
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.5);
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, pointer.x * 0.18, 3, delta);
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, -pointer.y * 0.12 + scroll * 0.25, 3, delta);
    group.current.position.y = MathUtils.damp(group.current.position.y, scroll * 2.2, 4, delta);
  });

  return (
    <group ref={group}>
      {shapes.map(({ id, at: [x, y, z], scale, speed, rotation, mobile, node }) => {
        if (compact && !mobile) return null;
        return (
          <Float key={id} speed={animate ? speed : 0} rotationIntensity={animate ? 0.9 : 0} floatIntensity={animate ? 1.1 : 0}>
            <group position={[x * viewport.width / 2, y * viewport.height / 2, z]} scale={compact ? scale * 0.75 : scale} rotation={rotation}>
              {node}
            </group>
          </Float>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  const wrapper = useRef(null);
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setAnimate(!reduced.matches);
    update();
    reduced.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (wrapper.current) observer.observe(wrapper.current);
    return () => { reduced.removeEventListener('change', update); observer.disconnect(); };
  }, []);

  return (
    <div className="hero-scene" ref={wrapper} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 35 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={visible && animate ? 'always' : 'demand'}
        eventSource={typeof document !== 'undefined' ? document.body : undefined}
        eventPrefix="client"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 6, 6]} intensity={1.6} />
        <pointLight position={[-6, -3, 4]} intensity={30} color={ORANGE} />
        <Shapes animate={animate} />
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={3} position={[0, 4, 6]} scale={[10, 3, 1]} />
          <Lightformer form="rect" intensity={1.5} color={ORANGE} position={[-6, 0, 2]} rotation-y={Math.PI / 2} scale={[8, 4, 1]} />
          <Lightformer form="ring" intensity={2} position={[6, 2, 0]} rotation-y={-Math.PI / 2} scale={3} />
        </Environment>
      </Canvas>
    </div>
  );
}
