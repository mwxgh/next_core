'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Add ambient light (soft overall lighting)
    const ambientLight = new THREE.AmbientLight(0x404040, 1) // Color, intensity
    scene.add(ambientLight)

    // Add directional light (like sunlight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Object 1: Sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32) // Radius, widthSegments, heightSegments
    const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 }) // Red, Phong for lighting
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(-2, 0, 0) // Position it slightly left
    scene.add(sphere)

    // Object 2: Torus (donut shape)
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.3, 16, 100) // Radius, tube, radialSegments, tubularSegments
    const torusMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 }) // Green
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    torus.position.set(2, 0, 0) // Position it slightly right
    scene.add(torus)

    // Object 3: Plane (floor)
    const planeGeometry = new THREE.PlaneGeometry(10, 10) // Width, height
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: 0x999999,
      side: THREE.DoubleSide,
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = Math.PI / 2 // Rotate to lie flat
    plane.position.y = -1.5 // Move below objects
    scene.add(plane)

    // Position camera
    camera.position.set(0, 2, 5)
    camera.lookAt(0, 0, 0)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate objects
      sphere.rotation.y += 0.01
      torus.rotation.y += 0.02
      plane.rotation.z += 0.005

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      sphereGeometry.dispose()
      torusGeometry.dispose()
      planeGeometry.dispose()
      sphereMaterial.dispose()
      torusMaterial.dispose()
      planeMaterial.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
}

export default ThreeScene
