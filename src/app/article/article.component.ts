import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  title: string = 'Whatever you want';
  content: string = 'Some content goes here';
  isTechRelated: boolean = true;
  style1="blue"
  //myStyle = "{'color': 'blue'}"

  myStyle() {
    if (this.isTechRelated == true)
    {
      return "{'color': 'blue'}"
    }
  }
}
