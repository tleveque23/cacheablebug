import { Component, OnInit } from '@angular/core';
import { TestService } from 'app/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  constructor(private testService: TestService) {
  }

  public ngOnInit(): void {
    this.testService.getNothing().subscribe( (result) => {
      this.title = result;
    });
  }

  public update(): void {
    this.testService.getNothing().subscribe( (result) => {
      this.title = result;
    });
  }

  public clearCache(): void {
    console.log('Clear the cache');
    this.testService.clearCache();
  }
}
