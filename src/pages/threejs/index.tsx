import { useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//图片
import shawu from '../../assets/img/Earth.png';
import yao from '../../assets/img/Yao.png';
import bluehead from '../../assets/img/Bluehead.png';
import cat from '../../assets/img/Cat.png';
import catRight from '../../assets/img/Catright.png';
import didi from '../../assets/img/Didi.png';
import Lixy from '../../assets/img/Lixy.png';

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

    const spotLight=new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(10,10,30);
    spotLight.castShadow=true;
    scene.add(spotLight);

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
    camera.position.x =3; //设置相机位置
    camera.position.y = 3; //设置相机位置
    camera.position.z = 3; //设置相机位置
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer({
      antialias:true,
      alpha:true,
    }); //渲染器
    renderer.setSize(width, height);
    renderer.setClearColor(new THREE.Color(0xeeeeee));//设置渲染器的初始颜色
    container?.appendChild(renderer.domElement);

    //添加坐标系
    const axes=new THREE.AxesHelper(200);
    //scene.add(axes);

    //创建控制对象
    const controls=new OrbitControls(camera,renderer.domElement);
    //监听控制器的鼠标事件，执行渲染内容
    controls.addEventListener('change',()=>{
      renderer.render(scene, camera);
    });

    const geometry = new THREE.BoxGeometry(); //创建立方体
    const texture1 = new THREE.TextureLoader().load(yao); //添加纹理
    const texture2 = new THREE.TextureLoader().load(bluehead);
    const texture3 = new THREE.TextureLoader().load(cat);
    const texture4 = new THREE.TextureLoader().load(catRight);
    const texture5 = new THREE.TextureLoader().load(didi);
    const texture6 = new THREE.TextureLoader().load(Lixy);
    const material1 = new THREE.MeshLambertMaterial({ map: texture1 }); //立方体材质（颜色）
    const material2 = new THREE.MeshLambertMaterial({ map: texture2 });
    const material3 = new THREE.MeshLambertMaterial({ map: texture3 });
    const material4 = new THREE.MeshLambertMaterial({ map: texture4 });
    const material5 = new THREE.MeshLambertMaterial({ map: texture5 });
    const material6 = new THREE.MeshLambertMaterial({ map: texture6 });
    let materials: any[] | undefined=[material1,material2,material3,material4,material5,material6];
    const cube = new THREE.Mesh(geometry, materials); //创建网格对象
    cube.castShadow=true;//接受阴影
    scene.add(cube); //将网格对象添加到场景中

    const spotLight=new THREE.SpotLight(0xFFFFFF);//聚光灯
    spotLight.position.set(10,10,10);
    spotLight.castShadow=true;
    scene.add(spotLight);

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
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000d9 }); //立方体材质（颜色）
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

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000); //相机
    camera.position.x =30; //设置相机位置
    camera.position.y = 30; //设置相机位置
    camera.position.z = 30; //设置相机位置
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer(); //渲染器
    renderer.setSize(width, height);
    renderer.setClearColor(new THREE.Color(0xEEEEEE));//设置渲染器的初始颜色
    container?.appendChild(renderer.domElement);

    //添加坐标系
    const axes=new THREE.AxesHelper(200);
    scene.add(axes);

    const MAX_POINTS = 500;
    // geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    // draw range
    const drawCount = 20; // draw the first 2 points, only
    geometry.setDrawRange(0, drawCount);
    // material
    const material = new THREE.LineBasicMaterial({ color: 0xff0000d9 });
    // line
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    const animate = function () {
      //动画循环渲染
      requestAnimationFrame(animate);
      //line.position.x = 20;
      line.rotation.x += 0.03;
      line.rotation.y += 0.01;
      const positions2:any = line.geometry.attributes.position.array;
      let x, y, z, index;
      x = y = z = index = 0;

      for (let i = 0, l = MAX_POINTS; i < l; i++) {
        positions2[index++] = x;
        positions2[index++] = y;
        positions2[index++] = z;

        x += (Math.random() - 0.5) * 30;
        y += (Math.random() - 0.5) * 30;
        z += (Math.random() - 0.5) * 30;
      }
      //line.geometry.attributes.position.needsUpdate = true; // 需要加在第一次渲染之后
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
      {/* <div
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
      /> */}
      <div
        id="container3"
        style={{
          width: '400px',
          height: '400px',
          display: 'inline-block',
          marginLeft: '5px',
        }}
      />
      {/* <div
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
      /> */}
    </>
  );
}
