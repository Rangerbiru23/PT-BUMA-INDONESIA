'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Package, Truck, Shield, Star, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Solusi Terlengkap Peralatan Rumah Tangga",
      subtitle: "Kualitas terbaik untuk kebutuhan rumah tangga Anda",
      image: "/images/warehouse.jpg"
    },
    {
      title: "Distributor Terpercaya Sejak 2010",
      subtitle: "Melayani ribuan pelanggan dengan kepuasan maksimal",
      image: "/images/kitchen.jpg"
    },
    {
      title: "Harga Grosir Terbaik",
      subtitle: "Kompetitif untuk bisnis dan proyek Anda",
      image: "/images/warehouse.jpg"
    }
  ]

  const categories = [
    { name: "Peralatan Dapur", icon: "🍳", count: 500 },
    { name: "Peralatan Kebersihan", icon: "🧹", count: 300 },
    { name: "Peralatan Makan", icon: "🍽️", count: 400 },
    { name: "Dekorasi Rumah", icon: "🏠", count: 200 },
    { name: "Peralatan Laundry", icon: "👕", count: 150 },
    { name: "Peralatan Garden", icon: "🌱", count: 100 }
  ]

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Pengiriman Cepat",
      description: "Gratis ongkir untuk pembelian minimal Rp 5.000.000"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Garansi Resmi",
      description: "Semua produk bergaransi resmi dari produsen"
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Kualitas Terjamin",
      description: "Produk berkualitas tinggi dengan standar internasional"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Pelayanan Terbaik",
      description: "Tim profesional siap membantu kebutuhan Anda"
    }
  ]

  const testimonials = [
    {
      name: "Bapak Ahmad Wijaya",
      company: "PT. Sejahtera Bersama",
      text: "PT BUMA INDONESIA menjadi mitra terpercaya kami untuk kebutuhan peralatan rumah tangga proyek perumahan.",
      rating: 5
    },
    {
      name: "Ibu Siti Nurhaliza",
      company: "Hotel Permata Hati",
      text: "Kualitas produk dan pelayanan yang sangat memuaskan, recommended supplier!",
      rating: 5
    },
    {
      name: "Bapak Budi Santoso",
      company: "Toko Maju Jaya",
      text: "Harga grosir terbaik dan stok selalu tersedia, sangat membantu bisnis kami.",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="/images/logo.png"
                  alt="PT BUMA INDONESIA Logo"
                  className="w-10 h-10 rounded-lg"
                />
                <div className="ml-3">
                  <div className="text-xl font-bold text-gray-900">PT BUMA</div>
                  <div className="text-xs text-blue-600 font-semibold">INDONESIA</div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Produk</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-400/90 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src={slides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                🏆 Distributor Terpercaya
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Lihat Katalog
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Konsultasi Gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Company Highlight */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              <span className="text-blue-600">PT BUMA INDONESIA</span>
            </h2>
            <p className="text-lg text-gray-600">Perdagangan Besar Peralatan dan Perlengkapan Rumah Tangga Terpercaya</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600">13+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600">5000+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600">1650+</div>
              <div className="text-gray-600">Jenis Produk</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-gray-600">Merek Kerjasama</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Produk</h2>
            <p className="text-lg text-gray-600">Solusi lengkap untuk semua kebutuhan rumah tangga</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}+ Produk</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami</h2>
            <p className="text-lg text-gray-600">Keunggulan yang membuat <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span> menjadi pilihan utama</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimoni Pelanggan</h2>
            <p className="text-lg text-gray-600">Apa kata mereka tentang <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span></p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Melayani Kebutuhan Peralatan Rumah Tangga Anda?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Hubungi <span className="font-bold">PT BUMA INDONESIA</span> sekarang untuk mendapatkan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 w-5 h-5" />
              0852-8570-3582
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 w-5 h-5" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
            <p className="text-lg text-gray-600">Hubungi kami untuk informasi lebih lanjut</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
                <p className="text-gray-600">0852-8570-3582</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Alamat</h3>
                <p className="text-gray-600 text-sm">
                  JL. MENDUT I NOMOR 1, Kel. Kalipancur<br />
                  Kec. Ngaliyan, Kota Semarang<br />
                  Prop. Jawa Tengah
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@bumaindonesia.co.id</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/images/logo.png"
                  alt="PT BUMA INDONESIA Logo"
                  className="w-10 h-10 rounded-lg"
                />
                <div className="ml-3">
                  <div className="text-xl font-bold text-white">PT BUMA</div>
                  <div className="text-sm text-blue-400">INDONESIA</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Perdagangan Besar Peralatan dan Perlengkapan Rumah Tangga Terpercaya di Indonesia
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Peralatan Dapur</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Peralatan Kebersihan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dekorasi Rumah</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Peralatan Laundry</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PT BUMA INDONESIA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}