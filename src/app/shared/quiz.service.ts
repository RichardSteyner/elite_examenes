import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  readonly rootUrl = ''

  qns: any[]
  seconds: number
  timer
  qnProgress: number
  correctAnswerCount: number = 0

  constructor(private http : HttpClient) { 
  }

  displayTimeElapsed(){
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60)
  }

  insertParticipante(name: string, email: string){
    var body = {
      Name: name,
      Email: email
    }

    return this.http.post(this.rootUrl + '/api/insertParticipant', body)
  }

  getParticipantName(){
    var participant = JSON.parse(localStorage.getItem('participant'))
    return participant.Name
  }

  getQuestions(){
    return this.http.get(this.rootUrl + '/api/Questions')
  }

  getAnswers(){
    var body = this.qns.map(x => x.QnId)
    return this.http.post(this.rootUrl + '/api/Answers', body)
  }

  submitScore(){
    var body = JSON.parse(localStorage.getItem('participant'))
    body.score = this.correctAnswerCount
    body.TimeSpent = this.seconds
    return this.http.post(this.rootUrl + '/api/UpdateOutput', body)
  }

}
