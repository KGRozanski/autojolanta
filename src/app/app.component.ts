import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {

    const scrollLink = $('.scroll');

    $(document).ready(function() {

      //Smoooooth scrolling
      scrollLink.click(function(event) {
        event.preventDefault();
        $('.navbar-collapse').removeClass('in');
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        }, 1500);
      });
    });

    // Active link switching
    $(window).scroll(function() {
      let scrollbarLocation = $(this).scrollTop();
      scrollLink.each(function() {
        let sectionOffset = $(this.hash).offset().top - 20;

        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
    })
  }
}
