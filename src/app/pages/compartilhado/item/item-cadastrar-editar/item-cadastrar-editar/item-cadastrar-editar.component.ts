import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemService } from '../../../../../services/item/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../../../../../interfaces/item.model';

@Component({
  selector: 'app-item-cadastrar-editar',
  templateUrl: './item-cadastrar-editar.component.html',
  styleUrls: ['./item-cadastrar-editar.component.scss'],
})
export class ItemCadastrarEditarComponent implements OnInit {
  formGroup!: FormGroup;
  item!: Item;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data['item'];
    this.formGroup = this.formBuilder.group({
      id: [this.item && this.item.id ? this.item.id : null],
      nome: [
        this.item && this.item.nome ? this.item.nome : '',
        Validators.required,
      ],
      descricao: [
        this.item && this.item.descricao ? this.item.descricao : '',
        Validators.required,
      ],
      preco: [
        this.item && this.item.preco ? this.item.preco : '',
        Validators.required,
      ],
    });
  }

  salvar() {
    if (this.item && this.item.id) {
      this.itemService.atualizar(this.formGroup.value).subscribe({
        next: () => {
          this.router.navigateByUrl('/itens');
        },
        error: (error) => {
          alert('Erro ao atualizar ' + JSON.stringify(error));
        },
      });
    } else {
      this.itemService.cadastrar(this.formGroup.value).subscribe({
        next: () => {
          this.router.navigateByUrl('/itens');
        },
        error: (error) => {
          alert('Erro ao cadastar ' + JSON.stringify(error));
        },
      });
    }
  }

  deletar() {
    if (confirm('Deseja deletar o item ' + this.item.nome)) {
      this.itemService.deletar(this.item).subscribe({
        next: () => {
          this.router.navigateByUrl('/itens');
        },
        error: (error) => {
          alert('Erro ao deletar ' + JSON.stringify(error));
        },
      });
    }
  }
}
