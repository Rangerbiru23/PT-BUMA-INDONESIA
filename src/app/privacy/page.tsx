'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react'

export default function PrivacyPage() {
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
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Kebijakan Privasi <span className="font-bold">PT BUMA INDONESIA</span>
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span> ("Kami") sangat memahami pentingnya privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan website dan layanan Kami.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                <strong>Tanggal Berlaku:</strong> 1 Januari 2024<br />
                <strong>Terakhir Diperbarui:</strong> 1 Januari 2024
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">1. Informasi yang Kami Kumpulkan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1.1 Informasi Pribadi</h3>
                    <p className="text-gray-600">Kami dapat mengumpulkan informasi pribadi Anda seperti:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat pengiriman</li>
                      <li>Informasi pembayaran</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1.2 Informasi Teknis</h3>
                    <p className="text-gray-600">Kami juga mengumpulkan informasi teknis seperti:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Alamat IP</li>
                      <li>Jenis browser</li>
                      <li>Sistem operasi</li>
                      <li>Data penggunaan website</li>
                      <li>Cookies dan data pelacakan</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">2. Penggunaan Informasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Kami menggunakan informasi Anda untuk:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Memproses pesanan dan pengiriman produk</li>
                    <li>Memberikan layanan pelanggan yang lebih baik</li>
                    <li>Mengirimkan informasi produk dan promosi</li>
                    <li>Meningkatkan kualitas website dan layanan</li>
                    <li>Melakukan analisis pasar dan penelitian</li>
                    <li>Memenuhi kewajiban hukum dan peraturan</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">3. Perlindungan Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span> berkomitmen untuk melindungi data pribadi Anda dengan:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Enkripsi data saat transmisi dan penyimpanan</li>
                    <li>Akses terbatas kepada informasi pribadi</li>
                    <li>Sistem keamanan yang terus diperbarui</li>
                    <li>Pelatihan rutin staf tentang keamanan data</li>
                    <li>Audit keamanan berkala</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">4. Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Website Kami menggunakan cookies untuk:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Mengingat preferensi Anda</li>
                    <li>Menganalisis traffic website</li>
                    <li>Mempersonalisasi pengalaman pengguna</li>
                    <li>Menampilkan iklan yang relevan</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Anda dapat mengatur cookies melalui pengaturan browser Anda.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">5. Berbagi Informasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Kami tidak menjual atau menyewakan informasi pribadi Anda. Kami hanya membagi informasi Anda dengan:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Penyedia jasa pengiriman untuk pengiriman produk</li>
                    <li>Bank dan penyedia pembayaran untuk proses transaksi</li>
                    <li>Otoritas hukum jika diwajibkan oleh peraturan</li>
                    <li>Partner bisnis dengan persetujuan Anda</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">6. Hak Anda</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Sebagai pengguna, Anda memiliki hak untuk:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Mengakses informasi pribadi Anda</li>
                    <li>Memperbarui atau mengoreksi data Anda</li>
                    <li>Menghapus informasi pribadi Anda</li>
                    <li>Menolak pemasaran langsung</li>
                    <li>Menarik persetujuan pemrosesan data</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">7. Penyimpanan Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Informasi pribadi Anda akan disimpan selama diperlukan untuk:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Memenuhi tujuan pengumpulan data</li>
                    <li>Memenuhi kewajiban hukum dan peraturan</li>
                    <li>Menyelesaikan perselisihan</li>
                    <li>Melindungi hak-hak hukum Kami</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">8. Link Pihak Ketiga</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Website Kami mungkin mengandung link ke website pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi dari website tersebut. Harap membaca kebijakan privasi dari setiap website yang Anda kunjungi.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">9. Perubahan Kebijakan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau email. Penggunaan terus-menerus website Anda setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">10. Kontak Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, silakan hubungi Kami:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700"><strong>PT BUMA INDONESIA</strong></p>
                    <p className="text-gray-600">JL. MENDUT I NOMOR 1, Kel. Kalipancur</p>
                    <p className="text-gray-600">Kec. Ngaliyan, Kota Semarang, Prop. Jawa Tengah</p>
                    <p className="text-gray-600">Email: privacy@bumaindonesia.co.id</p>
                    <p className="text-gray-600">Telepon: 0852-8570-3582</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Butuh Bantuan?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tim <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span> siap membantu Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 w-5 h-5" />
              Hubungi Kami
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Mail className="mr-2 w-5 h-5" />
              Kirim Email
            </Button>
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