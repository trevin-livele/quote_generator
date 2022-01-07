import { Component } from '@angular/core';
import { Quotes } from './quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'quote_generator';

  quotes: Quotes[] = [
    new Quotes('Trevin', "trevin@gmail.com", "Love is not blind", 0, 0),
    new Quotes('Livele', "livele@gmail.com", "Arsenal is the best team according to trevo", 0, 0),
    new Quotes('Tracy', "tracy@gmail.com", "work hard", 0, 0),
  ]
  addUpvote(index: number){
    // console.log(index)
    console.log(this.quotes[index].upvote += 1)
  }


  removeUpvote(index: number){
    // console.log(index)
    console.log(this.quotes[index].downvote += 1)
  }
}
