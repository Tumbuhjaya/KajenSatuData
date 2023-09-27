import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Desa } from './data'

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private http: HttpClient) { }
	// url: string = 'http://localhost/opensid/public/api/'
	url: string = 'https://ksd.pekalongankab.go.id/api/'
	
	getData(ktg: string): Observable<any> {
		let data
		if (ktg == 'wisata sejarah') {
			data = this.http.get(this.url+'wisata-sejarah.php')
		} else if (ktg == 'wisata alam') {
			data = this.http.get(this.url+'wisata-alam.php')
		} else if (ktg == 'wisata religi') {
			data = this.http.get(this.url+'wisata-religi.php')
		} else if (ktg == 'wisata pendidikan') {
			data = this.http.get(this.url+'wisata-pendidikan.php')
		} else if (ktg == 'wisata kuliner') {
			data = this.http.get(this.url+'wisata-kuliner.php')
		} else if (ktg == 'wisata buatan') {
			data = this.http.get(this.url+'wisata-buatan.php')
		} else if (ktg == 'seni tari') {
			data = this.http.get(this.url+'seni-tari.php')
		} else if (ktg == 'acara kebudayaan') {
			data = this.http.get(this.url+'kebudayaan.php')
		} else if (ktg == 'pasar') {
			data = this.http.get(this.url+'pasar.php')
		} else if (ktg == 'spbu') {
			data = this.http.get(this.url+'spbu.php')
		} else if (ktg == 'terminal') {
			data = this.http.get(this.url+'terminal.php')
		} else if (ktg == 'rth') {
			data = this.http.get(this.url+'rth.php')
		} else if (ktg == 'taman') {
			data = this.http.get(this.url+'taman.php')
		} else if (ktg == 'apotek') {
			data = this.http.get(this.url+'apotek.php')
		} else if (ktg == 'klinik') {
			data = this.http.get(this.url+'klinik.php')
		} else if (ktg == 'dokter') {
			data = this.http.get(this.url+'dokter.php')
		} else if (ktg == 'opd') {
			data = this.http.get(this.url+'opd.php')
		} else if (ktg == 'berita') {
			data = this.http.get('https://pekalongankab.go.id/api/berita.php?halaman=1')
		} else if (ktg == 'web opd') {
			data = this.http.get(this.url+'opd.php')
		} else if (ktg == 'web kelurahan') {
			data = this.http.get(this.url+'web-kelurahan.php')
		} else if (ktg == 'web desa') {
			data = this.http.get(this.url+'web-desa.php')
		} else if (ktg == 'web vertikal') {
			data = this.http.get(this.url+'web-vertikal.php')
		} else if (ktg == 'ap pemerintah') {
			data = this.http.get(this.url+'ap-pemerintah.php')
		} else if (ktg == 'ap publik') {
			data = this.http.get(this.url+'ap-publik.php')
		} else if (ktg == 'pengumuman') {
			data = this.http.get(this.url+'pengumuman.php')
		} else if (ktg == 'infografis') {
			data = this.http.get(this.url+'infografis.php')
		} else if (ktg == 'desa') {
			// data = this.http.get(this.url+'desa.php')
			data = of(Desa)
		} else if (ktg == 'surat') {
			data = this.http.get(this.url+'surat.php')
		} else if (ktg == 'lelang') {
			data = this.http.get(this.url+'lelang.php')
		} else if (ktg == 'ktg produk') {
			data = this.http.get(this.url+'produk-ktg.php')
		}

		return data
	}

	getKec(id: number): Observable<any> {
		return this.http.get(this.url+'kec.php?id='+id)
	}

	getWisata(id: number): Observable<any> {
		return this.http.get(this.url+'wisata-id.php?id='+id)
	}

	getSeni(id: number): Observable<any> {
		return this.http.get(this.url+'seni-id.php?id='+id)
	}

	getFasilitas(id: number): Observable<any> {
		return this.http.get(this.url+'fasilitas-id.php?id='+id)
	}

	getOpd(id: number): Observable<any> {
		return this.http.get(this.url+'opd-id.php?id='+id)
	}

	getDesa(id: number): Observable<any> {
		return this.http.get(this.url+'desa-id.php?id='+id)
	}

	getPengumuman(id: number): Observable<any> {
		return this.http.get(this.url+'pengumuman2.php?id='+id)
	}

	getPengumumanId(id: number): Observable<any> {
		return this.http.get(this.url+'pengumuman2-id.php?id='+id)
	}

	getInfo(id: number): Observable<any> {
		return this.http.get(this.url+'desa-id.php?id='+id)
	}

	getDusun(id: number): Observable<any> {
		return this.http.get(this.url+'dusun.php?id='+id)
	}

	getPerangkat(id: number): Observable<any> {
		return this.http.get(this.url+'perangkat.php?id='+id)
	}

	getPerangkatId(id: number): Observable<any> {
		return this.http.get(this.url+'perangkat-id.php?id='+id)
	}

	getBumdes(id: number): Observable<any> {
		return this.http.get(this.url+'bumdes.php?id='+id)
	}

	getBumdesId(id: number): Observable<any> {
		return this.http.get(this.url+'bumdes-id.php?id='+id)
	}

	getStatistik(id: number): Observable<any> {
		return this.http.get(this.url+'statistik.php?id='+id)
	}

	getBantuan(id: number): Observable<any> {
		return this.http.get(this.url+'bantuan.php?id='+id)
	}

	getBantuanId(id: number): Observable<any> {
		return this.http.get(this.url+'bantuan-id.php?id='+id)
	}

	getTanah(id: number): Observable<any> {
		return this.http.get(this.url+'tanah.php?id='+id)
	}

	getTanahId(id: number): Observable<any> {
		return this.http.get(this.url+'tanah-id.php?id='+id)
	}

	getPembangunan(id: number): Observable<any> {
		return this.http.get(this.url+'pembangunan.php?id='+id)
	}

	getPembangunanId(id: number): Observable<any> {
		return this.http.get(this.url+'pembangunan-id.php?id='+id)
	}

	getKeuangan(id: number, jenis: number): Observable<any> {
		return this.http.get(this.url+'keuangan.php?id='+id+'&&jenis='+jenis)
	}

	getUmkm(id: number): Observable<any> {
		return this.http.get(this.url+'umkm.php?id='+id)
	}

	getUmkmId(id: number): Observable<any> {
		return this.http.get(this.url+'umkm-id.php?id='+id)
	}

	getBerita(page: number): Observable<any> {
		return this.http.get('https://pekalongankab.go.id/public/api/berita-pekalongankab.php?halaman='+page)
	}

	getBeritaId(id: number): Observable<any> {
		return this.http.get(this.url+'berita-id.php?id='+id)
	}

	getGaleri(id: number): Observable<any> {
		return this.http.get(this.url+'galeri.php?id='+id)
	}

	getGaleriId(id: number): Observable<any> {
		return this.http.get(this.url+'galeri-id.php?id='+id)
	}

	getPotensi(id: number): Observable<any> {
		return this.http.get(this.url+'potensi.php?id='+id)
	}

	getPotensiId(id: number): Observable<any> {
		return this.http.get(this.url+'potensi-id.php?id='+id)
	}

	getSurat(id: number): Observable<any> {
		return this.http.get(this.url+'surat-id.php?id='+id)
	}

	postNik(form: any): Observable<any> {
		return this.http.post(this.url+'nik.php', form)
	}

	postSurat(form: any): Observable<any> {
		return this.http.post(this.url+'surat-save.php', form)
	}

	postProduk(form: any): Observable<any> {
		return this.http.post(this.url+'produk-save.php', form)
	}

	getUser(id: number): Observable<any> {
		return this.http.get(this.url+'user.php?id='+id)
	}

	postLogin(form: any): Observable<any> {
		return this.http.post(this.url+'login.php', form)
	}

	postBuat(form: any): Observable<any> {
		return this.http.post(this.url+'buat.php', form)
	}

	getProduk(ktg: string): Observable<any> {
		return this.http.get(this.url+'produk.php?ktg='+ktg)
	}

	getProdukId(id: number): Observable<any> {
		return this.http.get(this.url+'produk-id.php?id='+id)
	}

	getProdukUser(user: number): Observable<any> {
		return this.http.get(this.url+'produk-user.php?user='+user)
	}

	getUserUmkm(limit): Observable<any> {
		return this.http.get(this.url+'user-umkm.php?limit='+limit)
	}   

	postFoto(form: any): Observable<any> {
		return this.http.post(this.url+'foto.php', form)
	}

	getProdukCari(kunci: string): Observable<any> {
		return this.http.get(this.url+'produk-cari.php?kunci='+kunci)
	}

	postUbah(form: any): Observable<any> {
		return this.http.post(this.url+'ubah.php', form)
	}

	delProduk(id: number): Observable<any> {
		return this.http.get(this.url+'produk-hapus.php?id='+id)
	}
}