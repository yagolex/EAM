import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../core/services/logger.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule],
  providers: [LoggerService],
  exports: []
})
export class SharedModule {}
