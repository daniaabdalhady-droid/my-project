import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#bda99a');
    scene.fog = new THREE.Fog('#bda99a', 12, 27);

    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(9, 6.5, 11);
    camera.lookAt(0, 1.7, -0.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const material = (color, roughness = 0.6, metalness = 0) =>
      new THREE.MeshStandardMaterial({ color, roughness, metalness });
    const cream = material('#e9d9c8');
    const wallPink = material('#e9d0ca');
    const wood = material('#76513e');
    const darkWood = material('#49332a');
    const gold = material('#b18a5c', 0.3, 0.65);
    const marble = material('#eee6dc');
    const glass = new THREE.MeshPhysicalMaterial({
      color: '#e8f1ef', roughness: 0.08, metalness: 0.05,
      transmission: 0.45, transparent: true, opacity: 0.3, thickness: 0.3
    });
    const floorMat = material('#b69c87', 0.8);

    function box(w, h, d, mat, x, y, z, shadow = true) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = shadow;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    }
    function cylinder(rt, rb, h, mat, x, y, z, segments = 32) {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, segments), mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      scene.add(mesh);
      return mesh;
    }
    function sphere(r, mat, x, y, z) {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 24), mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      scene.add(mesh);
      return mesh;
    }

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.05;
    floor.receiveShadow = true;
    scene.add(floor);
    for (let x = -10; x <= 10; x += 1.5) box(0.015, 0.006, 18, material('#d2bba9'), x, 0, 0, false);
    for (let z = -8; z <= 8; z += 1.5) box(18, 0.006, 0.015, material('#d2bba9'), 0, 0, z, false);

    // Cafe walls and decorative trim
    box(15, 7, 0.3, wallPink, 0, 3.4, -4);
    box(0.3, 7, 10, cream, -7.3, 3.4, 0);
    box(0.3, 7, 10, cream, 7.3, 3.4, 0);
    box(14.5, 0.18, 0.12, gold, 0, 0.5, -3.78);
    box(14.5, 0.12, 0.12, wood, 0, 0.3, -3.78);
    for (let x = -6; x <= 6; x += 2) box(0.035, 2.1, 0.045, gold, x, 1.65, -3.79);

    // Sweet Bites wall sign
    box(3.4, 1.05, 0.2, darkWood, 0, 5.15, -3.72);
    box(3.25, 0.92, 0.06, gold, 0, 5.15, -3.59);
    const textCanvas = document.createElement('canvas');
    textCanvas.width = 1024; textCanvas.height = 256;
    const ctx = textCanvas.getContext('2d');
    ctx.fillStyle = '#fff0dd'; ctx.textAlign = 'center';
    ctx.font = 'bold 100px Georgia'; ctx.fillText('Sweet Bites', 512, 160);
    const signTexture = new THREE.CanvasTexture(textCanvas);
    signTexture.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 0.78),
      new THREE.MeshBasicMaterial({ map: signTexture, transparent: true }));
    sign.position.set(0, 5.15, -3.54); scene.add(sign);

    // Shelves and miniature cakes
    for (const y of [2.4, 3.55]) {
      box(5.1, 0.13, 0.65, wood, -1.5, y, -3.15);
      box(5.1, 0.045, 0.69, gold, -1.5, y - 0.09, -3.15);
      for (let x = -3.5; x <= 0.5; x += 2) cylinder(0.035, 0.035, 0.34, gold, x, y - 0.25, -3.1);
    }
    function cake(x, y, z, color) {
      cylinder(0.27, 0.28, 0.17, material(color), x, y, z);
      cylinder(0.18, 0.2, 0.1, material('#fff0df'), x, y + 0.13, z);
      sphere(0.075, material('#a54e49'), x, y + 0.24, z);
    }
    for (let x = -3.4; x <= 0.3; x += 1.25) {
      cake(x, 2.52, -3.02, '#d8a17e'); cake(x, 3.67, -3.02, '#d99b91');
    }
    function donut(x, y, z) {
      const mesh = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.075, 16, 32), material('#c98d64'));
      mesh.position.set(x, y, z); mesh.rotation.x = Math.PI / 2; mesh.castShadow = true; scene.add(mesh);
    }
    donut(-2.7, 2.9, -3); donut(-0.3, 2.9, -3); donut(-2.7, 4.05, -3);

    // Counter and glass dessert display
    box(5.6, 1.4, 1.45, wood, -0.1, 0.75, 1.35);
    box(5.75, 0.16, 1.62, marble, -0.1, 1.53, 1.35);
    box(5.3, 0.07, 0.06, gold, -0.1, 0.75, 2.09);
    for (let x = -2.4; x <= 2.1; x += 0.9) box(0.04, 0.95, 0.035, gold, x, 0.75, 2.09);
    box(2.3, 0.65, 0.85, darkWood, -0.7, 2, 1.05);
    box(2.3, 0.07, 0.85, marble, -0.7, 2.36, 1.05);
    box(2.25, 0.75, 0.035, glass, -0.7, 2.76, 0.63);
    box(0.035, 0.75, 0.85, glass, -1.83, 2.76, 1.05);
    box(0.035, 0.75, 0.85, glass, 0.43, 2.76, 1.05);
    box(2.25, 0.75, 0.035, glass, -0.7, 2.76, 1.47);
    box(2.3, 0.035, 0.88, glass, -0.7, 3.14, 1.05);
    cake(-1.35, 2.46, 1, '#dba18a'); cake(-0.65, 2.46, 1, '#e4b77f'); cake(0.05, 2.46, 1, '#bd8075');

    // Coffee machine, cups and warm pendant lights
    box(1.1, 0.75, 0.65, darkWood, 1.8, 2, 1.1);
    box(0.95, 0.18, 0.58, gold, 1.8, 2.47, 1.1);
    box(0.55, 0.3, 0.08, material('#d5c4b6', 0.25, 0.4), 1.8, 2.68, 1.4);
    for (const x of [1.55, 1.8, 2.05]) sphere(0.045, material('#e9c58b'), x, 2.65, 1.45);
    for (const x of [2.8, 3.35]) {
      cylinder(0.14, 0.18, 0.28, material('#fff4e9'), x, 1.75, 1.2);
      cylinder(0.13, 0.14, 0.025, material('#5b392a'), x, 1.9, 1.2);
    }
    for (const x of [-3.8, -1.1, 1.8, 4.1]) {
      cylinder(0.025, 0.025, 1.05, darkWood, x, 5.35, -1);
      cylinder(0.18, 0.4, 0.3, gold, x, 4.75, -1);
      sphere(0.12, material('#fff0d1'), x, 4.55, -1);
      const light = new THREE.PointLight('#ffcf9e', 18, 5);
      light.position.set(x, 4.5, -1); scene.add(light);
    }
    box(1.2, 1.2, 0.08, gold, 4.9, 3, -3.75);
    box(1.05, 1.05, 0.035, material('#b77d76'), 4.9, 3, -3.69);

    function plant(x, z) {
      cylinder(0.24, 0.32, 0.42, material('#aa7561'), x, 0.23, z);
      for (let i = 0; i < 5; i++) {
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), material('#557453'));
        leaf.scale.set(0.6, 1.9, 0.5);
        leaf.position.set(x + Math.cos(i * 1.25) * 0.18, 0.85 + Math.sin(i) * 0.15, z + Math.sin(i * 1.25) * 0.18);
        leaf.rotation.z = Math.cos(i * 1.25) * 0.4; leaf.castShadow = true; scene.add(leaf);
      }
    }
    plant(-5, 1.3); plant(5, -1.8);
    cylinder(0.55, 0.55, 0.09, marble, 4, 1.15, 2.8);
    cylinder(0.07, 0.09, 1.1, wood, 4, 0.6, 2.8);
    cylinder(0.55, 0.6, 0.08, darkWood, 4, 0.08, 2.8);

    scene.add(new THREE.HemisphereLight('#fff0e3', '#735c4e', 2));
    const sun = new THREE.DirectionalLight('#fff0dc', 3.2);
    sun.position.set(5, 9, 6); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -12; sun.shadow.camera.right = 12;
    sun.shadow.camera.top = 12; sun.shadow.camera.bottom = -12;
    scene.add(sun);

    let mouseX = 0, mouseY = 0, frameId;
    const onPointerMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('resize', onResize);
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      camera.position.x += (9 + mouseX * 0.35 - camera.position.x) * 0.025;
      camera.position.y += (6.5 - mouseY * 0.2 - camera.position.y) * 0.025;
      camera.lookAt(0, 1.7, -0.4);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((item) => item.dispose());
        }
      });
    };
  }, []);

  return <div className="three-scene" ref={mountRef} aria-hidden="true" />;
}