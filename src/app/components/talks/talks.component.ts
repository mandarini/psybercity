import { Component } from "@angular/core";
import { talks } from "src/app/consts/talks";
import { KeyValue } from "@angular/common";

@Component({
  selector: "app-talks",
  templateUrl: "./talks.component.html",
  styleUrls: ["./talks.component.scss"],
})
export class TalksComponent {
  all_talks: { [key: string]: any } = talks;

  constructor() {}

  keyAscOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return a.key < b.key ? -1 : b.key < a.key ? 1 : 0;
  };
}
