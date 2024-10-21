import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any = {
    userName:'',
    password:''
  }


  router = inject(Router)

  onLogin(){
    if(this.loginObj.userName === 'admin' && this.loginObj.password === 'admin'){
      localStorage.setItem("loginUser",this.loginObj.userName)
      this.router.navigateByUrl('/dashboard')
    } else{
      alert("wrong credential")
    }
  }

  

}
