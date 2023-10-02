import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { DataService } from '../data.service'
import { Camera, CameraResultType } from '@capacitor/camera'
import { AlertController } from '@ionic/angular'
import { Preferences } from '@capacitor/preferences'

@Component({
	selector: 'upload',
	templateUrl: 'upload.html',
	styleUrls: ['./upload.scss'],
})
export class Upload {
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private location: Location,
		private dataService: DataService,
		private alertController: AlertController,
	) { }
	kembali() { this.location.back() }

	nama: string
	harga: number
	kategori: number
	deskripsi: string
	foto: string
	ktgArr: any[]

	ngOnInit(): void {
		this.getKtg()
	}

	getKtg(): void {
		this.dataService.getData('ktg produk').subscribe(data => {
			this.ktgArr = data
		})
	}

	async unggah() {
		const image = await Camera.getPhoto({
			quality: 20,
			resultType: CameraResultType.DataUrl
		})
		this.foto = image.dataUrl
	}

	async kirim() {
		let id = await Preferences.get({ key: 'id' })
		let form: any = new FormData()
		form.append('user', id.value)
		form.append('nama', this.nama)
		form.append('harga', this.harga)
		form.append('kategori', this.kategori)
		form.append('deskripsi', this.deskripsi)
		form.append('foto', this.foto)

		this.dataService.postProduk(form).subscribe(async data => {
			const alert = await this.alertController.create({
				header: 'Produk Berhasil Dikirim',
				buttons: [{
					text: 'OK',
					handler: () => {
						this.location.back()
					}
				}]
			})
			await alert.present()
		})
	}
}