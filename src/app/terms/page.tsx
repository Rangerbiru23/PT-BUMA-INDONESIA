'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react'

export default function TermsPage() {
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
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Syarat dan Ketentuan Penggunaan Website <span className="font-bold">PT BUMA INDONESIA</span>
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Selamat datang di website <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span>. Syarat dan Ketentuan ini mengatur penggunaan website dan layanan yang Kami sediakan. Dengan mengakses atau menggunakan website Kami, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                <strong>Tanggal Berlaku:</strong> 1 Januari 2024<br />
                <strong>Terakhir Diperbarui:</strong> 1 Januari 2024
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">1. Definisi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Dalam Syarat dan Ketentuan ini:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>"Website"</strong> merujuk pada website resmi PT BUMA INDONESIA</li>
                    <li><strong>"Kami"</strong> merujuk pada PT BUMA INDONESIA</li>
                    <li><strong>"Anda"</strong> merujuk pada pengguna website</li>
                    <li><strong>"Produk"</strong> merujuk pada peralatan dan perlengkapan rumah tangga yang Kami jual</li>
                    <li><strong>"Layanan"</strong> merujuk pada semua layanan yang Kami sediakan melalui website</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">2. Penerimaan Syarat dan Ketentuan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dengan mengakses, browsing, atau menggunakan website Kami, Anda menyatakan bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari Syarat dan Ketentuan ini, Anda tidak boleh menggunakan website Kami.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">3. Kelayakan Penggunaan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Website Kami hanya tersedia untuk:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Individu yang berusia minimal 18 tahun atau telah menikah</li>
                    <li>Badan usaha yang sah secara hukum di Indonesia</li>
                    <li>Pengguna yang memiliki kapasitas hukum untuk mengikat kontrak</li>
                    <li>Pengguna yang tidak berada dalam daftar sanksi atau larangan</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">4. Produk dan Layanan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">4.1 Ketersediaan Produk</h3>
                      <p className="text-gray-600">
                        Kami berusaha untuk memastikan ketersediaan produk yang ditampilkan di website. Namun, ketersediaan produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">4.2 Harga dan Pembayaran</h3>
                      <p className="text-gray-600">
                        Harga produk yang tercantum di website dapat berubah tanpa pemberitahuan sebelumnya. Kami berhak menolak pesanan jika harga yang ditampilkan salah.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">4.3 Spesifikasi Produk</h3>
                      <p className="text-gray-600">
                        Kami berusaha untuk menyajikan informasi produk yang akurat. Namun, Kami tidak menjamin bahwa deskripsi produk bebas dari kesalahan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">5. Pemesanan dan Pembayaran</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">5.1 Proses Pemesanan</h3>
                      <p className="text-gray-600">
                        Pemesanan produk melalui website merupakan penawaran untuk membeli. Kami berhak menerima atau menolak penawaran tersebut.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">5.2 Pembayaran</h3>
                      <p className="text-gray-600">
                        Pembayaran harus dilakukan sesuai dengan metode yang tersedia. Transaksi yang tidak selesai dalam waktu yang ditentukan akan dibatalkan secara otomatis.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">5.3 Konfirmasi Pesanan</h3>
                      <p className="text-gray-600">
                        Konfirmasi pesanan akan dikirim melalui email. Konfirmasi tersebut bukan merupakan penerimaan pesanan, melainkan pemberitahuan bahwa Kami telah menerima pesanan Anda.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">6. Pengiriman</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">6.1 Waktu Pengiriman</h3>
                      <p className="text-gray-600">
                        Waktu pengiriman yang tercantum adalah perkiraan dan dapat berubah tergantung pada ketersediaan produk dan kondisi pengiriman.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">6.2 Biaya Pengiriman</h3>
                      <p className="text-gray-600">
                        Biaya pengiriman akan ditampilkan sebelum Anda menyelesaikan pesanan. Beberapa produk mungkin memenuhi syarat untuk pengiriman gratis.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">6.3 Resiko Pengiriman</h3>
                      <p className="text-gray-600">
                        Resiko kehilangan atau kerusakan produk akan beralih kepada Anda setelah produk diserahkan kepada jasa pengiriman.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">7. Kebijakan Pengembalian</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">7.1 Pengembalian Produk</h3>
                      <p className="text-gray-600">
                        Produk dapat dikembalikan dalam kondisi asli dan tidak digunakan dalam waktu 7 hari sejak tanggal penerimaan.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">7.2 Produk yang Tidak Dapat Dikembalikan</h3>
                      <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                        <li>Produk yang sudah digunakan atau rusak</li>
                        <li>Produk dengan segel yang sudah dibuka</li>
                        <li>Produk dengan masa kadaluarsa terbatas</li>
                        <li>Produk kustom atau pesanan khusus</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">8. Hak Kekayaan Intelektual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, logo, desain, dan software, dilindungi oleh hak kekayaan intelektual milik <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span> atau pihak ketiga yang berwenang.
                  </p>
                  <p className="text-gray-600">
                    Anda tidak diperbolehkan menggunakan, menyalin, mereproduksi, atau mendistribusikan konten dari website ini tanpa izin tertulis dari Kami.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">9. Larangan Penggunaan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Anda dilarang untuk:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Menggunakan website untuk tujuan ilegal atau tidak sah</li>
                    <li>Mengirimkan virus atau malware melalui website</li>
                    <li>Mengganggu atau merusak fungsi website</li>
                    <li>Mengumpulkan informasi pribadi pengguna lain</li>
                    <li>Memposting konten yang melanggar hukum atau hak pihak ketiga</li>
                    <li>Melakukan aktivitas penipuan atau phising</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">10. Privasi Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi Kami. Dengan menggunakan website ini, Anda setuju dengan pengumpulan dan penggunaan data pribadi Anda sesuai dengan Kebijakan Privasi yang berlaku.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">11. Batasan Tanggung Jawab</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Sejauh diizinkan oleh hukum, <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span> tidak bertanggung jawab atas:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                    <li>Kehilangan data atau keuntungan</li>
                    <li>Kerusakan yang disebabkan oleh penggunaan website</li>
                    <li>Keterlambatan atau gangguan layanan</li>
                    <li>Konten dari pihak ketiga yang terhubung dengan website</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">12. Indemnifikasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Anda setuju untuk mengganti rugi, membela, dan membebaskan <span className="text-blue-600 font-semibold">PT BUMA INDONESIA</span> dan direksi, karyawan, serta agennya dari setiap klaim, kerugian, atau biaya yang timbul dari pelanggaran Anda terhadap Syarat dan Ketentuan ini.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">13. Perubahan Syarat dan Ketentuan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Kami berhak untuk mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan berlaku efektif segera setelah dipublikasikan di website. Penggunaan terus-menerus website Anda setelah perubahan berarti Anda menerima Syarat dan Ketentuan yang diperbarui.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">14. Penghentian Penggunaan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Kami berhak untuk menghentikan atau menangguhkan akses Anda ke website kapan saja, dengan atau tanpa alasan, dan tanpa pemberitahuan sebelumnya.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">15. Hukum yang Berlaku</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui peradilan di Kota Semarang, Jawa Tengah.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">16. Kontak Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi Kami:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700"><strong>PT BUMA INDONESIA</strong></p>
                    <p className="text-gray-600">JL. MENDUT I NOMOR 1, Kel. Kalipancur</p>
                    <p className="text-gray-600">Kec. Ngaliyan, Kota Semarang, Prop. Jawa Tengah</p>
                    <p className="text-gray-600">Email: legal@bumaindonesia.co.id</p>
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