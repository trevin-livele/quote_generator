import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  currentDate = new Date()

  quotes: Quotes[] = [
    new Quotes('Trevin', "trevin@gmail.com", "Love is not blind", 0, 0),
    new Quotes('Livele', "livele@gmail.com", "Arsenal is the best team according to trevo", 0, 0),
    new Quotes('Tracy', "tracy@gmail.com", "work hard", 0, 0),
  ]
  upvote: number = 0
  downvote: number = 0

  constructor() { }

  @Output() userData = new EventEmitter<{name: string, email : string, quote: string}>()
  @ViewChild('form') signupForm: ElementRef
  ngOnInit(): void {
  }





  onSubmit() {
    console.log(this.signupForm)
  }
  onSendUserData(){
    this.userData.emit()
  }
  addUpvote(index: number){
    // console.log(index)
    console.log(this.quotes[index].upvote += 1)
  }
  removeUpvote(index: number){
    // console.log(index)
    console.log(this.quotes[index].downvote += 1)
  }
  onAddData(name: any, email: any, quote: any) {
    console.log(name.value, email.value, quote.value)
    this.quotes.push({
      name: name.value,
      email: email.value,
      quote: quote.value,
      upvote: this.upvote,
      downvote: this.downvote
    })
    
  }
  onDeleteQuote(index: number){
    let confirmDelete = confirm(`Are you sure you want to delete this quote===>${this.quotes[index].quote}`)
    if(confirmDelete){
      this.quotes.splice(index, 1)
    }
  }
}
