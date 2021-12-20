import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../service/services.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-ajout-apprenants',
  templateUrl: './ajout-apprenants.page.html',
  styleUrls: ['./ajout-apprenants.page.scss'],
})
export class AjoutApprenantsPage implements OnInit {
 Erreur:any
  constructor(
    private apprenant :ServicesService) { }
    addApprenant = new FormGroup({ 
     nom : new FormControl(''),
      prenom : new FormControl(''),
      email : new FormControl(''),
      telephone: new FormControl(''),
      // genre : new FormControl(''),
    }
    );

  ngOnInit() {
  }
  SaveData(){
    // console.log(this.addStudent.value);
    this.apprenant.Ajout(this.addApprenant.value).subscribe((result)=>{
      console.log(result);
    },error=>{
      this.Erreur = error.error      
    })
  }

}
