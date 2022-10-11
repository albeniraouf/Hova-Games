import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalDatePipe } from './ordinal-date.pipe';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [OrdinalDatePipe, DurationPipe],
  imports: [CommonModule],
  exports: [OrdinalDatePipe, DurationPipe],
})
export class PipesModule {}
