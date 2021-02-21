import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName: string
  customizedWelcomeMessage: string

  constructor(private route: ActivatedRoute,
    private welcomeService: WelcomeDataService) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['name']
  }


  getWelcomeMessage() {
    this.welcomeService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  getWelcomeMessageWithParm(customValue:string) {
    this.welcomeService.executeHelloWorldBeanServiceWithParm(customValue).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  handleSuccessfulResponse(response : HelloWorldBean) {
    this.customizedWelcomeMessage = response.message
  }

  handleErrorResponse(error) {
    this.customizedWelcomeMessage = error.error.message
    
  }


}
