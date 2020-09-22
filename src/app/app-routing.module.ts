import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth/auth.guard';
import { UniversidadesComponent } from './universidades/universidades.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'register'},
  {path:'register', component:RegisterComponent},
  {path:'quiz', component:QuizComponent, canActivate: [AuthGuard]},
  {path:'result', component:ResultComponent, canActivate: [AuthGuard]},
  {path:'univ', component:UniversidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
