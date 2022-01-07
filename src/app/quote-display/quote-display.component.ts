import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  // quotes: Quotes[] = [
  //   new Quotes('Trevin', "trevin@gmail.com", "Love is not blind", 0, 0),
  //   new Quotes('Livele', "livele@gmail.com", "Arsenal is the best team according to trevo", 0, 0),
  //   new Quotes('Tracy', "tracy@gmail.com", "work hard", 0, 0),
  // ]
  @Input() quotes: any
  constructor() { }

  ngOnInit(): void {
  }
  // addUpvote(index: number){
  //   // console.log(index)
  //   console.log(this.quotes[index].upvote += 1)
  // }


  // removeUpvote(index: number){
  //   // console.log(index)
  //   console.log(this.quotes[index].downvote += 1)
  // }
}
