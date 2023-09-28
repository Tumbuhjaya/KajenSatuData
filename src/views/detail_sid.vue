<template>
  <ion-page>
    <ion-header style="box-shadow: none;">
      <div class="box-header">
        <div class="box-title">
          <ion-icon :icon="arrowBackCircleOutline" size="large" style="position: absolute;left:0;top:0;bottom: 0;margin:auto;color: #fff;" @click="$router.push('/sid')"></ion-icon>
          <!-- <ion-icon :icon="arrow-back-outline"></ion-icon> -->
          <h6 style="font-size: 20px;font-weight: bold;color: #fff;">DETAIL DESA</h6>
      </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" id="page-dashboard">
      <div style="width: 100%;height: 40px;background-color: #4c87f2;position: absolute;left:0;right: 0;top:90px;border-bottom-left-radius: 30px;border-bottom-right-radius: 30px;"></div>

      <ion-img v-if="data.foto" :src="data.foto" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-img v-else src="/assets/shape-001.png" style="position: fixed;bottom:0;left:0;right:0;"></ion-img>
      <ion-grid style="padding: 60px 15px !important;">
        <ion-row style="margin-bottom: 15px;">
          <ion-col size="12" style="padding: 0;">
            <div style="width: 100%;background-color: #fff;display: flex;">
              
              <div style="width:50%;margin-right: 15px;height: 160px;display: flex;justify-content: center;align-items: flex-start;flex-direction: column;">
                <h6 style="font-size: 16px;"><strong>{{ data.nama }}</strong></h6>
                <h6 style="font-size: 14px;margin-top: 10px !important;font-weight: normal;">{{ data.kec }}</h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;"></h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;">{{ data.email }}</h6>
                <h6 style="font-size: 14px;margin-top: 5px !important;font-weight: normal;">{{ data.web }}</h6>
              </div>
              <div style="width: 50%;position: relative;">
                <ion-img src="https://placehold.co/100" style="width:100%;height:160px;object-fit: cover;"></ion-img>

                <div style="width: 100%;padding: 10px;background-color: rgba(0, 0, 0, 0.2);position: absolute;left:0;right:0;bottom:0;">
                  <h6 style="font-size: 10px;text-align: center;"><strong>{{ data.kepala }}</strong></h6>
                  <h6 style="font-size: 10px;margin-top: 5px !important;font-weight: normal;text-align: center;">Kepala Desa</h6>
                </div>
              </div>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <div style="width: 100%;height: 2px;background-color: #D3D3D3;"></div>
          </ion-col>
        </ion-row>

        <!-- <ion-row style="margin-top: 30px;">
          <ion-col size="12">
            <h6 style="font-size: 16px;text-align: center;"><strong>VISI</strong></h6>
            <h6 style="font-size: 12px;font-weight: normal;margin-top: 15px !important;text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur cupiditate quisquam quis ipsam esse sunt est voluptate fugiat aut.</h6>
          </ion-col>

          <ion-col size="12" style="margin-top: 30px;">
            <h6 style="font-size: 16px;text-align: center;"><strong>MISI</strong></h6>
            <h6 style="font-size: 12px;font-weight: normal;;margin-top: 15px !important;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur cupiditate quisquam quis ipsam esse sunt est voluptate fugiat aut.</h6>
          </ion-col>
        </ion-row> -->

        <ion-row style="margin-top: 15px;">
          <ion-col size="12">
            <ion-accordion-group>
              <ion-accordion value="visimisi" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Visi dan Misi</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <h6 style="font-size: 16px;"><strong>Visi</strong></h6>
                  <h6 style="font-size: 14px;margin-top: 15px !important;font-weight: normal;">{{ data.visi }}</h6>
                  <!-- jika tidak ada data visi tampilkan dibawah ini -->
                  <!-- <h6 style="font-size: 14px;margin-top: 15px !important;font-weight: normal;">-</h6> -->
                  <h6 style="font-size: 16px;margin-top: 30px !important;"><strong>Misi</strong></h6>
                  <h6 style="font-size: 14px;margin-top: 15px !important;font-weight: normal;">{{ data.misi }}</h6>
                  <!-- jika tidak ada data misi tampilkan dibawah ini -->
                  <!-- <h6 style="font-size: 14px;margin-top: 15px !important;font-weight: normal;">-</h6> -->
                </div>
              </ion-accordion>
              <ion-accordion value="pengumuman" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Pengumuman</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>
              <ion-accordion value="dusun" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Dusun</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>
              <ion-accordion value="perangkatdesa" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Perangkat Desa</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="bumdes" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>BUMDes</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="statistik" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Statistik</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;margin-bottom: 15px !important;"><strong>Berdasarkan Jenis Kelamin</strong></h6>
                  <div style="display: table;width: 100%;">
                    <div style="display: table-row;">
                      <div style="display: table-cell;width: 50%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Laki-laki</h6>
                      </div>
                      <div style="display: table-cell;width: 5%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Perempuan</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>
                  </div>

                  <h6 style="font-size: 16px;margin-bottom: 15px !important;margin-top: 30px !important;"><strong>Berdasarkan Agama</strong></h6>
                  <div style="display: table;width: 100%;">
                    <div style="display: table-row;">
                      <div style="display: table-cell;width: 50%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Islam</h6>
                      </div>
                      <div style="display: table-cell;width: 5%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Kristen</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Katholik</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Hindu</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Budha</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Khonghucu</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>
                  </div>

                  <h6 style="font-size: 16px;margin-bottom: 15px !important;margin-top: 30px !important;"><strong>Berdasarkan Golongan Darah</strong></h6>
                  <div style="display: table;width: 100%;">
                    <div style="display: table-row;">
                      <div style="display: table-cell;width: 50%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Golongan Darah A</h6>
                      </div>
                      <div style="display: table-cell;width: 5%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Golongan Darah B</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Golongan Darah AB</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Golongan Darah O</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Tidak Tahu</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>
                  </div>

                  <h6 style="font-size: 16px;margin-bottom: 15px !important;margin-top: 30px !important;"><strong>Berdasarkan Status Hubungan dalam Keluarga</strong></h6>
                  <div style="display: table;width: 100%;">
                    <div style="display: table-row;">
                      <div style="display: table-cell;width: 50%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Kepala Keluarga</h6>
                      </div>
                      <div style="display: table-cell;width: 5%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Suami</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Istri</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Anak</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Menantu</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Cucu</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Orang Tua</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Mertua</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Famili Lain</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Pembantu</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Lainnya</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>
                  </div>

                  <h6 style="font-size: 16px;margin-bottom: 15px !important;margin-top: 30px !important;"><strong>Berdasarkan Status Kawin</strong></h6>
                  <div style="display: table;width: 100%;">
                    <div style="display: table-row;">
                      <div style="display: table-cell;width: 50%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Belum Kawin</h6>
                      </div>
                      <div style="display: table-cell;width: 5%;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Kawin</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Cerai Hidup</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Cerai Mati</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Budha</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>

                    <div style="display: table-row;">
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">Khonghucu</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">:</h6>
                      </div>
                      <div style="display: table-cell;padding:5px 0">
                        <h6 style="font-size: 14px;font-weight: normal;">0</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </ion-accordion>

              <ion-accordion value="progbantuan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Program Bantuan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="pertanahan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Pertanahan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="pembangunan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Pembangunan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="keuangan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Keuangan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="umkm" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>UMKM</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="layanansurat" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Layanan Surat</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <ion-list lines="full">
                    <ion-item @click="$router.push('/sid/detail_by_kec')"> 
                      <ion-label>Keterangan Pengantar</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Keterangan Penduduk</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Biodata Penduduk</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Keterangan Pindah Penduduk</ion-label>
                    </ion-item>
                    <ion-item>
                      <ion-label>Keterangan Jual Beli</ion-label>
                    </ion-item>
                  </ion-list>
                </div>
              </ion-accordion>

              <ion-accordion value="galerifoto" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Galeri Foto</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="petadesa" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Peta Desa</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="potensidesa" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Potensi Desa</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>

              <ion-accordion value="channeldesa" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Channel Desa</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                </div>
              </ion-accordion>
            </ion-accordion-group>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonAccordion,IonAccordionGroup, IonList, IonItem, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton, IonLabel, IonImg, IonButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { Desa } from "../../data.ts";
import { ip_server } from "@/ip-config";
import axios  from "axios";
import moment from "moment";
moment.locale("id");
export default defineComponent({
  components: {
    IonAccordion,
    IonAccordionGroup,
    IonList,
    IonItem,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow, 
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonImg,
    IonButton,
    IonButtons,
    IonIcon,
    
  },
  setup() {
      return { arrowBackCircleOutline };
    },
  data() {
    return {
      id: this.$route.params.id,
      data:{},
      segment: "data1",
    };
  },
  methods: {

    toLogin() {
      this.$router.push("/login");
    },
    segmentChanged(e) {
      this.segment = e.detail.value;
      this.class();
    },
    class() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    async get_data(){
      let hsl = await axios({
      method: "get",
        url:ip_server+`desa-id.php?id=${this.id}`,
      })
      this.data = hsl.data
      console.log(this.data);
    },
  },
  async created() {
    await this.get_data()
  }
});
</script>

<style scoped>
.box-header{
  width: 100%;
  height: ;
  background-color: #4c87f2;
  padding: 15px 35px;
}

.box-header .box-title{
  width: 100%;
  height: 70px;
  background-color: ;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
