"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function ObjViewer({ objUrl, mtlUrl }: { objUrl: string; mtlUrl?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 2);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1); light.position.set(1, 1, 1);
    scene.add(light); scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const controls = new OrbitControls(camera, renderer.domElement);

    const load = async () => {
      if (mtlUrl) {
        const mtl = await new MTLLoader().loadAsync(mtlUrl);
        mtl.preload();
        const loader = new OBJLoader(); loader.setMaterials(mtl);
        const obj = await loader.loadAsync(objUrl);
        scene.add(obj);
      } else {
        const obj = await new OBJLoader().loadAsync(objUrl);
        scene.add(obj);
      }
    };
    load();

    let raf = 0;
    const tick = () => { renderer.render(scene, camera); raf = requestAnimationFrame(tick); };
    tick();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); el.removeChild(renderer.domElement); };
  }, [objUrl, mtlUrl]);

  return <div ref={ref} className="w-full h-[480px] rounded-2xl shadow" />;
}


