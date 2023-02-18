import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/logging-service/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(public loggingService:LoggingService) { }

  ngOnInit(): void {
  }

}
