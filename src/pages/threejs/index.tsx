import { useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//图片
import earth from '../../assets/img/Earth.png';

export default function ThreejsPage() {
  useEffect(() => {
    /*初始化配置*/
    const container = document.getElementById('container');
    const width = 400;
    const height = 400;
    /*加载3D*/
    const scene = new THREE.Scene(); //场景

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); //相机
    camera.position.z = 5; //设置相机位置

    const renderer = new THREE.WebGLRenderer(); //渲染器
    renderer.setSize(width, height);
    container?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(); //创建立方体
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //立方体材质（颜色）
    const cube = new THREE.Mesh(geometry, material); //创建网格对象
    scene.add(cube); //将网格对象添加到场景中

    const animate = function () {
      //动画循环渲染
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }, []);
  useEffect(() => {
    /*初始化配置*/
    const container = document.getElementById('container2');
    const width = 400;
    const height = 400;
    /*加载3D*/
    const scene = new THREE.Scene(); //场景

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); //相机
    camera.position.z = 5; //设置相机位置

    const renderer = new THREE.WebGLRenderer(); //渲染器
    renderer.setSize(width, height);
    container?.appendChild(renderer.domElement);

    const points = [];
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(new THREE.Vector3(1, 0, 0));
    points.push(new THREE.Vector3(2, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points); //几何体
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff }); //线条材质（颜色）
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    const animate = function () {
      //动画循环渲染
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  useEffect(() => {
    /*初始化配置*/
    const container = document.getElementById('container3');
    const width = 400;
    const height = 400;
    /*加载3D*/
    const scene = new THREE.Scene(); //场景

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); //相机
    camera.position.z = 5; //设置相机位置

    const renderer = new THREE.WebGLRenderer(); //渲染器
    renderer.setSize(width, height);
    container?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(); //创建立方体
    const texture = new THREE.TextureLoader().load(earth); //添加纹理
    const material = new THREE.MeshBasicMaterial({ map: texture }); //立方体材质（颜色）
    const cube = new THREE.Mesh(geometry, material); //创建网格对象
    scene.add(cube); //将网格对象添加到场景中

    const animate = function () {
      //动画循环渲染
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }, []);
  useEffect(() => {
    /*初始化配置*/
    const container = document.getElementById('container4');
    const width = 400;
    const height = 400;
    /*加载3D*/
    const scene = new THREE.Scene(); //场景

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); //相机
    camera.position.z = 50; //设置相机位置

    const renderer = new THREE.WebGLRenderer(); //渲染器
    renderer.setSize(width, height);
    container?.appendChild(renderer.domElement);

    const loader = new FontLoader(); //加载字体
    loader.load('helvetiker_regular.typeface.json', function (font) {
      const geometry = new TextGeometry('Hello three.js!', {
        font: font,
        size: 8,
        height: 1,
        curveSegments: 12,

        //  bevelEnabled: true,
        //  bevelThickness: 20,
        // bevelSize: 8,
        // bevelSegments: 5
      });
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //立方体材质（颜色）
      const fonts = new THREE.Mesh(geometry, material); //创建网格对象
      scene.add(fonts);

      const animate = function () {
        //动画循环渲染
        requestAnimationFrame(animate);
        fonts.position.x = -32;
        fonts.rotation.x += 0.03;
        // fonts.rotation.y += 0.01;

        renderer.render(scene, camera);
      };
      animate();
    });
  }, []);
  useEffect(() => {
    /*初始化配置*/
    const container = document.getElementById('container5');
    const width = 400;
    const height = 400;
    /*加载3D*/
    const scene = new THREE.Scene(); //场景

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); //相机
    //camera.position.z = 5; //设置相机位置

    const renderer = new THREE.WebGLRenderer(); //渲染器
    renderer.setSize(width, height);
    container?.appendChild(renderer.domElement);

    const MAX_POINTS = 500;
    // geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    // draw range
    const drawCount = 200; // draw the first 2 points, only
    geometry.setDrawRange(0, drawCount);
    // material
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    // line
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    const animate = function () {
      //动画循环渲染
      requestAnimationFrame(animate);
      // fonts.position.x = -32;
      // fonts.rotation.x += 0.03;
      // fonts.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
    // positions = line.geometry.attributes.position.array;
    // let x, y, z, index;
    // x = y = z = index = 0;
    // for (let i = 0, l = MAX_POINTS; i < l; i++) {
    //   positions[index++] = x;
    //   positions[index++] = y;
    //   positions[index++] = z;
    //   x += (Math.random() - 0.5) * 30;
    //   y += (Math.random() - 0.5) * 30;
    //   z += (Math.random() - 0.5) * 30;
    // }
  }, []);
  return (
    <>
      <div
        id="container"
        style={{ width: '400px', height: '400px', display: 'inline-block' }}
      />
      <div
        id="container2"
        style={{
          width: '400px',
          height: '400px',
          display: 'inline-block',
          marginLeft: '5px',
        }}
      />
      <div
        id="container3"
        style={{
          width: '400px',
          height: '400px',
          display: 'inline-block',
          marginLeft: '5px',
        }}
      />
      <div
        id="container4"
        style={{
          width: '400px',
          height: '400px',
          display: 'inline-block',
          marginLeft: '5px',
        }}
      />
      <div
        id="container5"
        style={{
          width: '400px',
          height: '400px',
          display: 'inline-block',
        }}
      />
    </>
  );
}
