import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minNum:number = 0
  maxNum:number = 10
  currentNum:number = 8
  fill:number=80
  halfNum:number = 5
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.currentNum = Math.floor(Math.random()*(this.maxNum - this.minNum-1) + this.minNum+1)
      this.updateFill()
    }, 3000)
  }

  updateFill() {
    this.fill = (this.currentNum-this.minNum)/(this.maxNum-this.minNum)*100
  }

  updateHalf() {    
    if(this.minNum>=this.maxNum){
      this.minNum=0
      this.maxNum=10
      alert('최솟값은 최댓값보다 작아야 함')
    } else{
      this.updateFill()}
      return (this.minNum+ this.maxNum)/2
  }
  

  onlyNumber(event:any): boolean {
    let number = /^[0-9]$/;
    let result = number.test(event.key);
    return result
  }

}
