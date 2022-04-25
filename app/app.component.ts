import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {AuthFormComponent} from "./auth-form/auth-form.component";

import { User } from './auth-form/auth-form.interface';
import {Resolver} from "awesome-typescript-loader/dist/paths-plugin";
import {read} from "fs";


@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container
        [ngTemplateOutlet]="tmpl">
      </ng-container>
      <template #tmpl>
          Deepanshu : Ghaziabad
      </template>
    </div>
  `
})
export class AppComponent{
}
