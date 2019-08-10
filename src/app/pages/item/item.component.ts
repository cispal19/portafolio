import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDes } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDes;
  id: string;

  constructor( private route: ActivatedRoute,
               private productoService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.id = parametros['id'];
      this.productoService.getProducto(parametros['id']).subscribe((producto: ProductoDes) => {
          this.producto = producto;
          
      });


    });
  }

}
