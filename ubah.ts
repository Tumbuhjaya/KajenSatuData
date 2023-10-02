import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { DataService } from '../data.service'
import { AlertController } from '@ionic/angular'
import { HttpClient } from '@angular/common/http'
import { Preferences } from '@capacitor/preferences'

@Component({
	selector: 'ubah',
	templateUrl: 'ubah.html',
	styleUrls: ['./ubah.scss'],
})
export class Ubah {
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private location: Location,
		private dataService: DataService,
		private alertController: AlertController,
		private http: HttpClient
	) { }
	kembali() { this.location.back() }

	data: any[]
	nama: string
	desa: number
	ktg: number
	wa: string
	password: string = ''

	ngOnInit(): void {
		this.getData()
	}

	async getData() {
		let id = await Preferences.get({ key: 'id' })
		this.dataService.getUser(Number(id.value)).subscribe(data => {
			this.nama = data.nama
			this.desa = Number(data.id_desa)
			this.ktg = data.ktg
			this.wa = data.wa
			console.log(data)
		})

		this.dataService.getData('desa').subscribe(data => this.data = data)
	}

	async oke() {
		let id = await Preferences.get({ key: 'id' })
		let form: any = new FormData()
		form.append('id', id.value)
		form.append('nama', this.nama)
		form.append('desa', this.desa)
		form.append('ktg', this.ktg)
		form.append('wa', this.wa)
		form.append('password', this.password)

		this.dataService.postUbah(form).subscribe(async data => {
			const alert = await this.alertController.create({
				header: 'Profil Berhasil Diubah',
				buttons: [{
					text: 'OK',
					handler: () => {
						this.location.back()
					}
				}]
			})
			await alert.present()
			// console.log(data)
		})
	}
}