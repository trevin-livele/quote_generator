import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

 
  @Input() quotes: any
  constructor() { }

  ngOnInit(): void {
  }

}
