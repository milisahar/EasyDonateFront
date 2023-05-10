import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showNotification() {
    $('.custom-notification').appendTo('body').fadeIn().delay(3000).fadeOut(1000, function() {
        $(this).remove();
    });
}


}
