"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Route, AlertTriangle, Users, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"
import * as THREE from "three"

// 3D Scene Components
function DisasterSite() {
  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>

      {/* Damaged Building */}
      <group position={[-3, 0, -2]}>
        {/* Main structure */}
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[4, 4, 3]} />
          <meshStandardMaterial color="#A0A0A0" />
        </mesh>

        {/* Collapsed section */}
        <mesh position={[2, -0.5, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[2, 3, 3]} />
          <meshStandardMaterial color="#808080" />
        </mesh>

        {/* Debris */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[Math.random() * 6 - 3, Math.random() * 0.5, Math.random() * 4 - 2]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
          >
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color="#606060" />
          </mesh>
        ))}
      </group>

      {/* Intact Building */}
      <mesh position={[4, 1.5, 1]}>
        <boxGeometry args={[3, 5, 2]} />
        <meshStandardMaterial color="#B0B0B0" />
      </mesh>

      {/* Trees */}
      <group position={[-6, 0, 3]}>
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 2]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 2.5, 0]}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
      </group>
    </group>
  )
}

function SafeRoute() {
  // memoize to avoid re-creating on every render
  const geometry = useMemo(() => {
    const pts = [
      new THREE.Vector3(-8, 0, -5),
      new THREE.Vector3(-5, 0, -3),
      new THREE.Vector3(-2, 0, 0),
      new THREE.Vector3(1, 0, 2),
      new THREE.Vector3(3, 0, 3),
    ]
    return new THREE.BufferGeometry().setFromPoints(pts)
  }, [])

  return (
    <line geometry={geometry}>
      <lineBasicMaterial attach="material" color="#22C55E" linewidth={4} />
    </line>
  )
}

function DangerZones() {
  return (
    <group>
      {/* Danger zone markers */}
      <mesh position={[-1, 0.1, -2]}>
        <cylinderGeometry args={[1.5, 1.5, 0.1]} />
        <meshStandardMaterial color="#EF4444" transparent opacity={0.3} />
      </mesh>
      <mesh position={[2, 0.1, 0]}>
        <cylinderGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color="#EF4444" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function Markers() {
  return (
    <group>
      {/* Survivor location */}
      <Html position={[3, 2, 3]} center>
        <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
          <Users className="w-3 h-3 mr-1" />
          Survivors
        </div>
      </Html>

      {/* Entry point */}
      <Html position={[-8, 1, -5]} center>
        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
          <MapPin className="w-3 h-3 mr-1" />
          Entry
        </div>
      </Html>

      {/* Hazard warning */}
      <Html position={[-1, 2, -2]} center>
        <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
          <AlertTriangle className="w-3 h-3 mr-1" />
          Unstable
        </div>
      </Html>
    </group>
  )
}

export default function ViewerPage() {
  const [selectedRoute, setSelectedRoute] = useState("optimal")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">3D Disaster Site Viewer</h1>
              <p className="text-gray-600">Hurricane Maria - Building Complex Alpha</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="destructive">High Risk</Badge>
            <Badge variant="secondary">
              <Clock className="w-3 h-3 mr-1" />
              Updated 2h ago
            </Badge>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* 3D Viewer */}
        <div className="flex-1 relative">
          <Canvas camera={{ position: [10, 8, 10], fov: 60 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <DisasterSite />
            <SafeRoute />
            <DangerZones />
            <Markers />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Environment preset="sunset" />
          </Canvas>

          {/* 3D Controls Overlay */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <h3 className="font-semibold mb-2">3D Controls</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>• Left click + drag: Rotate</div>
              <div>• Right click + drag: Pan</div>
              <div>• Scroll: Zoom</div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-80 bg-white border-l overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Site Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Site Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-500">Location</div>
                  <div className="text-sm">San Juan, Puerto Rico</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Disaster Type</div>
                  <div className="text-sm">Hurricane Maria</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Damage Level</div>
                  <Badge variant="destructive">Severe</Badge>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Last Updated</div>
                  <div className="text-sm">2 hours ago</div>
                </div>
              </CardContent>
            </Card>

            {/* Route Planning */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Route className="w-5 h-5 mr-2" />
                  Route Planning
                </CardTitle>
                <CardDescription>AI-generated safe paths to reach survivors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Optimal Route</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Recommended
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600">Distance: 45m • Est. Time: 8 min • Risk: Low</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Alternative Route</span>
                    <Badge variant="outline" className="border-orange-300 text-orange-600">
                      Caution
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600">Distance: 32m • Est. Time: 6 min • Risk: Medium</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full w-1/2"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hazard Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Hazard Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Structural Collapse Risk</span>
                  <Badge variant="destructive">High</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Debris Obstruction</span>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Medium
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Ground Stability</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Good
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Weather Conditions</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Clear
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Survivors Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Survivors Detected
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl font-bold text-red-600">3 People</div>
                <div className="text-sm text-gray-600">Located in northeast section of building complex</div>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Last Contact:</span> 45 minutes ago
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Signal Strength:</span> Weak
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Estimated Condition:</span> Stable
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700">Deploy Rescue Team</Button>
              <Button variant="outline" className="w-full">
                Export Route Data
              </Button>
              <Button variant="outline" className="w-full">
                Share with Command Center
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
