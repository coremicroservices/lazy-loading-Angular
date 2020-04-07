import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
   this.id =  this.activatedRoute.snapshot.paramMap.get('id');

  }

}
