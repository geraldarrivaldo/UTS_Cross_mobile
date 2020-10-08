import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';
import {Barang} from '../home.model';
import { IonItemSliding,AlertController,ToastController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  barang: Barang[];
  constructor(
    private barangService: HomeService,
    private router: Router,
      private toastController: ToastController,
      private alertController: AlertController,
  ) {}

  ngOnInit(){
    this.barang = this.barangService.getAllBarang();
  }
  
  ionViewWillEnter(){
    this.barang = this.barangService.getAllBarang();
  }

  edit(slidingItem: IonItemSliding) {
    slidingItem.close();
  }

  
  delete(barangId, slidingItems){
    this.barangService.deleteBarang(barangId);
    slidingItems.close();
    this.router.navigate(['home/admin']);
    this.deleteToast();
    this.ionViewWillEnter();
  }


  async submitDelete(barang: Barang, slidingItems: IonItemSliding) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Product',
      mode: 'ios',
      message: 'Are you sure want to delete ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => this.delete(barang.id, slidingItems)
        }
      ]
    });

    await alert.present();
  }

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Deleted.',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }
}
