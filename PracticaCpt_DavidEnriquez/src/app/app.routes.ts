import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DetailsComponent } from './components/details/details.component';
import { InformationComponent } from './components/information/information.component';
import { ManagerComponent } from './components/manager/manager.component';


export const routes: Routes = [
    {
        path: "details",
        component: DetailsComponent
    },
    {
        path: 'information',
        component: InformationComponent
    },
    {
        path: 'manager',
        component: ManagerComponent
    }
];
