import { Injectable } from '@angular/core';
import { Barang } from './home.model';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  barangHaveStock = [];
  private barang: Barang[] = [
    {
      id: 'b1',
      produk: 'CPU',
      imageUrl: ['https://laptoping.com/cpus/wp-content/uploads/2019/03/Inte-Core-i5-8265U-8th-Gen.jpg','https://s2.glbimg.com/NDSsGEcbGJUzTpZfn-95cI599mM=/0x0:1003x601/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/p/n/LRIfRTRBeVFHbO1AMq9g/corei7-8geracao.png'],
      nama: 'Intel',
      model: 'i5-8265U',
      harga: 790000,
      stock: 40,
      baseClock: 3.6,
      boostClock: 4.0,
      jumlahCore: 4,
      jumlahThread: 8,
      speed: null,
      ukuran: null,
      chipset: null,
      socket: null,
    },
    {
      id: 'b2',
      produk: 'RAM',
      imageUrl: ['https://media.pricebook.co.id/images/product/LL/44901_LL_1.jpg','https://ecs7.tokopedia.net/img/cache/700/product-1/2017/1/13/15389282/15389282_b787826b-e263-4d22-afa8-d6e0d58730f9_600_600.jpg'],
      nama: 'kingston',
      model: 'KVR16LS11',
      harga: 229500,
      stock: 80,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: 1600,
      ukuran: 8,
      chipset: null,
      socket: null,
    },
    {
      id: 'b3',
      produk: 'Motherboard',
      imageUrl: ['https://jakmall.id/2018/05/images/products/c66791/thumbnail/digital-alliance-h61-motherboard-intel-socket-lga-1155.jpg?s=f16ed91bb67bad42983cfa2c17ace465','https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/1/12604514/12604514_d96319f9-9f5d-4ac6-b6c6-d1f4ba43a987_933_933'],
      nama: 'Digital Alliance',
      model: 'motherboard',
      harga: 700000,
      stock: 55,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: 14,
      ukuran: 8,
      chipset: 'Intel H61',
      socket: 'Intel Socket LGA 1155',
    },
    {
      id: 'b4',
      produk: 'GPU',
      imageUrl: ['https://www.asus.com/media/global/products/6QL502CauC0v1WSH/P_setting_fff_1_90_end_600.png','https://tpucdn.com/gpu-specs/images/c/2548-front.jpg'],
      nama: 'NVIDIA',
      model: 'GTX 750 Ti',
      harga: 2000000,
      stock: 20,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: null,
      socket: null,
    }
  ];


  constructor() { }

  getAllBarang(){
    this.barangHaveStock = [];
    let j = 0;

    for (let i = 0 ; i < this.barang.length; i++){
      if (this.barang[i].stock > 0){
        this.barangHaveStock[j] = this.barang[i];
        j++;
      }
    }
    return [...this.barangHaveStock];
  }

  getBarang(barangId: string) {
    return {...this.barang.find(barang => {
      return barang.id === barangId;
    })};

  }

  addBarang(data: FormGroup){
    let DATA = {
      id: 'p' + (parseInt(this.barang[this.barang.length-1].id.substring(1))+1).toString(),
      produk : data.value.type,
      imageUrl:[data.value.foto1,data.value.foto2],
      nama: data.value.nama,
      model: data.value.model,
      harga: data.value.harga,
      stock: data.value.stok,
      baseClock: data.value.baseClock,
      boostClock: data.value.boostClock,
      jumlahCore: data.value.core,
      jumlahThread: data.value.thread,
      speed: data.value.speed,
      ukuran: data.value.ukuran,
      chipset: data.value.chipset,
      socket: data.value.socket,
    }
    this.barang.push(DATA)
  }

  deleteBarang(barangId){
    this.barang = this.barang.filter(barang => {
      return barang.id !== barangId;
    });
  }

  editBarang(barangId, edittBarang){
    return {...this.barang.find(barang => {
        if (barang.id === barangId){
          barang.nama = edittBarang['edittNama'];
          barang.imageUrl = [edittBarang['edittImg1'],edittBarang['edittImg2']];
          barang.model = edittBarang['edittModel'];
          barang.harga = edittBarang['edittHarga'];
          barang.stock = edittBarang['edittStock'];
          barang.baseClock = edittBarang['edittBaseClock'];
          barang.boostClock = edittBarang['edittBoostClock'];
          barang.jumlahCore = edittBarang['edittCore'];
          barang.jumlahThread = edittBarang['edittThread'];
          barang.speed = edittBarang['edittSpeed'];
          barang.ukuran = edittBarang['edittUkuran'];
          barang.chipset = edittBarang['edittChipset'];
          barang.socket = edittBarang['edittSocket'];
        }
    })};
  }

}
