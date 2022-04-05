import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() links = [{name: '', icon: '', url:''}];
  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  switchPageAndClose(url: String) {
    //console.log(url);
    this.onCloseSidenav.emit(true);
    this.router.navigateByUrl(url.toString());
  }
}
