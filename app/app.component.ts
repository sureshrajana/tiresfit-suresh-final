import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { MatHorizontalStepper, MatStep } from "@angular/material";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  tyreList: any;
  imgFlag: boolean = false;
  makeList: any;
  modelList: any;
  styleList: any;
  tyre: any;
  make: any;
  style: any;
  model: any;
  typeFlag: boolean = false;
  chooseFlag: boolean = false;
  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;
  step1Completed = false;

  isLinear = true;
  constructor(private http: HttpClient) {
    this.http
      .get("https://6080be3273292b0017cdbf2a.mockapi.io/years")
      .subscribe(data => {
        this.tyreList = data.year;
      });
    this.http
      .get("https://6080be3273292b0017cdbf2a.mockapi.io/makes")
      .subscribe(data => {
        this.makeList = data.make;
        console.log("json" + JSON.stringify(this.makeList));
      });
    this.http
      .get("https://6080be3273292b0017cdbf2a.mockapi.io/models")
      .subscribe(data => {
        this.madeList = data.model;
        console.log("json" + JSON.stringify(this.madeList));
      });
    this.http
      .get("https://6080be3273292b0017cdbf2a.mockapi.io/trim")
      .subscribe(data => {
        this.styleList = data.trim;
        console.log("json" + JSON.stringify(this.styleList));
      });
  }
  complete() {
    this.stepper.selected.completed = true;
    this.stepper.selected.editable = false;
    this.stepper.next();
  }

  next() {
    this.stepper.next();
  }
  tyreFun(tyre) {
    this.tyre = tyre;
    console.log("tyre" + tyre);
    this.stepper.selected.completed = true;
    this.stepper.selected.editable = false;
    this.stepper.next();
  }
  makeFun(make) {
    this.make = make;
    console.log("tyre" + make);
    this.stepper.selected.completed = true;
    this.stepper.selected.editable = false;
    this.stepper.next();
  }
  madeFun(made) {
    console.log("tyre" + made);
    this.model = made;
    this.stepper.selected.completed = true;
    this.stepper.selected.editable = false;
    this.stepper.next();
  }
  styleFun(style) {
    this.style = style;
    console.log("tyre" + style);
    this.stepper.selected.completed = true;
    this.stepper.selected.editable = false;
    this.stepper.next();
  }
  select(type) {
    if (type) {
      this.typeFlag = true;
      this.imgFlag = false;
    } else {
      this.typeFlag = false;
    }
    console.log("trpe" + type);
  }
  choose(choose) {
    if (choose == "sample") {
      this.chooseFlag = true;
      this.imgFlag = true;
    }
  }

  startover() {
    window.location.reload();
  }
}
