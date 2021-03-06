import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolversRoutingModule } from './solvers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NearestNeighbourSolverComponent } from './nearest-neighbour-solver/nearest-neighbour-solver.component';
import { LocalSearchSolverComponent } from './local-search-solver/local-search-solver.component';
import { GeneticAlgorithmSolverComponent } from './genetic-algorithm-solver/genetic-algorithm-solver.component';

@NgModule({
  declarations: [
    NearestNeighbourSolverComponent,
    LocalSearchSolverComponent,
    GeneticAlgorithmSolverComponent,
  ],
  imports: [
    CommonModule,
    SolversRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SolversModule { }
