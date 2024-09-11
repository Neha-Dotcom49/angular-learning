import {   AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,    ContentChild,    DoCheck,    ElementRef,    Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements 
 OnInit,
 OnChanges, 
 DoCheck,
 AfterContentInit,
 AfterContentChecked, AfterViewInit,
 AfterViewChecked,
 OnDestroy {

  @Input() childData: string = '';

  @ContentChild('projectedContent') content!: ElementRef;
  @ViewChild('viewchild') viewchildElement!: ElementRef;
  message='Hello from child';

  private dataSubscription!: Subscription;
  counter: any;
  num: number = 1;
  // inject the demo service 
  constructor(private _demoService: DemoService) { }

 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Invoked');
    console.log(changes);
    
   }

  ngOnInit(): void {

    this.dataSubscription =this._demoService.getPosts().subscribe(res => {
      console.log(res); 
    })
    console.log('ngOnInit Invoked');

    console.log('ContentChild', this.content); // undefined
    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
    }, 1000)
  }


  ngDoCheck(): void {
  
    console.log('ngDoCheck called');
    
  }

  ngAfterContentInit(): void {
    
    console.log('ngAfterContentInit called');
    console.log('ContentChild', this.content);

   // this.content.nativeElement.setAttribute('style', 'color:red');
   this.content.nativeElement.setAttribute('style', `color:${this.childData}`);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    this.content.nativeElement.setAttribute('style', `color:${this.childData}`);
  }
  ngAfterViewInit(): void {
    
    console.log('ngAfterViewInit called');
    console.log(this.viewchildElement);
   // this.viewchildElement.nativeElement.setAttribute('style', 'color: pink'); hard coded pink value
   this.viewchildElement.nativeElement.setAttribute('style', `color:${this.childData}`); // dyanamic value 
  } 
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    this.viewchildElement.nativeElement.setAttribute('style', `color:${this.childData}`);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    this.dataSubscription.unsubscribe();
    clearInterval(this.counter);
  }

}
