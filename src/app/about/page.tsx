'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Users, Award, Target, Clock, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Kualitas Terbaik",
      description: "Kami hanya menyediakan produk berkualitas tinggi dengan standar internasional"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Kepuasan Pelanggan",
      description: "Kepuasan pelanggan adalah prioritas utama kami dalam setiap layanan"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Profesionalisme",
      description: "Tim profesional yang berpengalaman siap melayani kebutuhan Anda"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Tepat Waktu",
      description: "Pengiriman tepat waktu dan pelayanan yang responsif"
    }
  ]

  const milestones = [
    { year: "2010", event: "PT BUMA INDONESIA didirikan" },
    { year: "2012", event: "Memperluas jaringan distribusi ke 5 kota besar" },
    { year: "2015", event: "Kerjasama dengan 50+ merek ternama" },
    { year: "2018", event: "Mencapai 3000+ pelanggan setia" },
    { year: "2020", event: "Digitalisasi sistem dan layanan online" },
    { year: "2024", event: "Menjadi distributor terpercaya di Jawa Tengah" }
  ]

  const team = [
    {
      name: "Direktur Utama",
      description: "Memimpin visi dan misi perusahaan dengan pengalaman 20+ tahun di industri perdagangan"
    },
    {
      name: "Manajer Operasional",
      description: "Mengelola operasional harian dan memastikan kualitas layanan terbaik"
    },
    {
      name: "Manajer Penjualan",
      description: "Membangun hubungan dengan pelanggan dan mengembangkan jaringan bisnis"
    },
    {
      name: "Tim Customer Service",
      description: "Siap membantu dan melayani kebutuhan pelanggan dengan responsif"
    }
  ]

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
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="/about" className="text-blue-600 font-semibold">Tentang</a>
              <a href="/#products" className="text-gray-700 hover:text-blue-600 transition-colors">Produk</a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Tentang Perusahaan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              PT BUMA INDONESIA
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Perdagangan Besar Peralatan dan Perlengkapan Rumah Tangga Terpercaya di Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Solusi Lengkap untuk Kebutuhan Rumah Tangga Anda
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span> adalah perusahaan perdagangan besar yang berfokus pada penyediaan peralatan dan perlengkapan rumah tangga berkualitas tinggi. Sejak didirikan pada tahun 2010, kami telah menjadi mitra terpercaya untuk ribuan pelanggan di seluruh Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dengan komitmen terhadap kualitas dan pelayanan terbaik, kami menyediakan lebih dari 1.650 jenis produk dari 50+ merek ternama untuk memenuhi kebutuhan rumah tangga, hotel, restoran, dan proyek komersial lainnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Lihat Katalog Produk
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Hubungi Sales Kami
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">13+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5000+</div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">1650+</div>
                  <div className="text-gray-600">Jenis Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50+</div>
                  <div className="text-gray-600">Merek Kerjasama</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
            <p className="text-lg text-gray-600">Arah dan tujuan kami untuk masa depan</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Menjadi distributor terdepan dan terpercaya dalam penyediaan peralatan dan perlengkapan rumah tangga di Indonesia, dengan mengutamakan kualitas produk dan kepuasan pelanggan.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Menyediakan produk berkualitas tinggi dengan harga kompetitif
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Memberikan pelayanan terbaik dan responsif kepada pelanggan
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Terus berinovasi dan mengembangkan jaringan distribusi
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Membangun hubungan jangka panjang dengan mitra bisnis
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Perusahaan</h2>
            <p className="text-lg text-gray-600">Prinsip yang memandu setiap tindakan kami</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Kami</h2>
            <p className="text-lg text-gray-600">Milestone penting dalam sejarah <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span></p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <div className="text-gray-600">{milestone.event}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Profesional Kami</h2>
            <p className="text-lg text-gray-600">Orang-orang di balik kesuksesan <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span></p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-600">Siap membantu kebutuhan Anda</p>
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
                <li><a href="/#products" className="hover:text-white transition-colors">Peralatan Dapur</a></li>
                <li><a href="/#products" className="hover:text-white transition-colors">Peralatan Kebersihan</a></li>
                <li><a href="/#products" className="hover:text-white transition-colors">Dekorasi Rumah</a></li>
                <li><a href="/#products" className="hover:text-white transition-colors">Peralatan Laundry</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">Tentang Kami</a></li>
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