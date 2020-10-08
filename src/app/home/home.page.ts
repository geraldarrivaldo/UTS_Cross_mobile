import { Component } from '@angular/core';
import {HomeService} from './home.service';
import {Barang} from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  GridOrList: boolean = true;
  barang: Barang[];
  constructor(
    private barangService: HomeService
  ) {}

  ngOnInit(){
    this.barang = this.barangService.getAllBarang();
  }
  ionViewWillEnter(){
    this.barang = this.barangService.getAllBarang();
  }

  toggleGridOrList(){
    if(this.GridOrList){
      this.GridOrList = false;
    }else{
      this.GridOrList = true;
    }
  }
}
