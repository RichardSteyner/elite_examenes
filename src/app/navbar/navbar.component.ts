import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: QuizService, private route: Router) { }

  ngOnInit(): void {
  }

  SingOut(){
    localStorage.clear()
    clearInterval(this.service.timer)
    this.route.navigate(['/register'])
  }

}
