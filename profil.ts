import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { DataService } from '../data.service'
import { Preferences } from '@capacitor/preferences'
import { Camera, CameraResultType } from '@capacitor/camera'
import { AlertController } from '@ionic/angular'

@Component({
	selector: 'profil',
	templateUrl: 'profil.html',
	styleUrls: ['./profil.scss'],
})
export class Profil {
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private location: Location,
		private dataService: DataService,
		private alertController: AlertController,
	) { }
	kembali() { this.location.back() }

	data: any

	async ngOnInit() {
		let id = await Preferences.get({ key: 'id' })
		this.getData(id.value)
	}

	async refresh(event) {
		let id = await Preferences.get({ key: 'id' })
		this.getData(id.value)
		event.target.complete()
	}

	getData(id): void {
		this.dataService.getUser(id).subscribe(data => {
			this.data = data
			console.log(data)
		})
	}

	async logout() {
		await Preferences.remove({ key: 'id' })
		this.router.navigate(['/tabs/tab4'])
	}

	async foto() {
		const image = await Camera.getPhoto({
			quality: 20,
			resultType: CameraResultType.DataUrl,
			allowEditing: true
		})

		let id = await Preferences.get({ key: 'id' })
		let form: any = new FormData()
		form.append('user', id.value)
		form.append('foto', image.dataUrl)

		this.dataService.postFoto(form).subscribe(async data => {
			const alert = await this.alertController.create({
				header: 'Foto Berhasil Diubah',
				buttons: [{
					text: 'OK',
					handler: () => {
						this.getData(id.value)
					}
				}]
			})
			await alert.present()
		})
	}

	ubah() {
		this.router.navigate(['/tabs/tab4/ubah'])
	}

	produk() {
		this.router.navigate(['/tabs/tab4/produk-saya'])
	}
}