"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Upload, ImageIcon, MapPin, Calendar, AlertTriangle, CheckCircle, X } from "lucide-react"
import Link from "next/link"
import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"

export default function UploadPage() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [disasterType, setDisasterType] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [recentUploads, setRecentUploads] = useState(() => {
      if (typeof window !== "undefined") {
          const saved = localStorage.getItem("recentUploads")
          return saved ? JSON.parse(saved) : []
      }
      return []
  })

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles((prev) => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".tiff", ".bmp"],
    },
    multiple: true,
  })

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleGenerate3DModel = async () => {
    setIsProcessing(true);

    // Convert files to base64
    const base64Images = await Promise.all(
      uploadedFiles.map(
        (file) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          })
      )
    );

    // Send to backend
    const response = await fetch('/api/process_images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ images: base64Images }),
    });

    const meshData = await response.json();

    // Save mesh data locally for the viewer page
    localStorage.setItem('latestMeshData', JSON.stringify(meshData));

    setIsProcessing(false);

    // Redirect to viewer page
    window.location.href = '/viewer';
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate upload and processing
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i)
      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    const newUpload = {
          name: `${disasterType.charAt(0).toUpperCase() + disasterType.slice(1)} - ${description.substring(0, 30)}...`,
          location,
          date: new Date().toLocaleString(),
          status: "Completed",
          images: uploadedFiles.length,
    }

    setRecentUploads((prev) => {
        const updated = [newUpload, ...prev]
        localStorage.setItem("recentUploads", JSON.stringify(updated))
        return updated
    })

    setUploadedFiles([])
    setIsProcessing(false)
    setUploadProgress(0)
    setDisasterType("")
    setLocation("")
    setDescription("")

    setTimeout(() => {
      setIsProcessing(false)
      setUploadProgress(0)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="relative bg-white border-b px-4 py-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/placeholder.svg?height=200&width=1200&text=Image+Upload+Processing')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Upload Disaster Images</h1>
              <p className="text-gray-600">Upload images to generate 3D reconstruction</p>
            </div>
          </div>
        </div>
      </header>

      <div className="relative min-h-screen bg-gray-50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1200&width=1600&text=Disaster+Site+Reconstruction')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Disaster Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Disaster Information
                </CardTitle>
                <CardDescription>Provide details about the disaster site for better AI processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="disaster-type">Disaster Type</Label>
                    <Select value={disasterType} onValueChange={setDisasterType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select disaster type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hurricane">Hurricane</SelectItem>
                        <SelectItem value="earthquake">Earthquake</SelectItem>
                        <SelectItem value="flood">Flood</SelectItem>
                        <SelectItem value="tornado">Tornado</SelectItem>
                        <SelectItem value="wildfire">Wildfire</SelectItem>
                        <SelectItem value="landslide">Landslide</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., San Juan, Puerto Rico"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the damage, affected structures, and any specific areas of concern..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Image Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Images
                </CardTitle>
                <CardDescription>
                  Upload multiple images from different angles for better 3D reconstruction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Dropzone */}
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <input {...getInputProps()} />
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  {isDragActive ? (
                    <p className="text-blue-600">Drop the images here...</p>
                  ) : (
                    <div>
                      <p className="text-gray-600 mb-2">Drag & drop images here, or click to select files</p>
                      <p className="text-sm text-gray-500">Supports JPEG, PNG, TIFF, BMP formats</p>
                    </div>
                  )}
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <Label>Uploaded Files ({uploadedFiles.length})</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <ImageIcon className="w-5 h-5 text-gray-500" />
                            <div>
                              <div className="text-sm font-medium truncate max-w-40">{file.name}</div>
                              <div className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                            </div>
                          </div>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Upload Guidelines */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Upload Guidelines</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Upload at least 10-15 images for best results</li>
                    <li>• Include images from multiple angles and distances</li>
                    <li>• Ensure good lighting and minimal blur</li>
                    <li>• Include both overview and detail shots</li>
                    <li>• Maximum file size: 50MB per image</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Processing Status */}
            {isProcessing && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
                    Processing Images
                  </CardTitle>
                  <CardDescription>AI is analyzing your images and generating 3D reconstruction</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Upload Progress</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="w-full" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Images uploaded successfully</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                      <span className="text-sm">Generating 3D model...</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                      <span className="text-sm">Calculating safe routes...</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline">
                Save as Draft
              </Button>
               <Button
                 type="button"
                 onClick={handleGenerate3DModel}
                 disabled={uploadedFiles.length === 0 || isProcessing}
                 className="bg-blue-600 hover:bg-blue-700"
               >
                 {isProcessing ? "Processing..." : "Generate 3D Model"}
               </Button>

            </div>
          </form>

          {/* Recent Uploads */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Uploads</CardTitle>
              <CardDescription>Your recently processed disaster sites</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUploads.map((upload, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <div className="font-medium">{upload.name}</div>
                        <div className="text-sm text-gray-500 flex items-center space-x-4">
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {upload.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {upload.date}
                          </span>
                          <span>{upload.images} images</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant={upload.status === "Completed" ? "secondary" : "outline"}
                        className={upload.status === "Completed" ? "bg-green-100 text-green-800" : ""}
                      >
                        {upload.status}
                      </Badge>
                      {upload.status === "Completed" && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/viewer">View 3D</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}