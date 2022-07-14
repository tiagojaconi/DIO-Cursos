import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserInterface } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html'
})
export class UsersFormComponent implements OnInit {
  userForm: FormGroup;
  users: Array<UserInterface> = [];
  userId: number = 0;
  
  constructor(private fb: FormBuilder, private userService: UserService, private actRoute: ActivatedRoute) { 
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {

      this.userId = Number(params.get('id'));
      
      if(this.userId){
        this.userService.getUser(this.userId).subscribe(result => {
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao
          })
        })
      }
    })

    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  createUser(): void{
    this.userForm.value.id = this.users.length + 1;

    this.userService.postUser(this.userForm.value).subscribe(result => {
      console.log(`${this.userForm.value.nome} cadastrado com sucesso`);
    })
  }

  updateUser(): void{
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(result => {
      console.log('usuario atualizado', result);
    })
  }

  actionButton(): void{
    if(this.userId) {
      this.updateUser()
    }else {
      this.createUser()
    }
  }

}
