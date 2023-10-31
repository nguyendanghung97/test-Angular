import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
import { InputPhoneNumberComponent } from './input-phone-number/input-phone-number.component';

// import { ModalService } from '../services/modal.service';


@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    InputPhoneNumberComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
   
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    InputPhoneNumberComponent,
    AlertComponent
  ],
  // providers: [ModalService]
})
export class SharedModule { }
