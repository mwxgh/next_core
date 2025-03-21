'use client' // Required for Next.js App Router to ensure client-side rendering

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' // Updated import path
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js' // Updated import path

const TextWithOrbit: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    let camera: THREE.PerspectiveCamera
    let scene: THREE.Scene
    let renderer: THREE.WebGLRenderer
    let controls: OrbitControls

    const init = () => {
      // Camera
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        10000,
      )
      camera.position.set(0, -400, 600)

      // Scene
      scene = new THREE.Scene()
      scene.background = new THREE.Color(0xf0f0f0)

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      mountRef.current!.appendChild(renderer.domElement)

      // Font loading and text creation
      const loader = new FontLoader()
      loader.load(
        'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
        (font) => {
          const color = 0x006699

          const matDark = new THREE.LineBasicMaterial({
            color: color,
            side: THREE.DoubleSide,
          })

          const matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide,
          })

          const message = 'Mai Van Tinh'
          const shapes = font.generateShapes(message, 100)
          const geometry = new THREE.ShapeGeometry(shapes)

          geometry.computeBoundingBox()
          const xMid =
            -0.5 *
            ((geometry.boundingBox?.max.x ?? 0) -
              (geometry.boundingBox?.min.x ?? 0))
          geometry.translate(xMid, 0, 0)

          // Text mesh
          const text = new THREE.Mesh(geometry, matLite)
          text.position.z = -150
          scene.add(text)

          // Line shapes for edges
          const holeShapes: THREE.Shape[] = []
          for (let i = 0; i < shapes.length; i++) {
            const shape = shapes[i]
            if (shape.holes && shape.holes.length > 0) {
              for (let j = 0; j < shape.holes.length; j++) {
                holeShapes.push(new THREE.Shape(shape.holes[j].getPoints()))
              }
            }
          }
          shapes.push(...holeShapes)

          const lineText = new THREE.Object3D()
          for (let i = 0; i < shapes.length; i++) {
            const shape = shapes[i]
            const points = shape.getPoints()
            const geometry = new THREE.BufferGeometry().setFromPoints(points)
            geometry.translate(xMid, 0, 0)

            const lineMesh = new THREE.Line(geometry, matDark)
            lineText.add(lineMesh)
          }
          scene.add(lineText)

          render()
        },
        undefined,
        (error) => console.error('Font loading failed:', error),
      )

      // OrbitControls
      controls = new OrbitControls(camera, renderer.domElement)
      controls.target.set(0, 0, 0)
      controls.update()
      controls.addEventListener('change', render)

      // Window resize listener
      window.addEventListener('resize', onWindowResize)
    }

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      render()
    }

    const render = () => {
      renderer.render(scene, camera)
    }

    // Initialize the scene
    init()

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize)
      controls.dispose()
      if (mountRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
}

export default TextWithOrbit
