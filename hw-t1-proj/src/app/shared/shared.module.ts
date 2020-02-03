import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../core/services/logger.service';
import { GetDurationPipe } from './pipes/get-duration.pipe';

@NgModule({
  declarations: [GetDurationPipe],
  imports: [CommonModule, FormsModule],
  providers: [LoggerService],
  exports: [GetDurationPipe]
})
export class SharedModule {}
