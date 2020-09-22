import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public service: QuizService, private route: Router) { }

  ngOnInit(): void {
    if(parseInt(localStorage.getItem('qnProgress'))==10){
      this.service.seconds = parseInt(localStorage.getItem('seconds'))
      this.service.qnProgress = parseInt(localStorage.getItem('qnProgress'))
      this.service.qns = JSON.parse(localStorage.getItem('qns'))
      /*this.service.getAnswers().subscribe(
        (data: any) => {
          this.service.correctAnswerCount = 0;
          this.service.qns.forEach((e,i)=>{
            if(e.answer==data[i]){
              this.service.correctAnswerCount++
            }          
            e.correct = data[i]
          })
        }
      )*/
      var data = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.service.correctAnswerCount = 0
      this.service.qns.forEach((e,i)=>{
        if(e.answer==data[i]){
          this.service.correctAnswerCount++
        }          
        e.correct = data[i]
      })
    }else{
      this.route.navigate(['/quiz'])
    }
  }

  OnSubmit(){
    this.service.submitScore().subscribe(()=>{
      this.restart()
    })
  }

  restart(){
    localStorage.setItem('seconds', "0")
    localStorage.setItem('qnProgress', "0")
    localStorage.setItem('qns', "")
    this.route.navigate(['/quiz'])
  }

}
