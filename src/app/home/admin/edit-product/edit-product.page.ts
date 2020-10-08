import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../home.service';
import {Barang} from '../../home.model';

import {AlertController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  loadedEditBarang: Barang;

  private BarangEdit = {
    edittNama: '',
    edittImg1: '',
    edittImg2: '',
    edittModel: '',
    edittHarga: 0,
    edittStok: 0,
    edittBaseClock: 0,
    edittBoostClock: 0,
    edittCore: 0,
    edittThread: 0,
    edittSpeed: 0,
    edittUkuran: 0,
    edittChipset: '',
    edittSocket: '',
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      private barangService: HomeService,
      private router: Router,
      private toastController: ToastController,
      private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('barangId')) { return; }
      const barangId = paramMap.get('barangId');
      this.loadedEditBarang = this.barangService.getBarang(barangId);

      this.BarangEdit['edittNama'] = this.loadedEditBarang.nama;
      this.BarangEdit['edittImg1'] = this.loadedEditBarang.imageUrl[0];
      this.BarangEdit['edittImg2'] = this.loadedEditBarang.imageUrl[1];
      this.BarangEdit['edittModel'] = this.loadedEditBarang.model;
      this.BarangEdit['edittHarga'] = this.loadedEditBarang.harga;
      this.BarangEdit['edittStok'] = this.loadedEditBarang.stock;
      this.BarangEdit['edittBaseClock'] = this.loadedEditBarang.baseClock;
      this.BarangEdit['edittBoostClock'] = this.loadedEditBarang.boostClock;
      this.BarangEdit['edittCore'] = this.loadedEditBarang.jumlahCore;
      this.BarangEdit['edittThread'] = this.loadedEditBarang.jumlahThread;
      this.BarangEdit['edittSpeed'] = this.loadedEditBarang.speed;
      this.BarangEdit['edittUkuran'] = this.loadedEditBarang.ukuran;
      this.BarangEdit['edittChipset'] = this.loadedEditBarang.chipset;
      this.BarangEdit['edittSocket'] = this.loadedEditBarang.socket;

    })
  }

  editBarang(){
    this.barangService.editBarang(this.loadedEditBarang.id, this.BarangEdit)
    this.router.navigate(['home/admin']);
    this.editToast();
  }


  async submitEdit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Product',
      mode: 'ios',
      message: 'Are you sure want to save ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => this.editBarang()
        }
      ]
    });

    await alert.present();
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Success.',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }


}
