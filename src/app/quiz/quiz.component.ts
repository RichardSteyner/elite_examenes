import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(public service: QuizService, private route: Router) { }

  ngOnInit(): void {
    if(parseInt(localStorage.getItem('seconds'))>0){
      this.service.seconds = parseInt(localStorage.getItem('seconds'))
      this.service.qnProgress = parseInt(localStorage.getItem('qnProgress'))
      this.service.qns = JSON.parse(localStorage.getItem('qns'))
      if(this.service.qnProgress == 10)
        this.route.navigate(['/result'])
      else
        this.startTimer()
    }else{
      this.service.seconds = 0
      this.service.qnProgress = 0
      /*this.service.getQuestions().subscribe(
        (data: any)=>{
          this.service.qns = data
          this.startTimer()
      })*/

      var data = [
        {
          QnId: '001',
          Qn: 'Question 1',
          ImageName: null,
          Options: ['option 1', 'option 2'],
          answer: 1
        },
        {
          QnId: '002',
          Qn: 'Question 2',
          ImageName: null,
          Options: ['option 1', 'option 2', 'option 3'],
          answer : 0
        },
        {
          QnId: '003',
          Qn: 'Question 3',
          ImageName: null,
          Options: ['option 1', 'option 2', 'option 3', 'option 4'],
          answer : 0
        },
        {
          QnId: '004',
          Qn: 'Question 4',
          ImageName: null,
          Options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'],
          answer : 0
        },
        {
          QnId: '005',
          Qn: 'Question 5',
          ImageName: null,
          Options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'],
          answer : 0
        },
        {
          QnId: '006',
          Qn: 'Question 6',
          ImageName: null,
          Options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'],
          answer : 0
        },
        {
          QnId: '007',
          Qn: 'Question 7',
          ImageName: null,
          Options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'],
          answer : 0
        },
        {
          QnId: '008',
          Qn: 'Question 8',
          ImageName: null,
          Options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'],
          answer : 0
        },
        {
          QnId: '009',
          Qn: 'Question 9',
          ImageName: null,
          Options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'],
          answer : 0
        },
        {
          QnId: '010',
          Qn: 'Question 10',
          ImageName: null,
          Options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'],
          answer : 0
        }
      ]

      this.service.qns = data
      this.startTimer()
    }
  }

  startTimer(){
    this.service.timer = setInterval(()=>{
      this.service.seconds++
      localStorage.setItem('seconds', this.service.seconds.toString())
    }, 1000)
  }

  Answer(qId, choice){
    this.service.qns[this.service.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.service.qns))
    this.service.qnProgress++
    localStorage.setItem('qnProgress', this.service.qnProgress.toString())
    if(this.service.qnProgress == 10){
      clearInterval(this.service.timer)
      this.route.navigate(['/result'])
    }
  }

}
