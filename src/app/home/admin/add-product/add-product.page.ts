import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HomeService} from '../../home.service';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  newBarang: FormGroup;
  type: string = null;

  constructor(
    private barangService: HomeService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
  ) { }

  ngOnInit() {

    this.newBarang = new FormGroup({
      foto1: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      foto2: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      type: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      nama: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      stock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      baseClock: new FormControl(null, {
        updateOn: 'change',
      }),
      boostClock: new FormControl(null, {
        updateOn: 'change',
      }),
      core: new FormControl(null, {
        updateOn: 'change',
      }),
      thread: new FormControl(null, {
        updateOn: 'change',
      }),
      speed: new FormControl(null, {
        updateOn: 'change',
      }),
      ukuran: new FormControl(null, {
        updateOn: 'change',
      }),
      chipset: new FormControl(null, {
        updateOn: 'change',
      }),
      socket: new FormControl(null, {
        updateOn: 'change',
      }),
    });

  }
 
  addBarang(){
    this.barangService.addBarang(this.newBarang);
    this.router.navigate(['home/admin']);
    this.addToast();
  }

  async tambahBarang() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add New Product',
      mode: 'ios',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => this.addBarang()
        }
      ]
    });

    await alert.present();
  }

  async addToast() {
    const toast = await this.toastController.create({
      message: 'Success',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }

}
