import {AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';

import {AuthFormComponent} from "./auth-form/auth-form.component";

import { User } from './auth-form/auth-form.interface';
import {Resolver} from "awesome-typescript-loader/dist/paths-plugin";


@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry ></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit{

  @ViewChild('entry',{read : ViewContainerRef}) entry : ViewContainerRef;

  constructor(
    private resolver : ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    const component2 = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create Acoount';
    component.instance.submitted.subscribe(this.loginUser)  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
