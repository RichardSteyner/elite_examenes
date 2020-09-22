import { Component, OnInit } from '@angular/core';
import {QuizService} from '../shared/quiz.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

  constructor(private service: QuizService, private route: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(name: string, email: string){
    /*this.service.insertParticipante(name, email).subscribe(
      (data: any)=>{
        localStorage.clear
        localStorage.setItem('participant', JSON.stringify(data))
        this.route.navigate(['/quiz'])
    })*/
    var data = {
      Name: name,
      Email: email
    }
    localStorage.clear
    localStorage.setItem('participant', JSON.stringify(data))
    this.route.navigate(['/univ'])
  }

}
