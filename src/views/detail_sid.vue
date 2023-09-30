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
                  <h6 style="font-size: 14px;margin-top: 15px !important;font-weight: normal;">{{ data.visi? data.visi:'-' }}</h6>
                  <!-- jika tidak ada data visi tampilkan dibawah ini -->
                  <!-- <h6 style="font-size: 14px;margin-top: 15px !important;font-weight: normal;">-</h6> -->
                  <h6 style="font-size: 16px;margin-top: 30px !important;"><strong>Misi</strong></h6>
                  <h6 style="font-size: 14px;margin-top: 15px !important;font-weight: normal;">{{ data.misi?data.misi:'-' }}</h6>
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
                  <h6 style="font-size: 16px;"><strong>{{ pengumuman.isi?pengumuman.isi:'Belum Ada Data' }}</strong></h6>
                </div>
              </ion-accordion>
              <ion-accordion value="dusun" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Dusun</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6 v-if="dusun.length==0" style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in dusun" :key="id" >
                      <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Dusun : {{ item.nama }}</strong></h6>
                    </ion-item>
                    <ion-item>
                      <h6 style="font-size: 16px;"><strong>Kepala Dusun : {{ item.kepala }}</strong></h6>
                    </ion-item>
                    <ion-item>
                      <h6 style="font-size: 16px;"><strong>NIK : {{ item.nik }}</strong></h6>
                    </ion-item>
                    </div>
                  </ion-list>
                </div>
              </ion-accordion>
              <ion-accordion value="perangkatdesa" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Perangkat Desa</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6  v-if="perangkat.length==0"  style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in perangkat" :key="id" >
                      <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Nama : {{ item.nama }}</strong></h6>
                    </ion-item>
                    <ion-item>
                      <h6 style="font-size: 16px;"><strong>Jabatan : {{ item.jabatan }}</strong></h6>
                    </ion-item>
                    <ion-item>
                      <h6 style="font-size: 16px;"><strong>NIK : {{ item.nik }}</strong></h6>
                    </ion-item>
                    </div>
                  </ion-list>
                </div>
              </ion-accordion>

              <ion-accordion value="bumdes" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>BUMDes</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6  v-if="bumdes.length==0"   style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in bumdes" :key="id" >
                      <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Nama : {{ item.nama }}</strong></h6>
                    </ion-item>
                      <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Deskripsi : {{ item.deskripsi }}</strong></h6>
                    </ion-item>
                    </div>
                  </ion-list>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[0] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[1] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[2] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[3] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[4] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[5] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[6] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[7] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[8] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[9] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[10] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[11] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[12] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[13] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[14] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[15] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[16] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[17] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[18] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[19] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[20] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[21] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[22] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[23] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[24] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[25] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[26] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[27] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[28] }}</h6>
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
                        <h6 style="font-size: 14px;font-weight: normal;">{{ statistik[29] }}</h6>
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
                  <h6  v-if="bantuan.length==0"   style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in bantuan" :key="id" >
                      <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Nama : {{ item.nama }}</strong></h6>
                    </ion-item>
                    <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Dana : {{ item.dana }}</strong></h6>
                    </ion-item>
                    <ion-item  >
                      <h6 style="font-size: 16px;"><strong>peserta : {{ item.peserta }}</strong></h6>
                    </ion-item>
                    </div>
                  </ion-list>
                </div>
              </ion-accordion>

              <ion-accordion value="pertanahan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Pertanahan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6  v-if="pertanahan.length==0"   style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in pertanahan" :key="id" >
                      <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Nama : {{ item.nama }}</strong></h6>
                    </ion-item>
                    <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Dana : {{ item.dana }}</strong></h6>
                    </ion-item>
                    <ion-item  >
                      <h6 style="font-size: 16px;"><strong>peserta : {{ item.peserta }}</strong></h6>
                    </ion-item>
                    </div>
                  </ion-list>
                </div>
              </ion-accordion>

              <ion-accordion value="pembangunan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Pembangunan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6  v-if="pembangunan.length==0"   style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in pembangunan" :key="id" >
                      <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Nama : {{ item.nama }}</strong></h6>
                    </ion-item>
                    </div>
                  </ion-list>
                </div>
              </ion-accordion>

              <ion-accordion value="keuangan" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Keuangan</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6  v-if="keuangan.length==0"   style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in keuangan" :key="id" >
                      <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Nama : {{ item.nama }}</strong></h6>
                    </ion-item>
                    </div>
                  </ion-list>
                </div>
              </ion-accordion>

              <ion-accordion value="umkm" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>UMKM</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6  v-if="umkm.length==0"   style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in umkm" :key="id" >
                      <ion-item  >
                      <h6 style="font-size: 16px;"><strong>Nama : {{ item.nama }}</strong></h6>
                    </ion-item>
                    </div>
                  </ion-list>
                </div>
              </ion-accordion>

              <ion-accordion value="layanansurat" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Layanan Surat</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <ion-list lines="full">
                    <ion-item   v-for="(item,idx) in surat" :key="idx"  @click="$router.push('/sid/layanan_surat/'+item.id_surat+'/'+id )"> 
                      <ion-label>{{ item.nama }}</ion-label>
                    </ion-item>
                    <!-- <ion-item>
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
                    </ion-item> -->
                  </ion-list>
                </div>
              </ion-accordion>

              <ion-accordion value="galerifoto" style="margin-bottom: 15px;border-radius: 10px;">
                <ion-item slot="header" color="primary">
                  <ion-label>Galeri Foto</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content" style="border-left:2px solid #f4f5f8;border-right:2px solid #f4f5f8;border-bottom:2px solid #f4f5f8">
                  <!-- jika data tidak ada tampilkan notif dibawah ini -->
                  <h6  v-if="galeri.length==0"   style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in galeri" :key="id" >
                      <ion-item>
                        <img :src="item.foto" alt="">
                    </ion-item>
                    </div>
                  </ion-list>
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
                  <h6  v-if="potensi.length==0"   style="font-size: 16px;"><strong>Belum Ada Data</strong></h6>
                  <ion-list lines="full" v-else>
                    <div  v-for="(item,id) in potensi" :key="id" >
                      <ion-item>
                        <img :src="item.foto" alt="">
                    </ion-item>
                    </div>
                  </ion-list>
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
      surat:[],
      data:{},
      pengumuman:{},
      dusun:[],
      segment: "data1",
      perangkat:[],
      bumdes:[],
      statistik:[],
      bantuan:[],
      pertanahan:[],
      pembangunan:[],
      keuangan:[],
      umkm:[],
      galeri:[],
      potensi:[],
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
    async get_surat(){
      let hsl = await axios({
      method: "get",
        url:ip_server+`surat.php`,
      })
      this.surat = hsl.data
      console.log(this.surat);
    },
    async get_pengumuman(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`pengumuman2.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.pengumuman = hsl.data
      }
      console.log(this.pengumuman);
    },
    async get_dusun(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`dusun.php?id=${this.id}`,
      })
      console.log(hsl.data,'dusun');
      if (hsl.data) {
        this.dusun = hsl.data
      }
      console.log(this.dusun);
    },
    async get_perangkat(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`perangkat.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.perangkat = hsl.data
      }
      console.log(this.perangkat,'perangkat');
    },
    async get_bumdes(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`bumdes.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.bumdes = hsl.data
      }
      console.log(this.bumdes,'bumdes');
    },
    async get_statistik(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`statistik.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.statistik = hsl.data
      }
      console.log(this.statistik , 'statistik');
    },
    async get_bantuan(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`bantuan.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.bantuan = hsl.data
      }
      console.log(this.bantuan , 'bantuan');
    },
    async get_pertanahan(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`tanah.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.pertanahan = hsl.data
      }
      console.log(this.pertanahan , 'pertanahan');
    },
    async get_pembangunan(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`tanah.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.pembangunan = hsl.data
      }
      console.log(this.pembangunan , 'pembangunan');
    },
    async get_keuangan(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`tanah.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.keuangan = hsl.data
      }
      console.log(this.keuangan , 'keuangan');
    },
    async get_umkm(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`umkm.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.umkm = hsl.data
      }
      console.log(this.umkm , 'umkm');
    },
    async get_galeri(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`galeri.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.galeri = hsl.data
      }
      console.log(this.galeri , 'galeri');
    },
    async get_potensi(){
      let hsl = await axios({
      method: "get",
      url:ip_server+`potensi.php?id=${this.id}`,
      })
      console.log(hsl.data);
      if (hsl.data) {
        this.potensi = hsl.data
      }
      console.log(this.potensi , 'potensi');
    },
  },
  async created() {
    await this.get_data()
    await this.get_surat()
    await this.get_pengumuman()
    await this.get_dusun()
    await this.get_perangkat()
    await this.get_bumdes()
    await this.get_statistik()
    await this.get_bantuan()
    await this.get_pertanahan()
    await this.get_pembangunan()
    await this.get_keuangan()
    await this.get_umkm()
    await this.get_galeri()
    await this.get_potensi()

    
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
